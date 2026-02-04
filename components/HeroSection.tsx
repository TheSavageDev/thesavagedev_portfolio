export const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/10 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="glass-panel inline-block rounded-2xl border-white/20 bg-white/[0.07] px-6 py-5">
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Building with faith and code
          </h1>
          <p className="mt-4 text-lg text-gray-400 md:text-xl">
            Software engineer · Kansas · Savage Webmancer
          </p>
        </div>
      </div>
    </section>
  );
};
