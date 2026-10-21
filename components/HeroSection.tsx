export const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/images/crucifix.jpg"
          alt=""
          className="h-full w-full scale-105 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-transparent to-gray-900/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="hero-animate max-w-3xl">
          <p className="max-w-full font-display text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            TheSavageDev
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Staff engineer and team lead
          </p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-gray-100 md:text-3xl lg:text-4xl"
          >
            Building with faith and code
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
            I lead a team of four to five engineers on Gavel, a real-time
            auction platform, from Overland Park. The work runs from the Expo
            app through the API, the admin, and the cloud it ships on.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#experience" className="cta-primary">
              Experience
            </a>
            <a href="#work" className="cta-secondary">
              Selected work
            </a>
            <a href="#contact" className="cta-secondary">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
