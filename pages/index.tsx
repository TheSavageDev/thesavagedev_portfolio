import type { NextPage } from "next";
import Head from "next/head";
import HomeFooter from "../components/HomeFooter";
import HomeProjects from "../components/HomeProjects";

const Home: NextPage = () => {
  return (
    <main className="max-h-screen max-w-screen overflow-auto">
      <Head>
        <title>TheSavageDev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="flex bg-black text-white justify-between z-10">
        <h1 className="text-5xl text-yellow mx-5">JS</h1>
      </header>
      <main className="w-full m-0 bg-gray-900 text-white" id="home-main">
        <HomeProjects />
      </main>
      <HomeFooter />
    </main>
  );
};

export default Home;
