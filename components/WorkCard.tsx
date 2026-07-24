import type { WorkItem } from "../data/work";

type WorkCardProps = { item: WorkItem; index: number };

export const WorkCard = ({ item, index }: WorkCardProps) => {
  const { title, href, category, image, techLogos } = item;
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 border-t border-white/10 py-8 transition-colors duration-300 hover:border-yellow/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 md:grid-cols-[4rem_minmax(0,1fr)_minmax(8rem,14rem)] md:gap-x-8"
    >
      <span className="font-display text-sm font-semibold tracking-wider text-yellow/70 transition-colors duration-300 group-hover:text-yellow">
        {number}
      </span>

      <span className="min-w-0">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 transition-colors duration-300 group-hover:text-yellow">
          {category}
        </span>
        <span className="font-display text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow md:text-3xl">
          {title}
        </span>
      </span>

      <span className="col-span-2 flex h-28 items-center justify-center overflow-hidden bg-primary/30 md:col-span-1 md:h-24">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : techLogos && techLogos.length > 0 ? (
          <span className="flex flex-wrap items-center justify-center gap-3 px-4">
            {techLogos.map((logo, i) => (
              <img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            ))}
          </span>
        ) : null}
      </span>
    </a>
  );
};
