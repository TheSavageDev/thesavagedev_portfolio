import { shippedWork, workInProgress } from "../data/work";
import { WorkCard } from "./WorkCard";

const HomeProjects = () => {
  return (
    <section className="body-font text-gray-100" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <header className="mb-6">
          <h2
            id="work-heading"
            className="title-font text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl"
          >
            Work
          </h2>
          <hr className="mt-2 w-20 border-yellow" />
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {shippedWork.map((item) => (
            <li key={item.href}>
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <header className="mb-6">
          <h2 className="title-font text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">
            Works in progress
          </h2>
          <hr className="mt-2 w-20 border-yellow" />
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {workInProgress.map((item) => (
            <li key={item.href}>
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeProjects;
