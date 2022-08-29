const HomeServices = () => {
  return (
    <section className="flex flex-wrap items-center justify-center lg:flex-col">
      <section
        id="services"
        className="p-5 max-h-full my-5 w-full rounded-xl transition-all duration-200 md:w-3/4 md:mx-auto lg:w-9/12"
      >
        <header className="lg:w-1/2 w-full mb-6 xl:mb-6 lg:mb-0">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-100">
            Services
          </h2>
          <hr />
        </header>
        <section className="flex flex-wrap justify-between md:flex-nowrap">
          <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl shadow-lg">
            <header>
              <h3 className="text-2xl underline my-2 text-center">Research</h3>
            </header>
            <p>
              I can preform and provide a presentation for the most affordable
              and most recommended platforms to use for your business. For
              example, if you wanted to build a storefront with a blog along
              side it I would research options and provide you a detailed report
              on what is the most affordable (up front and over time) and what I
              would most recommend. Please see my works section for an example
              of a report and presentation.
            </p>
          </article>
          <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl shadow-lg">
            <header>
              <h3 className="text-2xl underline my-2 text-center">Develop</h3>
            </header>
            <p>
              I am available for part-time project work at an hourly rate. I
              would especially be interested in a Catholic or other Christian
              organization&apos;s website or any Veteran related website. These
              preferred projects would be at a steeply reduced rate. Please see
              my works page for examples.
            </p>
          </article>
          <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl shadow-lg">
            <header>
              <h3 className="text-2xl underline my-2 text-center">
                WordPress, Shopify, Gatsby
              </h3>
            </header>
            <p>
              I can build your business presence with WordPress or provide
              alternatives that could cost you considerably less. I accept these
              contracts at a very selective rate and will only provide
              administration for these sites with very select circumstances. I
              will provide training and documentation for you to easily
              administrate or to provide to an employee to handle it. Please see
              my works section for examples of sites I&apos;ve worked on.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
};

export default HomeServices;
