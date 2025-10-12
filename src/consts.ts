import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Pablo Zúñiga Valenzuela",
  EMAIL: "pablozunigavalenzuela@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Pablo Zúñiga - Software Engineer specializing in AI-powered solutions and full-stack development. Building impactful applications with React, NestJS, Python, and AI technologies.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work Experience",
  DESCRIPTION: "4+ years building AI agents, full-stack platforms, and enterprise solutions. Experience with React, NestJS, Python, and modern web technologies.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Featured projects including AI-powered healthcare applications, Android apps with Clean Architecture, and full-stack platform implementations.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  {
    NAME: "Github",
    HREF: "https://github.com/PabloZuVal"
  },
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/pablozunigavalenzuela/",
  }
];
