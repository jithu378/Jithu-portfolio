import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const idx = projects.findIndex((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={15} /> All work
        </Link>

        <p className="text-sm text-accent font-medium mb-4">
          {project.year} &middot; {project.role}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-text">{project.name}</h1>
        <p className="text-text-dim mt-3 text-lg">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full border hairline text-text-dim">
              {s}
            </span>
          ))}
        </div>

        <p className="mt-10 text-text leading-relaxed text-base md:text-lg max-w-2xl">
          {project.description}
        </p>

        <div className="mt-12">
          <h2 className="font-display text-xl text-text mb-5">What it does</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-text-dim text-sm md:text-base">
                <span className="text-accent mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-text text-bg px-5 py-3 text-sm font-medium rounded-full hover:bg-accent transition-colors"
          >
            <GithubIcon size={16} /> View source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border hairline px-5 py-3 text-sm font-medium rounded-full text-text hover:border-accent hover:text-accent transition-colors"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        <div className="mt-24 pt-8 border-t hairline flex items-center justify-between">
          <span className="text-sm text-text-dim">Next project</span>
          <Link
            to={`/work/${next.slug}`}
            className="group flex items-center gap-2 font-display text-lg text-text hover:text-accent transition-colors"
          >
            {next.name}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
