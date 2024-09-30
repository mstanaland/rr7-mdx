import type { RouteConfig } from "@react-router/dev/routes";
import { index, route, layout } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  layout("routes/layout.tsx", [
    index("routes/introduction.tsx"),
    layout("routes/mdx-layout.tsx", [
      route("mdx-sample", "mdx/mdx-sample.mdx"),
      route("button", "mdx/button.mdx"),
    ]),
    route("bar", "routes/thing.tsx"),
  ]),
];
