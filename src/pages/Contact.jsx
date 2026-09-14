import { profile } from "../data";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: "github.com/jithu378", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/jithu-biju-", href: profile.linkedin, icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <div className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-accent mb-4 font-medium">Contact</p>
        <h1 className="font-display text-4xl md:text-5xl text-text">
          Let's talk about a role.
        </h1>
        <p className="mt-6 text-text-dim leading-relaxed max-w-md">
          I'm looking for an entry-level developer position — reach out directly, whichever
          channel is easiest for you.
        </p>

        <div className="mt-14 divide-y hairline border-t hairline">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between py-6"
            >
              <div className="flex items-center gap-4">
                <Icon size={18} strokeWidth={1.5} className="text-text-dim group-hover:text-accent transition-colors" />
                <div>
                  <p className="text-xs text-text-dim">{label}</p>
                  <p className="text-text text-base group-hover:text-accent transition-colors">{value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
