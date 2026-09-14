import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 md:h-20">
        <NavLink
          to="/"
          className="font-display text-lg tracking-tight text-text hover:text-accent transition-colors"
        >
          Jithu Biju
        </NavLink>
        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-text" : "text-text-dim hover:text-text"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t hairline px-6 md:px-10 py-10 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-text-dim">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built for the next role.</p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail size={15} strokeWidth={1.5} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain" />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pt-16 md:pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
