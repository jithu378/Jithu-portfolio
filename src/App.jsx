import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { certifications, profile, projects, skillGroups } from "./data";
import { GithubIcon, LinkedinIcon } from "./components/Icons";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.25 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);
    if (!finePointer) return;
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  useEffect(() => {
    if (!enabled) return;
    const onOver = (event) => {
      const interactive = event.target.closest("a, button, [data-cursor]");
      document.body.classList.toggle("cursor-hover", Boolean(interactive));
    };
    document.addEventListener("pointerover", onOver);
    return () => document.removeEventListener("pointerover", onOver);
  }, [enabled]);

  if (!enabled) return null;
  return <motion.div className="custom-cursor" style={{ x: sx, y: sy }} aria-hidden="true" />;
}

function ThemeToggle({ theme, setTheme }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ];
  return (
    <header className="site-header">
      <a href="#top" className="brand" data-cursor>
        JB<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} data-cursor>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-github" href={profile.github} target="_blank" rel="noreferrer" data-cursor>
          <GithubIcon size={16} /> <span>GitHub</span>
        </a>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal delay={0.08}>
            <h1>
              Curious enough to build.
              <em> Driven enough to keep learning.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-text">
              I’m Jithu Biju, an aspiring full-stack developer who enjoys turning ideas into practical web experiences.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark" data-cursor>
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href={`mailto:${profile.email}`} className="button button-ghost" data-cursor>
                Say hello <Mail size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="hero-meta">
              <span><MapPin size={14} /> {profile.location}</span>
              <span>Open to opportunities</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="hero-portrait-wrap">
          <div className="portrait-frame">
            <div className="portrait-label top-label">JITHU / DEVELOPER</div>
            <img src={profile.photo} alt="Jithu Biju" className="portrait" />
            <div className="portrait-label bottom-label">BUILD · LEARN · REPEAT</div>
            <div className="portrait-number">01</div>
          </div>
        </Reveal>
      </div>
      <a href="#about" className="scroll-cue" data-cursor><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell section-block">
      <div className="section-heading">
        <span className="section-index">01</span>
        <div><p className="section-kicker">About me</p><h2>Curious by nature.<br /><em>Builder by practice.</em></h2></div>
      </div>
      <div className="about-grid">
        <Reveal className="about-intro">
          <div className="about-copy">
            <p>
              I’m Jithu Biju, an aspiring full-stack developer based in Kottayam, Kerala. I enjoy turning ideas into practical web applications and learning through the process of building them.
            </p>
            <p>
              I believe the best way to learn is by doing — taking an idea, building it, discovering what breaks, understanding why it breaks, and then making it better. This hands-on approach has helped me strengthen my foundations in web development, JavaScript, Python, databases, and programming while continuing to grow as a developer.
            </p>
            <p>
              I’m currently expanding my skills toward full-stack development and exploring modern web technologies, with a focus on building useful projects rather than simply learning technologies in isolation.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="about-note">
          <div className="about-note-block">
            <p className="contact-label">Contact details</p>
            <div className="mini-details">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const skillNotes = {
    HTML: "Structure & semantic markup",
    CSS: "Responsive styling",
    JavaScript: "Web development & programming",
    Python: "Programming & application development",
    PHP: "Server-side web development",
    MySQL: "Relational database",
    SQL: "Querying & data logic",
    SQLite: "Lightweight database work",
    Bootstrap: "UI patterns & front-end speed",
    Django: "Backend framework",
    Git: "Version control",
    GitHub: "Code hosting & collaboration",
    React: "Currently learning",
    "MERN Stack": "Currently learning",
    C: "Foundational programming knowledge",
    "C++": "Foundational programming knowledge",
    Java: "Foundational programming knowledge",
  };

  const skillRank = {
    HTML: "primary",
    CSS: "primary",
    JavaScript: "primary",
    Python: "primary",
    PHP: "primary",
    MySQL: "primary",
    SQL: "primary",
    SQLite: "primary",
    Bootstrap: "primary",
    Django: "primary",
    Git: "primary",
    GitHub: "primary",
    React: "learning",
    "MERN Stack": "learning",
    C: "foundation",
    "C++": "foundation",
    Java: "foundation",
  };

  return (
    <section id="skills" className="section-shell section-block compact-block">
      <div className="section-heading">
        <span className="section-index">02</span>
        <div><p className="section-kicker">Skills</p><h2>Tools I use to<br /><em>make things work.</em></h2></div>
      </div>

      <div className="skills-toolkit-shell">
        <Reveal className="toolkit-summary">
          <span className="toolkit-kicker">Developer toolkit</span>
          <p>These are the technologies I use, explore, and build with.</p>
        </Reveal>

        <div className="skills-toolkit">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05} className="toolkit-panel">
              <div className="toolkit-header">
                <span>{group.label}</span>
                <span className="toolkit-count">{group.items.length}</span>
              </div>
              <div className="tool-list">
                {group.items.map((skill) => {
                  const rank = skillRank[skill] || "primary";
                  const status = skill === "React" || skill === "MERN Stack" ? "Learning" : "";

                  return (
                    <span
                      key={skill}
                      className={`tool-chip ${rank}`}
                      data-note={skillNotes[skill] || "Developer toolkit"}
                    >
                      <span className="tool-label">{skill}</span>
                      {status && <span className="tool-status">{status}</span>}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isReverse = index % 2 === 1;

  return (
    <Reveal delay={index * 0.08} className={`case-study ${project.accent} ${index === 0 ? "featured" : ""} ${isReverse ? "reverse" : ""}`}>
      <div className="case-study-media" aria-label={`${project.name} project preview`}>
        <div className="browser-mockup">
          <div className="browser-chrome">
            <span />
            <span />
            <span />
          </div>
          <img className="project-screenshot" src={project.image} alt={`${project.name} project screenshot`} />
        </div>
      </div>

      <div className="case-study-copy">
        <span className="case-study-number">{project.number}</span>
        <p className="case-study-kicker">Case study</p>
        <h3>{project.name}</h3>
        <p className="case-study-tagline">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-details">
          <div>
            <span className="details-label">Key features</span>
            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </div>

        <div className="project-bottom">
          <div className="stack-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a href={project.repo} target="_blank" rel="noreferrer" className="repo-link" data-cursor>
            View Code <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell section-block projects-showcase">
      <div className="section-heading">
        <span className="section-index">03</span>
        <div><p className="section-kicker">Selected work</p><h2>Things I’ve built.<br /><em>From ideas to working projects.</em></h2></div>
      </div>
      <div className="case-study-list">{projects.map((p, i) => <ProjectCard key={p.number} project={p} index={i} />)}</div>
      <Reveal className="projects-footer"><span>Two projects, built while learning by doing.</span><a href={profile.github} target="_blank" rel="noreferrer" data-cursor>See GitHub <ArrowUpRight size={16} /></a></Reveal>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section-shell section-block compact-block">
      <div className="section-heading">
        <span className="section-index">04</span>
        <div><p className="section-kicker">Certifications</p><h2>Proof of <em>learning.</em></h2></div>
      </div>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.08} className="cert-card">
            <div className="cert-card-top">
              <span className="cert-number">{cert.number}</span>
              <span className="cert-kicker">Certification</span>
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p className="cert-type">{cert.type}</p>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
            <a href={cert.certificate} target="_blank" rel="noreferrer" className="cert-link" data-cursor aria-label={`View ${cert.title} certificate`}>
              View Certificate <ArrowUpRight size={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <div className="contact-inner">
          <div className="contact-main">
            <Reveal><p className="section-kicker">05 · Contact</p></Reveal>
            <Reveal delay={0.08}><h2>Let's build<br /><em>something useful.</em></h2></Reveal>
            <Reveal delay={0.16}><p className="contact-copy">Have an idea, a project, or just want to say hello? I’d be happy to hear from you.</p></Reveal>
            <Reveal delay={0.24}>
              <a href={`mailto:${profile.email}`} className="contact-email" data-cursor>
                <span>Say hello <ArrowUpRight size={19} /></span>
                <strong>{profile.email}</strong>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.32} className="contact-rail">
            <div className="contact-location"><MapPin size={16} /><span>{profile.location}, India</span></div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer" data-cursor aria-label="Visit Jithu Biju on GitHub"><GithubIcon size={17} /> GitHub <ArrowUpRight size={14} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor aria-label="Visit Jithu Biju on LinkedIn"><LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer section-shell"><span>© {new Date().getFullYear()} Jithu Biju</span><span>Aspiring Full-Stack Developer</span><span>GitHub · LinkedIn</span></footer>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("jithu-theme") || "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("jithu-theme", theme);
  }, [theme]);

  return (
    <div className="site">
      <CustomCursor />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
