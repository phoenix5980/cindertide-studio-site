import type { MetaFunction } from "react-router";
import { ComingSoonDemoPage } from "@/pages/demos/ComingSoonDemo";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";
const PAGE_PATH = "/demo/fgo";

export const meta: MetaFunction = () => {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  return [
    { title: "FGO Demo — CinderTide Studio" },
    {
      name: "description",
      content:
        "Reserved route for the upcoming FGO vertical demo in the CinderTide Studio portfolio.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: "FGO Demo" },
    {
      property: "og:description",
      content:
        "A placeholder route in the modular demo architecture, ready for future FGO content.",
    },
    { tagName: "link", rel: "canonical", href: pageUrl },
  ];
};

export default function FgoDemoRoute() {
  return (
    <ComingSoonDemoPage
      badge={{ en: "FGO Demo", zh: "FGO 演示" }}
      title={{ en: "FGO Vertical Showcase", zh: "FGO 垂直场景展示" }}
      subtitle={{
        en: "Route prepared for the next portfolio extension",
        zh: "该路由已为下一阶段作品集扩展预留",
      }}
      description={{
        en: "This demo slot is intentionally reserved so new vertical content can be added without changing navigation, structure, or styling conventions.",
        zh: "该演示位已预留，可在不改动导航、结构与风格规范的前提下快速补充新垂直场景内容。",
      }}
      focusAreas={{
        en: [
          "Domain-specific workflow orchestration",
          "Data model narrative and KPI storytelling",
          "Operational safeguards and audit transparency",
          "Consistent design language with existing demos",
        ],
        zh: [
          "领域工作流编排能力展示",
          "数据模型叙事与 KPI 表达",
          "运营护栏与审计透明能力",
          "与现有 Demo 保持一致的设计语言",
        ],
      }}
    />
  );
}
