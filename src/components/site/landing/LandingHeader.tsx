import { motion } from "framer-motion";
import { copy } from "../../../content/copy";
import { useIsMobileOrIOS } from "../../../hooks/useIsMobileOrIOS";

type Lang = "en" | "zh";
type LandingHeaderProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const GITHUB_URL = "https://github.com/phoenix5980";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LandingHeader({ lang, setLang }: LandingHeaderProps) {
  const isMobileOrIOS = useIsMobileOrIOS();
  const t = copy[lang];
  const navItems = [
    { label: t.navCapabilities, id: "about" },
    { label: t.navProjects, id: "projects" },
    { label: lang === "zh" ? "演示" : "Demos", id: "demos" },
    { label: t.navApproach, id: "vision" },
  ] as const;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 ${
        isMobileOrIOS ? "bg-zinc-950/88" : "backdrop-blur-xl bg-zinc-950/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-black shadow-sm">
              C
            </span>
            <span className="bg-gradient-to-r from-blue-200 via-slate-200 to-sky-300 bg-clip-text text-transparent">
              CinderTide Studio
            </span>
          </motion.button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
          </nav>

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
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Visit GitHub"
            >
              <GitHubIcon />
            </a>
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="hidden sm:flex items-center px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm transition-all"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
