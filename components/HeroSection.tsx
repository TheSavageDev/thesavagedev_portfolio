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
          <p className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            TheSavageDev
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-gray-100 md:text-3xl lg:text-4xl"
          >
            Building with faith and code
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
            Software engineer in Kansas crafting thoughtful digital work with
            dignity, integrity, and care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="cta-primary">
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
