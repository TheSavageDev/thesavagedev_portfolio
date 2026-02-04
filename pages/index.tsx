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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative min-h-screen text-white">
        <div
          className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-900 from-0% via-gray-800 via-40% to-gray-900 to-100%"
          aria-hidden
        />
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(21,65,74,0.15),transparent_50%)]"
          aria-hidden
        />
        <main className="w-full" id="home-main">
          <HeroSection />
          <div className="mx-auto max-w-6xl space-y-16 px-6 py-12 md:py-16">
            <SectionReveal>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -left-10 top-1/2 h-48 w-72 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
                  aria-hidden
                />
                <FaithSection />
              </div>
            </SectionReveal>
            <SectionReveal>
              <HomeProjects />
            </SectionReveal>
            <SectionReveal>
              <ServicesSection />
            </SectionReveal>
          </div>
        </main>

        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
