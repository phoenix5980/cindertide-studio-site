import { motion } from "framer-motion";
import React, { useRef } from "react";

type IconProps = { className?: string };

function SparkIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 3l1.8 3.6L19 8.4l-3.7 1.8L13.5 14l-1.8-3.8L8 8.4l3.7-1.8L13.5 3zM6 13.5l.9 1.8L8.7 16l-1.8.8L6 18.6l-.9-1.8-1.8-.8 1.8-.7L6 13.5zM18 14.2l1.1 2.1 2.1 1-2.1 1-1.1 2.2-1-2.2-2.1-1 2.1-1 1-2.1z"
      />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v18h18M7 15l3-3 3 2 4-5"
      />
    </svg>
  );
}

function FlaskIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 3h3M9 3h6M10.5 3v5.2L5.4 16.4A3 3 0 008 21h8a3 3 0 002.6-4.6l-5.1-8.2V3"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8" />
    </svg>
  );
}

const PROJECTS = [
  {
    title: "TRISMEGISTUS",
    description:
      "AI-assisted combat and farming workflow concepts inspired by game decision systems.",
    tags: ["AI Agents", "Gameplay Systems", "Tooling"],
    Icon: SparkIcon,
    gradient: "from-orange-500 to-red-500",
    spotlightColor: "249, 115, 22",
  },
  {
    title: "FGO TA",
    description:
      "A turn-attack aggregation and analysis concept for surfacing strategy, composition, and run metadata.",
    tags: ["Community Data", "Analytics", "Frontend"],
    Icon: ChartIcon,
    gradient: "from-cyan-500 to-blue-500",
    spotlightColor: "6, 182, 212",
  },
  {
    title: "Cinder Experiments",
    description:
      "A lab space for prototyping dark UI systems, atmospheric landing pages, and game-adjacent product ideas.",
    tags: ["Motion Design", "Prototyping", "Web Systems"],
    Icon: FlaskIcon,
    gradient: "from-violet-500 to-indigo-500",
    spotlightColor: "139, 92, 246",
  },
] as const;

function ProjectCard({
  title,
  description,
  tags,
  Icon,
  gradient,
  spotlightColor,
}: (typeof PROJECTS)[number]) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="feature-card relative h-full rounded-2xl"
      style={
        {
          "--spotlight-color": spotlightColor,
          "--spotlight-x": "0px",
          "--spotlight-y": "0px",
          "--spotlight-opacity": "0",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(${spotlightColor}, 0.26), rgba(${spotlightColor}, 0.1))`,
        }}
      />

      <div
        className="spotlight-layer absolute inset-0 rounded-2xl pointer-events-none"
        style={
          {
            opacity: "var(--spotlight-opacity)",
            background: `radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(var(--spotlight-color), 1) 0%, rgba(var(--spotlight-color), 0.9) 15%, rgba(var(--spotlight-color), 0.6) 30%, transparent 50%)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
          } as React.CSSProperties
        }
      />

      <div className="absolute inset-[2px] rounded-[14px] bg-zinc-950/85 backdrop-blur-sm" />
      <div
        className="spotlight-layer absolute inset-[2px] rounded-[14px] pointer-events-none"
        style={
          {
            opacity: "var(--spotlight-opacity)",
            background: `radial-gradient(420px circle at calc(var(--spotlight-x) - 2px) calc(var(--spotlight-y) - 2px), rgba(var(--spotlight-color), 0.22), transparent 50%)`,
          } as React.CSSProperties
        }
      />

      <div className="relative z-20 p-6 flex flex-col h-full">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-100">{title}</h3>
        <p className="mt-2 text-zinc-400 leading-relaxed text-sm">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-zinc-700 bg-zinc-900/80 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSpotlight = (clientX: number, clientY: number) => {
      for (const card of Array.from(
        container.querySelectorAll<HTMLElement>(".feature-card"),
      )) {
        const rect = card.getBoundingClientRect();
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        const dx = relativeX - rect.width / 2;
        const dy = relativeY - rect.height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 350;

        if (distance < maxDistance) {
          const opacity = Math.max(0.3, 1 - distance / maxDistance);
          card.style.setProperty("--spotlight-x", `${relativeX}px`);
          card.style.setProperty("--spotlight-y", `${relativeY}px`);
          card.style.setProperty("--spotlight-opacity", opacity.toString());
        } else {
          card.style.setProperty("--spotlight-opacity", "0");
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) =>
      updateSpotlight(event.clientX, event.clientY);
    const handleMouseLeave = () => {
      for (const card of Array.from(
        container.querySelectorAll<HTMLElement>(".feature-card"),
      )) {
        card.style.setProperty("--spotlight-opacity", "0");
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">
            Selected Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto">
            A small set of experiments and products exploring game systems,
            interface design, AI workflows, and player-facing tools.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
