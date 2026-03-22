import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home/route.tsx"),
  route("demo/banking", "routes/demo/banking/route.tsx"),
  route("demo/healthcare", "routes/demo/healthcare/route.tsx"),
  route("demo/fgo", "routes/demo/fgo/route.tsx"),
  route("demo/agent", "routes/demo/agent/route.tsx"),
  route("projects/banking-copilot", "routes/projects/banking-copilot/route.tsx"),
  route("*", "routes/catchall/route.tsx"),
] satisfies RouteConfig;
