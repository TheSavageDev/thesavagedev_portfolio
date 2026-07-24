import type { NextPage } from "next";
import Head from "next/head";
import { FaithSection } from "../components/FaithSection";
import { HeroSection } from "../components/HeroSection";
import HomeFooter from "../components/HomeFooter";
import HomeProjects from "../components/HomeProjects";
import { SectionReveal } from "../components/SectionReveal";
import { ServicesSection } from "../components/ServicesSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TheSavageDev</title>
        <meta
          name="description"
          content="TheSavageDev — software engineer in Kansas building with faith and code."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="site-shell">
        <div className="site-backdrop fixed inset-0 -z-10" aria-hidden />
        <main className="w-full" id="home-main">
          <HeroSection />
          <SectionReveal>
            <FaithSection />
          </SectionReveal>
          <SectionReveal>
            <HomeProjects />
          </SectionReveal>
          <SectionReveal>
            <ServicesSection />
          </SectionReveal>
        </main>
        <SectionReveal>
          <HomeFooter />
        </SectionReveal>
      </div>
    </>
  );
};

export default Home;
