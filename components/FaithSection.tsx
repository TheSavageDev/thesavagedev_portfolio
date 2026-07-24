const UNSPLASH_PHOTOGRAPHER =
  "https://unsplash.com/@frensisalberti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
const UNSPLASH_PHOTO =
  "https://unsplash.com/photos/woman-in-white-dress-dancing-YqObNh1A4-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

const FAITH_COPY =
  "My Catholic faith grounds my work in dignity, integrity, and service. As a software engineer, I aim to build with excellence and humility—creating technology that helps people and reflects the good.";

export const FaithSection = () => {
  return (
    <section className="relative" aria-labelledby="faith-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-kicker">Foundation</p>
        <h2 id="faith-heading" className="section-title mt-3">
          Faith & work
        </h2>
        <p className="section-lede text-gray-200">{FAITH_COPY}</p>
        <p className="mt-8 text-xs text-gray-500">
          Hero photo by{" "}
          <a
            href={UNSPLASH_PHOTOGRAPHER}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-link"
          >
            Francesco Alberti
          </a>{" "}
          on{" "}
          <a
            href={UNSPLASH_PHOTO}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-link"
          >
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
};
