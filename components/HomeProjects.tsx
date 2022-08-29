const HomeProjects = () => {
  return (
    <section className="text-gray-100 body-font flex flex-wrap items-center justify-center lg:flex-col">
      <section className="p-5 max-h-full my-5 w-full rounded-xl transition-all duration-200 md:w-3/4 md:mx-auto lg:w-9/12">
        <header className="lg:w-1/2 w-full mb-6 xl:mb-6 lg:mb-0">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-100">
            Work
          </h2>
          <hr />
        </header>
        <section className="flex flex-wrap justify-between md:flex-nowrap">
          <article className="xl:w-1/4 md:w-1/2 p-4 ">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://shoptrendysavages.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-cover object-center mb-6"
                  src="/images/ts.png"
                  alt="Trendy Savages"
                  title="Trendy Savages"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                Shopify Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                Trendy Savages
              </h2>
            </article>
          </article>
          <article className="xl:w-1/4 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://www.orthoathleticedu.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-cover object-center mb-6"
                  src="/images/orthoathletic.png"
                  alt="OrthoAthletic Education, LLC"
                  title="OrthoAthletic Education, LLC"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                WordPress Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                OrthoAthletic Education
              </h2>
            </article>
          </article>
          <article className="xl:w-1/4 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://foldawaytrailer.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-cover object-center mb-6"
                  src="/images/ftc.png"
                  alt="Foldaway Trailer Company"
                  title="Foldaway Trailer Company"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                Gatsby Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                Foldaway Trailer Company
              </h2>
            </article>
          </article>
        </section>
      </section>
    </section>
  );
};

export default HomeProjects;
