export const docs = [
	{
		"name": "ARGS",
		"primaryName": "ARGS",
		"aliases": [
			"ARG"
		],
		"signature": "[ARGS a]",
		"category": "Args",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Get one of the arguments provided for the program.",
			"If `a` is not provided, returns an array containing all arguments."
		],
		"parameters": [
			{
				"name": "a",
				"description": "an integer index into the list of arguments provided. Zero-indexed (the first is 0)",
				"optional": false
			}
		],
		"returns": [
			"the argument(s) specified"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SETARGS",
		"primaryName": "SETARGS",
		"aliases": [],
		"signature": "[SETARGS a ...]",
		"category": "Args",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Change the arguments provided for the program."
		],
		"parameters": [
			{
				"name": "a",
				"description": "if only this parameter is provided (must be an array), the arguments will be changed to this.",
				"optional": false
			},
			{
				"name": "...",
				"description": "set the arguments to each provided parameter (with `a` as the first)",
				"optional": true
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "ARRAY",
		"primaryName": "ARRAY",
		"aliases": [],
		"signature": "[ARRAY ...]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Creates a new array."
		],
		"parameters": [
			{
				"name": "...",
				"description": "items that will be part of the array. Can be empty",
				"optional": false
			}
		],
		"returns": [
			"an array created from the items given"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CHOOSE",
		"primaryName": "CHOOSE",
		"aliases": [],
		"signature": "[CHOOSE a ...]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Randomly chooses between items in an array, or between the arguments of the function"
		],
		"parameters": [
			{
				"name": "a",
				"description": "an array of items",
				"optional": false
			},
			{
				"name": "...",
				"description": "more items to choose between; if supplied, `a` will be treated as a single item",
				"optional": true
			}
		],
		"returns": [
			"a randomly selected item from the array or items supplied."
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "INDEX",
		"primaryName": "INDEX",
		"aliases": [],
		"signature": "[INDEX a b]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Indexes into a string or array. Always zero-indexed (index 0 is the first item/character)",
			"Negative indexes can be used (-1 is the last item, -2 the second-to-last, etc.)"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the string or array to be indexed into",
				"optional": false
			},
			{
				"name": "b",
				"description": "the index to use",
				"optional": false
			}
		],
		"returns": [
			"the `b`-th item of the array `a`, or `b`-th character of the string `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SHUFFLE",
		"primaryName": "SHUFFLE",
		"aliases": [],
		"signature": "[SHUFFLE a]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Randomly shuffles the contents of an array"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array to shuffle",
				"optional": false
			}
		],
		"returns": [
			"an array containing the items of `a` in a random order"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SLICE",
		"primaryName": "SLICE",
		"aliases": [],
		"signature": "[SLICE a b? c? d?]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns a portion of a string or array"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the string or array to be sliced",
				"optional": false
			},
			{
				"name": "b",
				"description": "the start of the slice",
				"optional": true
			},
			{
				"name": "c",
				"description": "the end of the slice; the character at this index will not be included",
				"optional": true
			},
			{
				"name": "d",
				"description": "the step; 2 will only contain every other item, 3 every third item, and -1 will go backwards",
				"optional": true
			}
		],
		"returns": [
			"the sliced string/array"
		],
		"raises": [],
		"examples": [
			"[SLICE \"hello world\" 0 5] -> hello",
			"[SLICE \"hello world\" \"\" -3] -> hello wo",
			"[SLICE \"-h-e-l-l-o\" 1 \"\" 2] -> hello"
		],
		"notes": []
	},
	{
		"name": "SORT",
		"primaryName": "SORT",
		"aliases": [],
		"signature": "[SORT a]",
		"category": "Array",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Sorts an array",
			"Items will be ordered by number if all values in the array are numbers, otherwise lexicographically",
			"(\"15\" < \"2\" < \"aeiou\" < \"zyxxy\")"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array to sort",
				"optional": false
			}
		],
		"returns": [
			"a sorted version of the array"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CALL",
		"primaryName": "CALL",
		"aliases": [],
		"signature": "[CALL a b]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Call the function or macro `a` with the array `b` as arguments"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the function or macro to be executed",
				"optional": false
			},
			{
				"name": "b",
				"description": "an array of arguments to use for the function or macro",
				"optional": false
			}
		],
		"returns": [
			"the return value of the function or macro"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "COMPARE",
		"primaryName": "COMPARE",
		"aliases": [],
		"signature": "[COMPARE a op b]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Compares 2 items."
		],
		"parameters": [
			{
				"name": "a",
				"description": "the first item to compare",
				"optional": false
			},
			{
				"name": "op",
				"description": "the operation to use. can be >, <, >=, <=, !=, =, ==, \"and\", or \"or\".",
				"optional": false
			},
			{
				"name": "b",
				"description": "the second item to compare. Must have the same type as `a`",
				"optional": false
			}
		],
		"returns": [
			"the result of the comparison, as 0 if false and 1 if true"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "EXCEPTION",
		"primaryName": "EXCEPTION",
		"aliases": [],
		"signature": "[EXCEPTION detail]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"May only be used in the second block of a TRY block. Gets the exception caused during the execution of the first block."
		],
		"parameters": [
			{
				"name": "detail",
				"description": "a string. \"type\" will return the exception type (e.g. \"NameError\"), while \"detail\" will return the details (e.g. \"Function INVALID does not exist\")",
				"optional": false
			}
		],
		"returns": [
			"see above."
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "IF",
		"primaryName": "IF",
		"aliases": [],
		"signature": "[IF condition true false?]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Selects a function based on whether the condition is true"
		],
		"parameters": [
			{
				"name": "condition",
				"description": "the minimum of the range, inclusive",
				"optional": false
			},
			{
				"name": "true",
				"description": "the function to be run if the condition is true",
				"optional": false
			},
			{
				"name": "false",
				"description": "the function to be run if the condition is false",
				"optional": true
			}
		],
		"returns": [
			"the return value of the selected function, or \"\" if the condition is false and the `false` parameter is not supplied"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "LOOP",
		"primaryName": "LOOP",
		"aliases": [],
		"signature": "[LOOP amount code]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Loop a block of code repeatedly."
		],
		"parameters": [
			{
				"name": "amount",
				"description": "the amount of times to loop",
				"optional": false
			},
			{
				"name": "code",
				"description": "the block to be looped",
				"optional": false
			}
		],
		"returns": [
			"the return value of all loops concatenated together"
		],
		"raises": [],
		"examples": [
			"[LOOP 10 [RANDINT 0 5]] -> 2013404123"
		],
		"notes": [
			"@note you may only loop 4096 times total during a program"
		]
	},
	{
		"name": "MACRO",
		"primaryName": "MACRO",
		"aliases": [],
		"signature": "[MACRO name params block]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Create a macro that can be called with [@macro params]."
		],
		"parameters": [
			{
				"name": "name",
				"description": "the name of the macro",
				"optional": false
			},
			{
				"name": "params",
				"description": "an array of the names of parameters for the macro. You may add ? to the end of a name to mark it as optional. Optional parameters must come after required ones; you can also add ... to the end to allow any number of extra arguments.",
				"optional": false
			},
			{
				"name": "block",
				"description": "the code that the macro will run",
				"optional": false
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "PARAMS",
		"primaryName": "PARAMS",
		"aliases": [
			"PARAM"
		],
		"signature": "[PARAMS a]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"May only be used inside a macro. Get one of the parameters of the macro",
			"If `a` is not provided, returns an array containing all parameters"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the name of the argument to retrieve",
				"optional": false
			}
		],
		"returns": [
			"the parameter(s) specified"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "THROW",
		"primaryName": "THROW",
		"aliases": [],
		"signature": "[THROW exception]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Throw an exception and stop executing the program"
		],
		"parameters": [
			{
				"name": "exception",
				"description": "the details of the exception",
				"optional": false
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "TRY",
		"primaryName": "TRY",
		"aliases": [],
		"signature": "[TRY a b]",
		"category": "Control Flow",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Tries to run the first block. If an error occurs, execution will jump to the second block. Whatever happened before the error will still happen."
		],
		"parameters": [
			{
				"name": "a",
				"description": "The first block of functions to run. Everything executes until an error is found, in which case it stops and begins running `b`",
				"optional": false
			},
			{
				"name": "b",
				"description": "The block to be run if `a` encounters an error.",
				"optional": false
			}
		],
		"returns": [
			"the return value of the first block if it doesn't error, otherwise that of the second block"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "BUTTON",
		"primaryName": "BUTTON",
		"aliases": [],
		"signature": "[BUTTON args label color? locked?]",
		"category": "Discord",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Create a button that can be pressed to rerun the tag with special arguments."
		],
		"parameters": [
			{
				"name": "args",
				"description": "a string containing the arguments to run the tag with; if it's the string \"null\", disables the button",
				"optional": false
			},
			{
				"name": "label",
				"description": "the label of the button",
				"optional": false
			},
			{
				"name": "color",
				"description": "the button color/style (`gray`, `blue`, `green`, or `red`)",
				"optional": true
			},
			{
				"name": "locked",
				"description": "whether the button is locked to only the current runner (`true`/`false`)",
				"optional": true
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CHANNEL",
		"primaryName": "CHANNEL",
		"aliases": [],
		"signature": "[CHANNEL]",
		"category": "Discord",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Get the ID of the channel the tag was run in."
		],
		"parameters": [],
		"returns": [
			"the channel ID"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "USERID",
		"primaryName": "USERID",
		"aliases": [],
		"signature": "[USERID]",
		"category": "Discord",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Get the Discord ID of the user running the tag."
		],
		"parameters": [],
		"returns": [
			"the runner's ID"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "USERNAME",
		"primaryName": "USERNAME",
		"aliases": [],
		"signature": "[USERNAME]",
		"category": "Discord",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Get the username of the user running the tag."
		],
		"parameters": [],
		"returns": [
			"the runner's username"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "GLOBAL",
		"primaryName": "GLOBAL",
		"aliases": [],
		"signature": "[GLOBAL s v]",
		"category": "Global Variables",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Works with global variables, variables that persist between tag runs.",
			"The creator of a global variable becomes its owner, and from then on only the owner and their tags may modify it. However, anybody may access the value of the variable.",
			"**GLOBAL DEFINE**: Defines or sets a global variable `v` to `s`.",
			"**GLOBAL VAR**: Gets the value of the global variable `s`."
		],
		"parameters": [
			{
				"name": "s",
				"description": "the global variable to be accessed",
				"optional": false
			},
			{
				"name": "v",
				"description": "(DEFINE) the value to set `s` to",
				"optional": false
			}
		],
		"returns": [
			"(DEFINE) nothing",
			"(VAR) the value of `s`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "ABS",
		"primaryName": "ABS",
		"aliases": [],
		"signature": "[ABS a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the absolute value of a number (the number made positive if it was negative, otherwise unchanged)"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to use",
				"optional": false
			}
		],
		"returns": [
			"the absolute value of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CEIL",
		"primaryName": "CEIL",
		"aliases": [],
		"signature": "[CEIL a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the ceiling of a number; the smallest whole number greater or equal to it"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to be ceiled",
				"optional": false
			}
		],
		"returns": [
			"the ceil of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "COS",
		"primaryName": "COS",
		"aliases": [],
		"signature": "[COS a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the cosine of `a`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to take the cosine of",
				"optional": false
			}
		],
		"returns": [
			"the cosine of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "FACTORIAL",
		"primaryName": "FACTORIAL",
		"aliases": [],
		"signature": "[FACTORIAL a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the factorial of `a` (`a * a-1 * a-2 ... 2 * 1`)"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to take the factorial of",
				"optional": false
			}
		],
		"returns": [
			"the factorial of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": [
			"@note this function also works for fractional and (most) negative values (using the equivalent Γ(x+1))"
		]
	},
	{
		"name": "FLOOR",
		"primaryName": "FLOOR",
		"aliases": [],
		"signature": "[FLOOR a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the floor of a number; the part before the decimal point"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to be floored",
				"optional": false
			}
		],
		"returns": [
			"the floor of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "LOG",
		"primaryName": "LOG",
		"aliases": [],
		"signature": "[LOG a b]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the logarithm of `a` base `b`, or the natural logarithm of `a` if `b` is omitted"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to take the logarithm of",
				"optional": false
			},
			{
				"name": "b",
				"description": "the base of the logarithm; defaults to e",
				"optional": false
			}
		],
		"returns": [
			"the logarithm"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "MATH",
		"primaryName": "MATH",
		"aliases": [],
		"signature": "[MATH expression]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Function for math expressions."
		],
		"parameters": [
			{
				"name": "expression",
				"description": "The expression to be evaluated. Can contain functions, numbers, and the +, -, *, /, ^, and % (modulo) operators.",
				"optional": false
			}
		],
		"returns": [
			"the answer to the expression"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "MAX",
		"primaryName": "MAX",
		"aliases": [],
		"signature": "[MAX a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the maximum value in the array `a`",
			"This is the highest number if all values in the array are numbers, otherwise the lexicographically last",
			"(\"15\" < \"2\" < \"aeiou\" < \"zyxxy\")"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array to find the maximum value of",
				"optional": false
			}
		],
		"returns": [
			"the maximum"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "MIN",
		"primaryName": "MIN",
		"aliases": [],
		"signature": "[MIN a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the minimum value in the array `a`",
			"This is the lowest number if all values in the array are numbers, otherwise the lexicographically earliest",
			"(\"15\" < \"2\" < \"aeiou\" < \"zyxxy\")"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array to find the minimum value of",
				"optional": false
			}
		],
		"returns": [
			"the minimum"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "MOD",
		"primaryName": "MOD",
		"aliases": [],
		"signature": "[MOD a b]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the remainder (\"modulo\") of dividing `a` by `b`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to be divided",
				"optional": false
			},
			{
				"name": "b",
				"description": "the number to divide by",
				"optional": false
			}
		],
		"returns": [
			"the modulo of `a` and `b`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "RANDINT",
		"primaryName": "RANDINT",
		"aliases": [],
		"signature": "[RANDINT a b]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Generates a random integer number between `a` and `b`, including `a` but not `b`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the minimum of the range, inclusive",
				"optional": false
			},
			{
				"name": "b",
				"description": "the maximum of the range, exclusive",
				"optional": false
			}
		],
		"returns": [
			"the random number"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "RANDOM",
		"primaryName": "RANDOM",
		"aliases": [],
		"signature": "[RANDOM a b]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Generates a random number between `a` and `b`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the minimum of the range",
				"optional": false
			},
			{
				"name": "b",
				"description": "the maximum of the range",
				"optional": false
			}
		],
		"returns": [
			"the random number"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "ROUND",
		"primaryName": "ROUND",
		"aliases": [],
		"signature": "[ROUND a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Rounds a number to the closest whole number"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to be rounded",
				"optional": false
			}
		],
		"returns": [
			"the rounded number"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SIN",
		"primaryName": "SIN",
		"aliases": [],
		"signature": "[SIN a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the sine of `a`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to take the sine of",
				"optional": false
			}
		],
		"returns": [
			"the sine of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "TAN",
		"primaryName": "TAN",
		"aliases": [],
		"signature": "[TAN a]",
		"category": "Math",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the tangent of `a`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the number to take the tangent of",
				"optional": false
			}
		],
		"returns": [
			"the tangent of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CHAR",
		"primaryName": "CHAR",
		"aliases": [],
		"signature": "[CHAR a]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns a Unicode character from its codepoint"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the codepoint of the character as a decimal integer",
				"optional": false
			}
		],
		"returns": [
			"the character at that codepoint"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CHOOSECHAR",
		"primaryName": "CHOOSECHAR",
		"aliases": [],
		"signature": "[CHOOSECHAR s]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Chooses a random character of the string `s`."
		],
		"parameters": [
			{
				"name": "s",
				"description": "the string to use",
				"optional": false
			}
		],
		"returns": [
			"a randomly chosen character of `s`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "CONCAT",
		"primaryName": "CONCAT",
		"aliases": [],
		"signature": "[CONCAT ...]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Concatenates its inputs together"
		],
		"parameters": [
			{
				"name": "...",
				"description": "arrays to join together, or other items to concatenate as strings",
				"optional": false
			}
		],
		"returns": [
			"the joined array or string"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "INDEXOF",
		"primaryName": "INDEXOF",
		"aliases": [],
		"signature": "[INDEXOF a b c? d?]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Finds the index of `b` in the array `a`"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array to search in",
				"optional": false
			},
			{
				"name": "b",
				"description": "the item to find",
				"optional": false
			},
			{
				"name": "c",
				"description": "the index to start searching at",
				"optional": true
			},
			{
				"name": "d",
				"description": "the index to finish searching at",
				"optional": true
			}
		],
		"returns": [
			"the index of `b` in `a` (after `c` and before `d`, if applicable)"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "JOIN",
		"primaryName": "JOIN",
		"aliases": [],
		"signature": "[JOIN a b]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Joins the elements of `a` as strings using `b` as a separator."
		],
		"parameters": [
			{
				"name": "a",
				"description": "the list to join together",
				"optional": false
			},
			{
				"name": "b",
				"description": "the separator to use",
				"optional": false
			}
		],
		"returns": [
			"a string containing the elements of `a` joined together with `b`"
		],
		"raises": [],
		"examples": [
			"[JOIN [ARRAY a b 1.5] ;] -> a;b;1.5"
		],
		"notes": []
	},
	{
		"name": "LENGTH",
		"primaryName": "LENGTH",
		"aliases": [],
		"signature": "[LENGTH a]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the length of `a` as either a string or array"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the string or array",
				"optional": false
			}
		],
		"returns": [
			"the number of characters in the string `a`, or the number of items in the array `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "LOWER",
		"primaryName": "LOWER",
		"aliases": [],
		"signature": "[LOWER s]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the string `s` in all lowercase"
		],
		"parameters": [
			{
				"name": "s",
				"description": "the input string",
				"optional": false
			}
		],
		"returns": [
			"`s` in lowercase"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "REPLACE",
		"primaryName": "REPLACE",
		"aliases": [],
		"signature": "[REPLACE s b c]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Replaces all instances of `b` in the string `s` with `c`"
		],
		"parameters": [
			{
				"name": "s",
				"description": "the string",
				"optional": false
			},
			{
				"name": "b",
				"description": "the substring to replace",
				"optional": false
			},
			{
				"name": "c",
				"description": "the string to replace every instance of `b` with",
				"optional": false
			}
		],
		"returns": [
			"the string `s` with replacements made"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SETINDEX",
		"primaryName": "SETINDEX",
		"aliases": [],
		"signature": "[SETINDEX a b c]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns a string or array with one item changed"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the string or array to be changed",
				"optional": false
			},
			{
				"name": "b",
				"description": "the index into `a` to change",
				"optional": false
			},
			{
				"name": "c",
				"description": "what the item at index `b` of `a` should be set to",
				"optional": false
			}
		],
		"returns": [
			"`a` with the item at index `b` set to `c`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "SPLIT",
		"primaryName": "SPLIT",
		"aliases": [],
		"signature": "[SPLIT s b]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Splits the string `s` by `b`"
		],
		"parameters": [
			{
				"name": "s",
				"description": "the string to be split",
				"optional": false
			},
			{
				"name": "b",
				"description": "the separator to split the string by",
				"optional": false
			}
		],
		"returns": [
			"an array containing the split parts of the string"
		],
		"raises": [],
		"examples": [
			"[SPLIT test,b,,123, ,] -> [ARRAY \"test\" \"b\" \"\" \"123\" \"\"]"
		],
		"notes": []
	},
	{
		"name": "STRIP",
		"primaryName": "STRIP",
		"aliases": [],
		"signature": "[STRIP s side? chars?]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Strips whitespace or other characters from the sides of a string.",
			"If chars is provided, characters will be stripped from the edge until a character not in the list is found"
		],
		"parameters": [
			{
				"name": "s",
				"description": "the input string",
				"optional": false
			},
			{
				"name": "side",
				"description": "the side(s) to strip. can be \"both\" (default), \"right\", or \"left\"",
				"optional": true
			},
			{
				"name": "chars",
				"description": "a string containing the characters to strip",
				"optional": true
			}
		],
		"returns": [
			"the stripped string"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "UNICODE",
		"primaryName": "UNICODE",
		"aliases": [],
		"signature": "[UNICODE c]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Finds the Unicode codepoint for a character"
		],
		"parameters": [
			{
				"name": "c",
				"description": "a single-character string",
				"optional": false
			}
		],
		"returns": [
			"the codepoint of `c` as an integer"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "UPPER",
		"primaryName": "UPPER",
		"aliases": [],
		"signature": "[UPPER s]",
		"category": "String",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns the string `s` in all uppercase"
		],
		"parameters": [
			{
				"name": "s",
				"description": "the input string",
				"optional": false
			}
		],
		"returns": [
			"`s` in all-caps"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "USER",
		"primaryName": "USER",
		"aliases": [],
		"signature": "[USER s v id?]",
		"category": "User Variables",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Works with user variables, variables that persist between tag runs and are unique to each user.",
			"The creator of a user variable becomes its owner, and from then on only the owner and their tags may modify it. However, anybody may access the value of the variable.",
			"**USER DEFINE**: Defines or sets a user variable `v` to `s`. Changes the runner's instance by default, but if another user has already created an instance, `id` can be used to change theirs.",
			"**USER VAR**: Gets the value of the user variable `s`. Gets the runner's instance by default, but `id` can be used to get a different user's instance.",
			"**USER LIST**: Gets a list of user IDs that have an instance of the user variable `s`."
		],
		"parameters": [
			{
				"name": "s",
				"description": "the user variable to be accessed",
				"optional": false
			},
			{
				"name": "v",
				"description": "(DEFINE) the value to set `s` to",
				"optional": false
			},
			{
				"name": "id",
				"description": "the user ID of a user that has defined an instance of the variable",
				"optional": true
			}
		],
		"returns": [
			"(DEFINE) nothing",
			"(VAR) the value of `s`",
			"(LIST) a list of user IDs that have `s` defined"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "//",
		"primaryName": "//",
		"aliases": [],
		"signature": "[// comment?]",
		"category": "Utility",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Makes a comment. Nothing inside the function will be run or executed"
		],
		"parameters": [
			{
				"name": "comment",
				"description": "the comment. Will not be executed",
				"optional": true
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "REPEAT",
		"primaryName": "REPEAT",
		"aliases": [],
		"signature": "[REPEAT a b]",
		"category": "Utility",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Repeats the contents of a string or array"
		],
		"parameters": [
			{
				"name": "a",
				"description": "the array or string to be repeated",
				"optional": false
			},
			{
				"name": "b",
				"description": "the amount of times to repeat `a`",
				"optional": false
			}
		],
		"returns": [
			"the characters of the string `a` or elements of the array `a`, repeated `b` times"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "TIME",
		"primaryName": "TIME",
		"aliases": [],
		"signature": "[TIME]",
		"category": "Utility",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Gets the time in Unix time"
		],
		"parameters": [],
		"returns": [
			"the time, in the UTC timezone, in seconds since 1970"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "TYPE",
		"primaryName": "TYPE",
		"aliases": [],
		"signature": "[TYPE a]",
		"category": "Utility",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Gets the data type of the input.",
			"Can be str, int, float, or list."
		],
		"parameters": [
			{
				"name": "a",
				"description": "the value to get the type of",
				"optional": false
			}
		],
		"returns": [
			"the type of `a`"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "VOID",
		"primaryName": "VOID",
		"aliases": [
			"#"
		],
		"signature": "[VOID function?]",
		"category": "Utility",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Returns nothing"
		],
		"parameters": [
			{
				"name": "function",
				"description": "the function to be run. Will be executed, but its output discarded",
				"optional": true
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "DEFINE",
		"primaryName": "DEFINE",
		"aliases": [],
		"signature": "[DEFINE name value]",
		"category": "Variables",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Defines or changes a variable."
		],
		"parameters": [
			{
				"name": "name",
				"description": "the name of the variable. Can only contain letters, numbers, and underscores, and cannot start with a number",
				"optional": false
			},
			{
				"name": "value",
				"description": "the value to be assigned to the variable",
				"optional": false
			}
		],
		"returns": [
			"nothing"
		],
		"raises": [],
		"examples": [],
		"notes": []
	},
	{
		"name": "VAR",
		"primaryName": "VAR",
		"aliases": [],
		"signature": "[VAR name]",
		"category": "Variables",
		"isAlias": false,
		"aliasOf": null,
		"summary": [
			"Get the value of a variable."
		],
		"parameters": [
			{
				"name": "name",
				"description": "the name of the variable",
				"optional": false
			}
		],
		"returns": [
			"the value of the variable"
		],
		"raises": [],
		"examples": [],
		"notes": []
	}
];
