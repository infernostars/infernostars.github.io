// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "whirling's blag",
  description: "",
  lang: "en-US",
  profile: {
    author: "whirlingstars",
    description: "i do the coding on occasion."
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/whirlingstars",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:infernity@infernity.dev",
  },
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
/*  {
    title: "Home",
    path: "/",
  },*/
  {
    title: "about",
    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
/*  {
    title: "Projects",
    path: '/projects'
  },*/
  {
    title: "archive",
    path: '/archive'
  }
];
