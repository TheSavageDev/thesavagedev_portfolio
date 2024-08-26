import { ProjectBox } from "./ProjectBox";

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
          <ProjectBox
            href="https://www.ascensionkofc.com/"
            type="NextJS Website"
            text="Ascension K of C"
            imgSrc="/images/kofc.png"
            imgAlt="Ascension Knights of Columbus"
          />
          <ProjectBox
            href="https://www.orthoathleticedu.com/"
            type="WordPress Website"
            text="OrthoAthletic Education"
            imgSrc="/images/orthoathletic.png"
            imgAlt="OrthoAthletic Education, LLC"
          />
          <ProjectBox
            href="https://rndkc.vercel.app"
            type="NextJS Website"
            text="RND Garage"
            imgSrc="/images/rnd.svg"
            imgAlt="RND Garage"
          />
          <ProjectBox
            href="https://www.ks3130.com"
            type="NextJS Website"
            text="AHG Troop KS-3130"
            imgSrc="/images/ahg.jpg"
            imgAlt="American Heritage Girls Troop KS-3130"
          />
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
          <ProjectBox
            href="https://mpp-seven.vercel.app"
            type="NextJS Website"
            text="Dogs 4 Valor"
            imgSrc="/images/d4v.webp"
            imgAlt="Dogs 4 Valor"
          />
          <ProjectBox
            href="https://savagenails.info"
            type="NextJS Website"
            text="Beauty & Grace with the Savage Gals"
            imgSrc="/images/vercel.svg"
            imgAlt="Savage Nails"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeProjects;
