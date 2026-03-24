import { useEffect, useState } from "react";
import { DemosEntry } from "./DemosEntry";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { LandingCTA } from "./LandingCTA";
import { LandingFooter } from "./LandingFooter";
import { LandingHeader } from "./LandingHeader";
import { WhyVibeCodingFails } from "./WhyVibeCodingFails";
import { useIsSafari } from "@/hooks/useIsSafari";

type Lang = "en" | "zh";
const LANG_STORAGE_KEY = "portfolio-lang";

export default function LandingPage() {
  const isSafari = useIsSafari();
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    return savedLang === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.classList.toggle("is-safari", isSafari);

    return () => {
      document.documentElement.classList.remove("is-safari");
    };
  }, [isSafari]);

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100 transition-colors">
      <LandingHeader lang={lang} setLang={setLang} />
      <main className="relative">
        <Hero lang={lang} />
        <Features lang={lang} />
        <DemosEntry lang={lang} />
        <WhyVibeCodingFails lang={lang} />
        <LandingCTA lang={lang} />
      </main>
      <LandingFooter lang={lang} />
    </div>
  );
}
