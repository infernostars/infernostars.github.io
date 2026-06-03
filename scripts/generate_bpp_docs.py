from __future__ import annotations

import json
import os
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
PROJECTS_ROOT = REPO_ROOT.parents[1]
BXENGINE_SRC = Path(
    os.environ.get("BXENGINE_SRC", PROJECTS_ROOT / "Python" / "bxengine" / "src")
)
OUTPUT_PATH = REPO_ROOT / "src" / "generated" / "bppDocsData.js"


def main() -> None:
    sys.path.insert(0, str(BXENGINE_SRC))

    from bxengine.docs import get_docs, parse_docstring
    from bxengine.runtime.extensions.builtin import BuiltinExtension
    from bxengine.runtime.extensions.discord_stub import (
        BrainGlobalExtension,
        BrainUserExtension,
        DiscordStubExtension,
    )

    providers = [
        BuiltinExtension,
        BrainGlobalExtension,
        BrainUserExtension,
        DiscordStubExtension,
    ]

    docs_by_name: dict[str, dict[str, object]] = {}
    for provider in providers:
        for doc in get_docs(provider).values():
            parsed = parse_docstring(doc.raw_doc)
            docs_by_name[doc.name] = {
                "name": doc.name,
                "primaryName": doc.primary_name,
                "aliases": list(doc.aliases),
                "signature": doc.signature,
                "category": doc.category,
                "isAlias": doc.is_alias,
                "aliasOf": doc.alias_of,
                "summary": list(parsed.summary),
                "parameters": [
                    {"name": name, "description": description, "optional": False}
                    for name, description in parsed.parameters
                ]
                + [
                    {"name": name, "description": description, "optional": True}
                    for name, description in parsed.optional_parameters
                ],
                "returns": list(parsed.returns),
                "raises": list(parsed.raises),
                "examples": list(parsed.examples),
                "notes": list(parsed.notes),
            }

    docs = sorted(
        (item for item in docs_by_name.values() if not item["isAlias"]),
        key=lambda item: (str(item["category"]), str(item["name"])),
    )

    OUTPUT_PATH.write_text(
        "export const docs = "
        + json.dumps(docs, ensure_ascii=False, indent="\t")
        + ";\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
