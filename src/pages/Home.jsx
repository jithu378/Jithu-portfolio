import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, projects, skills } from "../data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 right-[-10%] w-[420px] h-[420px] rounded-full blur-[110px] opacity-25 pointer-events-none animate-[drift_16s_ease-in-out_infinite]"
          style={{ background: "var(--color-accent)" }}
        />
        <style>{`
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-40px, 30px); }
          }
        `}</style>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto relative grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center"
        >
          <div>
            <motion.p variants={item} className="text-sm text-accent mb-5 font-medium">
              {profile.location} &middot; Open to entry-level roles
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-[13vw] leading-[0.95] md:text-6xl md:leading-[1.02] font-medium tracking-tight text-text"
            >
              Curious enough to build.
              <br />
              Driven enough to keep
              <br />
              learning.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-7 text-text-dim text-base md:text-lg max-w-md leading-relaxed"
            >
              I’m Jithu Biju, an aspiring full-stack developer who enjoys turning ideas into practical web experiences.
            </motion.p>
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-text text-bg px-5 py-3 text-sm font-medium rounded-full hover:bg-accent transition-colors"
              >
                See my work
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border hairline px-5 py-3 text-sm font-medium rounded-full text-text hover:border-accent hover:text-accent transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="justify-self-center md:justify-self-end">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <div
                className="absolute inset-0 rounded-full opacity-40 blur-2xl"
                style={{ background: "var(--color-accent)" }}
                aria-hidden
              />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative w-full h-full rounded-full object-cover border hairline"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills strip */}
      <section className="px-6 md:px-10 py-10 border-t hairline">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-8 gap-y-3">
          {Object.values(skills)
            .flat()
            .map((s) => (
              <span key={s} className="text-sm text-text-dim">
                {s}
              </span>
            ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-text">Selected work</h2>
            <Link
              to="/work"
              className="text-sm text-text-dim hover:text-accent transition-colors hidden md:flex items-center gap-1"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="group bg-bg p-8 md:p-10 flex flex-col justify-between min-h-[260px] hover:bg-surface transition-colors"
              >
                <div>
                  <p className="text-xs text-text-dim mb-3">
                    {p.year} &middot; {p.role}
                  </p>
                  <h3 className="font-display text-2xl text-text mb-3 group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed max-w-sm">{p.summary}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full border hairline text-text-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
