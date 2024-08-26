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
          <article className="xl:w-1/2 md:w-1/2 p-4 ">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://www.ascensionkofc.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
                  src="/images/kofc.png"
                  alt="Ascension Knights of Columbus"
                  title="Ascension Knights of Columbus"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                WordPress Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                Ascension KofC
              </h2>
            </article>
          </article>
          <article className="xl:w-1/2 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://www.orthoathleticedu.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
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
          <article className="xl:w-1/2 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://rndkc.vercel.app"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
                  src="/images/rnd.svg"
                  alt="RND Garage"
                  title="RND Garage"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                NextJS Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                RND Garage
              </h2>
            </article>
          </article>
          <article className="xl:w-1/2 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://www.ks3130.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
                  src="/images/ahg.jpg"
                  alt="American Heritage Girls Troop KS-3130"
                  title="American Heritage Girls Troop KS-3130"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                NextJS Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                AHG Troop KS-3130
              </h2>
            </article>
          </article>
        </section>
      </section>
      <section className="p-5 max-h-full my-5 w-full rounded-xl transition-all duration-200 md:w-3/4 md:mx-auto lg:w-9/12">
        <header className="lg:w-1/2 w-full mb-6 xl:mb-6 lg:mb-0">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-100">
            Works in Progress
          </h2>
          <hr />
        </header>
        <section className="flex flex-wrap justify-between md:flex-nowrap">
          <article className="xl:w-1/2 md:w-1/2 p-4 ">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://mpp-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
                  src="/images/d4v.webp"
                  alt="Dogs 4 Valor"
                  title="Dogs 4 Valor"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                NextJS Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                Dogs 4 Valor
              </h2>
            </article>
          </article>
          <article className="xl:w-1/2 md:w-1/2 p-4">
            <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
              <a
                href="https://savagenails.info"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="h-40 rounded-xl w-full object-contain object-center mb-6"
                  src="/images/vercel.svg"
                  alt="RND Garage"
                  title="RND Garage"
                />
              </a>
              <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                NextJS Website
              </h3>
              <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                Beauty & Grace with the Savage Gals
              </h2>
            </article>
          </article>
        </section>
      </section>
    </section>
  );
};

export default HomeProjects;
