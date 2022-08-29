import type { NextPage } from "next";
import Head from "next/head";
import HomeFooter from "../components/HomeFooter";
import HomeProjects from "../components/HomeProjects";
import HomeServices from "../components/HomeServices";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TheSavageDev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="flex bg-translucent text-white justify-between fixed right-0 top-0 left-0 z-10">
        <h1 className="text-5xl text-yellow mx-5">JS</h1>
      </header>
      <main className="w-full m-0 bg-gray-900 text-white" id="home-main">
        <section
          id="home"
          className="relative bg-center bg-no-repeat bg-cover bg-cross w-screen h-screen"
        >
          <section className="bg-overlay w-full h-full flex flex-col justify-center items-center">
            <header>
              <h2 id="title" className="text-4xl font-semibold text-white">
                I am Jason A Savage
              </h2>
            </header>
            <section className="flex flex-wrap justify-between">
              <article className="jobs">
                <span id="catholic" className="text-lg mx-2">
                  Catholic
                </span>
                <span id="father" className="text-lg mx-2">
                  Father
                </span>
                <span id="husband" className="text-lg mx-2">
                  Husband
                </span>
                <span id="se" className="text-lg mx-2">
                  Software Engineer
                </span>
              </article>
            </section>
          </section>
        </section>
        <HomeProjects />
        <HomeServices />
      </main>
      <HomeFooter />
    </>
  );
};

export default Home;
