import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import StatsBand from "@/components/StatsBand";
import CaseGrid from "@/components/CaseGrid";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
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
        <TechStack />
        <CaseGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

