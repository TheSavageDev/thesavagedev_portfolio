import type { WorkItem } from "../data/work";

type WorkCardProps = { item: WorkItem };

export const WorkCard = ({ item }: WorkCardProps) => {
  const { title, href, category, image, techLogos } = item;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-gray-900 motion-reduce:transition-none"
    >
      <span className="glass-panel flex h-full flex-col rounded-xl border-white/20 bg-primary/25 p-4 shadow-glass-highlight transition-shadow duration-300 group-hover:shadow-glass-highlight-hover group-focus-within:shadow-glass-highlight-hover">
        <span className="mb-4 flex min-h-[7rem] flex-1 items-center justify-center overflow-hidden rounded-lg bg-gray-900/30">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              className="h-32 w-full object-contain object-center"
            />
          ) : techLogos && techLogos.length > 0 ? (
            <span className="flex flex-wrap items-center justify-center gap-3">
              {techLogos.map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto object-contain"
                />
              ))}
            </span>
          ) : null}
        </span>
        <span className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-yellow">
          {category}
        </span>
        <span className="font-medium text-gray-100 group-hover:text-white">
          {title}
        </span>
      </span>
    </a>
  );
};
