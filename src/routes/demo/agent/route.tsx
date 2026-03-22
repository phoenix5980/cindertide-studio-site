import type { MetaFunction } from "react-router";
import { ComingSoonDemoPage } from "@/pages/demos/ComingSoonDemo";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";
const PAGE_PATH = "/demo/agent";

export const meta: MetaFunction = () => {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  return [
    { title: "Agent Demo — CinderTide Studio" },
    {
      name: "description",
      content:
        "Reserved route for the upcoming agent workflow demo in the CinderTide Studio portfolio.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: "Agent Demo" },
    {
      property: "og:description",
      content:
        "A placeholder route in the modular demo architecture, ready for future agent workflow content.",
    },
    { tagName: "link", rel: "canonical", href: pageUrl },
  ];
};

export default function AgentDemoRoute() {
  return (
    <ComingSoonDemoPage
      badge={{ en: "Agent Demo", zh: "Agent 演示" }}
      title={{ en: "Agent Workflow Showcase", zh: "Agent 工作流展示" }}
      subtitle={{
        en: "Route prepared for advanced orchestration demos",
        zh: "该路由已为高级编排演示预留",
      }}
      description={{
        en: "This route is now part of the shared demo system, making it easy to add multi-agent product narratives in the same presentation-ready style.",
        zh: "该路由已接入统一 Demo 体系，可按同一展示风格扩展多 Agent 协同产品叙事。",
      }}
      focusAreas={{
        en: [
          "Intent routing and tool orchestration visibility",
          "Operational guardrails and fallback strategy",
          "Human-in-the-loop approval checkpoints",
          "Performance and traceability panels for enterprise review",
        ],
        zh: [
          "意图路由与工具编排可视化",
          "运营护栏与回退策略设计",
          "人机协同审批节点",
          "面向企业评审的性能与追踪面板",
        ],
      }}
    />
  );
}
