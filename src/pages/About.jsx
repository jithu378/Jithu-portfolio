import { profile, skills, education, languages } from "../data";

export default function About() {
  return (
    <div className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-accent mb-4 font-medium">About</p>
        <h1 className="font-display text-4xl md:text-5xl text-text max-w-xl">
          A quick primer on how I got here.
        </h1>
        <p className="mt-8 text-text leading-relaxed text-base md:text-lg max-w-2xl">
          {profile.about}
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-xl text-text mb-5">Education</h2>
            <p className="text-text text-sm font-medium">{education.degree}</p>
            <p className="text-text-dim text-sm mt-1.5 leading-relaxed">{education.institution}</p>
            <p className="text-text-dim text-sm">{education.affiliation}</p>
            <p className="text-text-dim text-sm mt-1.5">{education.years}</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-text mb-5">Languages</h2>
            <ul className="space-y-1.5">
              {languages.map((l) => (
                <li key={l} className="text-text-dim text-sm">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl text-text mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <p className="text-xs text-text-dim mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-3 py-1.5 rounded-full border hairline text-text"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
