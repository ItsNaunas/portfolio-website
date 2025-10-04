import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HorizontalCaseStudy from "@/components/HorizontalCaseStudy";
import { caseStudies, eCtrlCaseStudy, aliraCaseStudy } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((s) => s.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Check if this is a case study with enhanced content
  const isECtrl = caseStudy.slug === "e-ctrl";
  const isAlira = caseStudy.slug === "alira";
  const detailedData = isECtrl ? eCtrlCaseStudy : isAlira ? aliraCaseStudy : null;

  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen">
        {/* Back link - fixed position */}
        <div className="fixed top-20 left-8 z-50">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors bg-ink/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="font-body text-sm">Back to case studies</span>
          </Link>
        </div>

        {/* CTA - fixed position */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link
            href="/#join"
            className="btn inline-block"
          >
            START YOUR PROJECT
          </Link>
        </div>

        {/* Horizontal Case Study Content */}
        {(isECtrl || isAlira) && detailedData ? (
          <HorizontalCaseStudy caseStudy={caseStudy} detailedData={detailedData} />
        ) : (
          // Fallback for other case studies (standard vertical layout)
          <div className="pt-32 pb-16">
            <div className="section-container">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Title */}
                <div className="space-y-4">
                  <h1 className="headline-lg text-white">{caseStudy.title}</h1>
                  <p className="text-signal font-display text-2xl">{caseStudy.result}</p>
                </div>

                {/* Hero image */}
                <div className="aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  {caseStudy.slug === "alira" ? (
                    <img
                      src="/case-study-mockups/case study 2/alira-case2.png"
                      alt={caseStudy.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-signal/10 to-transparent flex items-center justify-center">
                      <p className="text-white/30 font-body text-sm">Screenshot placeholder</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <h2 className="text-signal font-display text-sm uppercase tracking-wide">Challenge</h2>
                    <p className="text-white/80 font-body text-lg">{caseStudy.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-signal font-display text-sm uppercase tracking-wide">Solution</h2>
                    <p className="text-white/80 font-body text-lg">{caseStudy.solution}</p>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-signal font-display text-sm uppercase tracking-wide">Results</h2>
                    <p className="text-white font-body text-2xl">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

