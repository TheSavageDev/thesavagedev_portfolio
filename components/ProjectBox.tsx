export const ProjectBox = ({
  href,
  type,
  text,
  imgSrc,
  imgAlt,
}: {
  href: string;
  type: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}) => {
  return (
    <article className="xl:w-1/2 md:w-1/2 p-4 ">
      <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">
          <img
            className="h-40 rounded-xl w-full object-contain object-center mb-6"
            src={imgSrc}
            alt={imgAlt}
            title={imgAlt}
          />
        </a>
        <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
          {type}
        </h3>
        <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
          {text}
        </h2>
      </article>
    </article>
  );
};
