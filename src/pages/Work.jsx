import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

export default function Work() {
  return (
    <div className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-accent mb-4 font-medium">Work</p>
        <h1 className="font-display text-4xl md:text-5xl text-text max-w-xl">
          Two projects, one habit: own the whole stack.
        </h1>
        <p className="mt-5 text-text-dim max-w-lg leading-relaxed">
          Both built as part of my BCA coursework — one leading a team, one entirely on my own.
        </p>

        <div className="mt-16 divide-y hairline border-t hairline">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-8 md:py-10"
            >
              <span className="font-display text-sm text-text-dim w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl text-text group-hover:text-accent transition-colors">
                  {p.name}
                </h2>
                <p className="text-sm text-text-dim mt-1">{p.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:w-64">
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
                size={20}
                className="text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
