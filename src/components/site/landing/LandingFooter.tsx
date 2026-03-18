import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/";

export function LandingFooter() {
  return (
    <footer className="relative py-12 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white text-sm font-black shadow-sm">
              C
            </span>
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
              CinderTide Studio
            </span>
          </motion.div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
