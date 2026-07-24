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
      className="relative border-y border-white/10"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="section-kicker">Capabilities</p>
          <h2 id="services-heading" className="section-title mt-3">
            Services
          </h2>
          <p className="section-lede">
            From discovery to delivery across web, mobile, and content platforms.
          </p>
        </header>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
          {SERVICES.map((service, index) => (
            <li key={service.title} className="relative">
              <span
                className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl"
                aria-hidden
              >
                {formatNumber(index + 1)}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">
                {service.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
