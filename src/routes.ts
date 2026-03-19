import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home/route.tsx"),
  route("projects/banking-copilot", "routes/projects/banking-copilot/route.tsx"),
  route("*", "routes/catchall/route.tsx"),
] satisfies RouteConfig;
