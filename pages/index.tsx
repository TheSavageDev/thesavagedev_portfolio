import type { NextPage } from "next";
import Head from "next/head";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import HomeFooter from "../components/HomeFooter";
import HomeProjects from "../components/HomeProjects";
import { SectionReveal } from "../components/SectionReveal";
import { ServicesSection } from "../components/ServicesSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason A. Savage · TheSavageDev</title>
        <meta
          name="description"
          content="Staff engineer and team lead in Overland Park. Real-time products across mobile, web, and cloud."
        />
        <meta name="author" content="Jason A. Savage" />
        <meta property="og:title" content="Jason A. Savage · TheSavageDev" />
        <meta
          property="og:description"
          content="Staff engineer and team lead in Overland Park. Real-time products across mobile, web, and cloud."
        />
        <meta property="og:url" content="https://www.thesavage.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.thesavage.dev/images/headshot.png"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.thesavage.dev/" />
      </Head>
      <div className="site-shell">
        <div className="site-backdrop fixed inset-0 -z-10" aria-hidden />
        <main className="w-full" id="home-main">
          <HeroSection />
          <SectionReveal>
            <ExperienceSection />
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
