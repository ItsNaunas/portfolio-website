import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import StatsBand from "@/components/StatsBand";
import CaseGrid from "@/components/CaseGrid";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <Offer />
        <HowItWorks />
        <StatsBand />
        <CaseGrid />
        <Process />
        <TechStack />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}

