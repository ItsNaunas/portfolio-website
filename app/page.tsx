import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Offer from "@/components/Offer";
import CaseHighlight from "@/components/CaseHighlight";
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
        <CaseHighlight />
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

