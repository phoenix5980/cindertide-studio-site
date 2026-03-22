import { useEffect, useState } from "react";
import { Link } from "react-router";
import { DemoHero } from "@/components/demos/DemoHero";
import { LandingFooter } from "@/components/site/landing/LandingFooter";
import { useIsMobileOrIOS } from "@/hooks/useIsMobileOrIOS";

type Lang = "en" | "zh";

type LocalizedText = {
  en: string;
  zh: string;
};

type LocalizedStringList = {
  en: string[];
  zh: string[];
};

const GITHUB_URL = "https://github.com/phoenix5980";
const LANG_STORAGE_KEY = "portfolio-lang";

type ComingSoonDemoProps = {
  badge: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  focusAreas: LocalizedStringList;
};

export function ComingSoonDemoPage({
  badge,
  title,
  subtitle,
  description,
  focusAreas,
}: ComingSoonDemoProps) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    return savedLang === "zh" ? "zh" : "en";
  });

  const isMobileOrIOS = useIsMobileOrIOS();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  }, [lang]);

  const text = {
    backHome: lang === "zh" ? "返回首页" : "Back to Home",
    github: "GitHub",
    tags:
      lang === "zh"
        ? ["Demo 架构", "作品集扩展", "即将上线"]
        : ["Demo Pipeline", "Portfolio Extension", "Coming Soon"],
    openHealthcare: lang === "zh" ? "查看医疗 Demo" : "Open Healthcare Demo",
    openBanking: lang === "zh" ? "查看银行 Demo" : "Open Banking Demo",
    plannedTitle: lang === "zh" ? "规划模块" : "Planned Modules",
    plannedDescription:
      lang === "zh"
        ? "该路由已在 Demo 体系中预留，可在不改动导航与结构的前提下继续扩展新项目内容。"
        : "This route is live and reserved in the demo system so additional project pages can be added without changing the routing model.",
  };

  const localizedFocusAreas = focusAreas[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 ${
          isMobileOrIOS ? "bg-zinc-950/88" : "backdrop-blur-xl bg-zinc-950/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-black text-white shadow-sm">
                C
              </span>
              <Link
                to="/"
                className="text-sm font-semibold text-zinc-200 transition-colors hover:text-zinc-100"
              >
                {text.backHome}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-md border border-zinc-700/80 bg-zinc-900/70 p-0.5">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`w-10 rounded px-0 py-1 text-xs font-semibold transition-colors ${
                    lang === "en"
                      ? "bg-blue-500/30 text-blue-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("zh")}
                  className={`w-10 rounded px-0 py-1 text-xs font-semibold transition-colors ${
                    lang === "zh"
                      ? "bg-blue-500/30 text-blue-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  中文
                </button>
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {text.github}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <DemoHero
          badge={badge[lang]}
          title={title[lang]}
          subtitle={subtitle[lang]}
          description={description[lang]}
          tags={text.tags}
          actions={[
            { label: text.openHealthcare, to: "/demo/healthcare" },
            { label: text.openBanking, to: "/demo/banking", variant: "secondary" },
          ]}
        />

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{text.plannedTitle}</h2>
              <p className="mt-3 max-w-3xl text-zinc-300 leading-relaxed">{text.plannedDescription}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {localizedFocusAreas.map((item) => (
                  <div key={item} className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                    <p className="text-sm text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter lang={lang} />
    </div>
  );
}
