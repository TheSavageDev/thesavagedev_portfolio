const SERVICES = [
  { title: "Research", description: "Discovery and requirements" },
  { title: "Develop", description: "Web, mobile, and backend" },
  {
    title: "WordPress, Shopify, Gatsby",
    description: "Content and commerce sites",
  },
] as const;

const formatNumber = (n: number) => String(n).padStart(2, "0");

export const ServicesSection = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-12 md:py-16"
      aria-labelledby="services-heading"
    >
      <header className="mb-10">
        <h2
          id="services-heading"
          className="text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl"
        >
          Services
        </h2>
        <hr className="mt-2 w-20 border-yellow" />
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <article
            key={service.title}
            className="glass-panel rounded-2xl border-white/20 bg-gray-800/25 p-6 shadow-glass-highlight transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow/40 hover:shadow-glass-highlight-hover focus-within:border-yellow/40 motion-reduce:transition-none"
          >
            <span
              className="text-sm font-medium tracking-wider text-yellow/80"
              aria-hidden
            >
              {formatNumber(index + 1)}
            </span>
            <h3 className="mt-2 text-lg font-medium text-yellow">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
