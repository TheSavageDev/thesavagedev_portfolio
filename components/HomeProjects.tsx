import { shippedWork, workInProgress } from "../data/work";
import { WorkCard } from "./WorkCard";

const HomeProjects = () => {
  return (
    <section className="relative" id="work" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="mb-4 max-w-2xl">
          <p className="section-kicker">Portfolio</p>
          <h2 id="work-heading" className="section-title mt-3">
            Selected work
          </h2>
          <p className="section-lede">
            A short list of shipped sites and products. More recent work coming
            soon.
          </p>
        </header>

        <ul className="border-b border-white/10">
          {shippedWork.map((item, index) => (
            <li key={item.href}>
              <WorkCard item={item} index={index} />
            </li>
          ))}
        </ul>

        <div className="mt-20 md:mt-28">
          <header className="mb-4 max-w-2xl">
            <p className="section-kicker">In progress</p>
            <h3 className="section-title mt-3 text-2xl md:text-3xl lg:text-4xl">
              Works in progress
            </h3>
            <p className="section-lede">
              Active builds across mobile and web.
            </p>
          </header>
          <ul className="border-b border-white/10">
            {workInProgress.map((item, index) => (
              <li key={item.href}>
                <WorkCard item={item} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
