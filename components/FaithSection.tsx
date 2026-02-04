const UNSPLASH_PHOTOGRAPHER =
  "https://unsplash.com/@frensisalberti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
const UNSPLASH_PHOTO =
  "https://unsplash.com/photos/woman-in-white-dress-dancing-YqObNh1A4-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

const FAITH_COPY =
  "My Catholic faith grounds my work in dignity, integrity, and service. As a software engineer, I aim to build with excellence and humility—creating technology that helps people and reflects the good.";

export const FaithSection = () => {
  return (
    <section
      className="glass-panel relative w-full overflow-hidden rounded-[2rem] border-white/20 bg-primary/20 text-white shadow-glass-highlight md:rounded-[3rem]"
      aria-labelledby="faith-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-96 rounded-full bg-yellow/10 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:flex md:items-center md:gap-12 md:py-16">
        <div className="mb-8 shrink-0 md:mb-0 md:w-80">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/20 shadow-glass-highlight">
            <img
              src="/images/crucifix.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/70 via-transparent to-transparent"
              aria-hidden
            />
          </div>
          <p className="mt-2 text-xs text-gray-300">
            Photo by{" "}
            <a
              href={UNSPLASH_PHOTOGRAPHER}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline transition-colors duration-200 hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Francesco Alberti
            </a>{" "}
            on{" "}
            <a
              href={UNSPLASH_PHOTO}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline transition-colors duration-200 hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Unsplash
            </a>
          </p>
        </div>
        <div>
          <h2
            id="faith-heading"
            className="mb-4 text-3xl font-semibold tracking-tight text-yellow md:text-4xl"
          >
            Faith & work
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-gray-100">
            {FAITH_COPY}
          </p>
        </div>
      </div>
    </section>
  );
};
