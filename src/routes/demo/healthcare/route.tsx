import type { MetaFunction } from "react-router";
import { HealthcareDemoPage } from "@/pages/demos/HealthcareDemo";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";
const PAGE_PATH = "/demo/healthcare";

export const meta: MetaFunction = () => {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;

  return [
    { title: "Healthcare Data Demo — CinderTide Studio" },
    {
      name: "description",
      content:
        "Enterprise healthcare data product demo featuring population health monitoring, AI risk stratification, and governance controls.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: "Healthcare Data Demo" },
    {
      property: "og:description",
      content:
        "A healthcare intelligence dashboard demo with operational metrics, AI insights, and compliance-ready workflows.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Healthcare Data Demo" },
    {
      name: "twitter:description",
      content:
        "Simulated healthcare analytics showcase for stakeholder presentations and enterprise demos.",
    },
    { tagName: "link", rel: "canonical", href: pageUrl },
  ];
};

export default function HealthcareDemoRoute() {
  return <HealthcareDemoPage />;
}
