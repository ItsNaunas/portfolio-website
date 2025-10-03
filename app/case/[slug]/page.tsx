import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/data";
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

  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen pt-32 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Back link */}
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-signal hover:text-signal/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="font-body text-sm">Back to case studies</span>
            </Link>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="headline-lg text-white">{caseStudy.title}</h1>
              <p className="text-signal font-display text-2xl">{caseStudy.result}</p>
            </div>

            {/* Hero image */}
            <div className="aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-signal/10 to-transparent flex items-center justify-center">
                <p className="text-white/30 font-body text-sm">Screenshot placeholder</p>
              </div>
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

            {/* TODO: Add detailed case study content, before/after images, metrics, etc. */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <h2 className="headline-sm text-white">Detailed Breakdown</h2>
              <p className="text-white/70 font-body text-lg">
                TODO: Add detailed case study content including approach, implementation, before/after comparisons,
                and key metrics.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/10 text-center space-y-6">
              <h2 className="headline-md text-white">WANT SIMILAR RESULTS?</h2>
              <Link href="/#join" className="btn inline-block">
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

