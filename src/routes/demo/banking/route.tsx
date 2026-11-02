import type { MetaFunction } from "react-router";
import { SITE_URL } from "@/lib/site";
import { BankingDemoPage } from "@/pages/demos/BankingDemo";

const PAGE_PATH = "/demo/banking";

export const meta: MetaFunction = () => {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  return [
    { title: "Banking Knowledge & Data Copilot — CinderTide Studio" },
    {
      name: "description",
      content:
        "Business-facing AI copilot demo combining RAG, SQL analytics, and explicit agent routing for banking workflows.",
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
        "Demo page: RAG + SQL analytics + safety guardrails for customer service and operations.",
    },
    { tagName: "link", rel: "canonical", href: pageUrl },
  ];
};

export default function BankingDemoRoute() {
  return <BankingDemoPage />;
}
