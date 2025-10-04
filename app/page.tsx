import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import StatsBand from "@/components/StatsBand";
import TechStack from "@/components/TechStack";
import CaseGrid from "@/components/CaseGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Offer />
        <HowItWorks />
        <StatsBand />
        <CaseGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

