import { experience } from "../data/experience";

export const ExperienceSection = () => {
  return (
    <section
      className="relative border-b border-white/10"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-heading" className="section-title mt-3">
            Platforms, teams, and release
          </h2>
          <p className="section-lede">
            Staff engineering work across mobile, web, and cloud.
          </p>
        </header>

        <div className="border-b border-white/10">
          {experience.map((role) => (
            <article
              key={role.org}
              className="border-t border-white/10 py-8 md:py-10"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {role.org}
                </h3>
                <p className="shrink-0 text-sm font-semibold text-yellow">
                  {role.dates}
                </p>
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">
                {role.title}
              </p>
              <ul className="mt-4 max-w-3xl space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="text-base leading-relaxed text-gray-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-500">
          B.S. information technology, University of Kansas. CH-47 flight
          engineer, United States Army Reserve.
        </p>
      </div>
    </section>
  );
};
