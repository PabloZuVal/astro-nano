import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://pablozuval.github.io/",
  base: "/",
  // trailingSlash:"always",
  integrations: [mdx(), sitemap(), tailwind()],
});
