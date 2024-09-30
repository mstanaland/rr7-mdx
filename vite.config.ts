import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? "/rr7/" : undefined,
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        [rehypePrettyCode, { theme: "one-light", keepBackground: false }],
      ],
    }),
    reactRouter({
      // basename: "/rr7",
      async prerender({ getStaticPaths }) {
        // return a list of URLs to prerender at build time
        console.log("XXXX", getStaticPaths());
        return getStaticPaths();
      },
      buildDirectory: "dist",
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
