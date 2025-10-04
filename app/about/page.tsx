import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About — Naunas",
  description: "Learn more about Naunas and the mission to help businesses convert more visitors into customers.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen pt-32 pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Hero */}
            <div className="space-y-6">
              <h1 className="headline-md md:headline-lg text-white">ABOUT ME</h1>
              <p className="text-white/70 text-lg md:text-xl font-body leading-relaxed">
                I build websites and systems that actually convert. No fluff, no generic templates—just
                high-performance digital experiences designed to turn clicks into clients.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="aspect-[4/3] md:aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-signal/10 to-transparent flex items-center justify-center">
                <p className="text-white/30 font-body text-sm">Photo placeholder</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="headline-sm text-white">THE MISSION</h2>
              <div className="space-y-4 text-white/70 font-body text-base md:text-lg leading-relaxed">
                <p>
                  Most websites are beautiful but broken. They look great in mockups but fail to convert
                  real visitors into paying customers.
                </p>
                <p>
                  I specialize in conversion-focused design and development—combining CRO principles,
                  modern tech stacks, and AI-powered automations to create systems that drive real business results.
                </p>
                <p>
                  With 25+ projects delivered and an average 7-day turnaround, I help consultants, agencies,
                  and coaches transform their online presence into a lead-generating machine.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-6">
              <h2 className="headline-sm text-white">PRINCIPLES</h2>
              <ul className="space-y-4">
                {[
                  "Conversion over aesthetics (though we do both)",
                  "Speed is a feature—7-day average delivery",
                  "Data-driven decisions—test, measure, optimize",
                  "No templates—every project is custom-built",
                ].map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-signal mt-3 flex-shrink-0" />
                    <span className="text-white/80 font-body text-base md:text-lg">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/10">
              <Link href="/#join" className="btn inline-block">
                LET&apos;S WORK TOGETHER
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

