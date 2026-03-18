import type { MetaFunction } from "react-router";
import LandingPage from "@/components/site/landing/LandingPage";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://cindertide.studio";

export const meta: MetaFunction = () => {
  return [
    { title: "CinderTide Studio — AI-native Game Studio" },
    {
      name: "description",
      content:
        "CinderTide Studio builds intelligent game-facing products, tools, and interactive systems.",
    },
    {
      name: "keywords",
      content:
        "CinderTide Studio, AI-native game studio, game tools, interactive systems, design engineering, experimental interfaces",
    },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:site_name", content: "CinderTide Studio" },
    { property: "og:title", content: "CinderTide Studio — AI-native Game Studio" },
    {
      property: "og:description",
      content:
        "CinderTide Studio builds intelligent game-facing products, tools, and interactive systems.",
    },
    { property: "og:locale", content: "en_US" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CinderTide Studio — AI-native Game Studio" },
    {
      name: "twitter:description",
      content:
        "We design and engineer polished digital experiences across game tooling, AI-native interfaces, and experimental products.",
    },
    // Canonical
    { tagName: "link", rel: "canonical", href: SITE_URL },
  ];
};

export default function HomeRoute() {
  return <LandingPage />;
}
