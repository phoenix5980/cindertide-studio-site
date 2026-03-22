import type { MetaFunction } from "react-router";
import { BankingDemoPage } from "@/pages/demos/BankingDemo";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";
const PAGE_PATH = "/projects/banking-copilot";

export const meta: MetaFunction = () => {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  return [
    { title: "Banking Knowledge & Data Copilot — CinderTide Studio" },
    {
      name: "description",
      content:
        "Business-facing AI copilot case study combining RAG, SQL analytics, and explicit agent routing for banking workflows.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: "Banking Knowledge & Data Copilot" },
    {
      property: "og:description",
      content:
        "An AI system for banking knowledge retrieval, analytics workflows, and safety-aware agent routing.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Banking Knowledge & Data Copilot" },
    {
      name: "twitter:description",
      content:
        "Case study: RAG + SQL analytics + safety guardrails for customer service and operations.",
    },
    { tagName: "link", rel: "canonical", href: pageUrl },
  ];
};

export default function BankingCopilotRoute() {
  return <BankingDemoPage />;
}
