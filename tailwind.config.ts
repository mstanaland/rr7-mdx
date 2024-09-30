import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
