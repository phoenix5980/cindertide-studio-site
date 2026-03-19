import type { MetaFunction } from "react-router";
import LandingPage from "@/components/site/landing/LandingPage";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";

export const meta: MetaFunction = () => {
  return [
    { title: "CinderTide Studio — AI Applications Portfolio" },
    {
      name: "description",
      content:
        "Designing practical AI systems for knowledge retrieval, analytics, and business workflows.",
    },
    {
      name: "keywords",
      content:
        "CinderTide Studio, AI applications, enterprise AI, banking AI copilot, RAG, SQL analytics, product engineering",
    },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:site_name", content: "CinderTide Studio" },
    { property: "og:title", content: "CinderTide Studio — AI Applications Portfolio" },
    {
      property: "og:description",
      content:
        "Designing practical AI systems for knowledge retrieval, analytics, and business workflows.",
    },
    { property: "og:locale", content: "en_US" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CinderTide Studio — AI Applications Portfolio" },
    {
      name: "twitter:description",
      content:
        "Professional AI applications portfolio focused on copilot systems, analytics interfaces, and enterprise engineering.",
    },
    // Canonical
    { tagName: "link", rel: "canonical", href: SITE_URL },
  ];
};

export default function HomeRoute() {
  return <LandingPage />;
}
