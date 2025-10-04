"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedMetrics from "./AnimatedMetrics";
import DevelopmentTimeline from "./DevelopmentTimeline";
import TechStackShowcase from "./TechStackShowcase";
import CodeHighlight from "./CodeHighlight";

interface HorizontalCaseStudyProps {
  caseStudy: any;
  detailedData: any;
}

export default function HorizontalCaseStudy({ caseStudy, detailedData }: HorizontalCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      id: "hero",
      title: "Project Overview",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-4xl text-center space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h1 
                className="headline-lg text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {caseStudy.title}
              </motion.h1>
              {detailedData?.tagline && (
                <motion.p 
                  className="text-signal font-display text-2xl max-w-3xl mx-auto"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {detailedData.tagline}
                </motion.p>
              )}
              <motion.p 
                className="text-white font-body text-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {caseStudy.result}
              </motion.p>
            </motion.div>

            {/* Tech Stack & Live Demo */}
            {detailedData?.hero && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10"
              >
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {detailedData.hero.techStack.map((tech: string, index: number) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 font-body text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(242, 97, 63, 0.1)",
                        borderColor: "rgba(242, 97, 63, 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Live Demo Link */}
                {detailedData.hero.liveDemo && (
                  <Link
                    href={detailedData.hero.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-signal text-ink rounded-lg font-display text-sm hover:bg-signal/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </Link>
                )}
              </motion.div>
            )}

              {/* Key Metrics */}
              {detailedData?.hero?.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
                >
                  {detailedData.hero.metrics.map((metric: string, index: number) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(242, 97, 63, 0.05)",
                        borderColor: "rgba(242, 97, 63, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-signal font-display text-2xl mb-1">
                        {metric}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
          </div>
        </div>
      )
    },
    {
      id: "summary",
      title: "Executive Summary",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2 
                  className="headline-md text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Executive Summary
                </motion.h2>
                <p className="text-white/70 font-body text-lg max-w-3xl mx-auto">
                  A comprehensive overview of the problem, solution, and business model.
                </p>
              </div>
              
              {detailedData?.executiveSummary && (
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: "The Problem", content: detailedData.executiveSummary.problem },
                    { title: "The Solution", content: detailedData.executiveSummary.solution },
                    { title: "Business Model", content: detailedData.executiveSummary.businessModel }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(242, 97, 63, 0.05)",
                        borderColor: "rgba(242, 97, 63, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-signal font-display text-sm uppercase tracking-wide">{item.title}</h3>
                      <p className="text-white/80 font-body text-lg leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "architecture",
      title: "Technical Architecture",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-6xl text-center">
            {detailedData?.technicalArchitecture && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <TechStackShowcase
                  title="Technical Architecture"
                  techItems={[
                    ...detailedData.technicalArchitecture.frontend.map((tech: any) => ({ ...tech, category: "frontend" as const })),
                    ...detailedData.technicalArchitecture.backend.map((tech: any) => ({ ...tech, category: "backend" as const })),
                    ...detailedData.technicalArchitecture.integrations.map((tech: any) => ({ ...tech, category: "integration" as const }))
                  ]}
                />
              </motion.div>
            )}
          </div>
        </div>
      )
    },
    {
      id: "timeline",
      title: "Development Process",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-6xl text-center">
            {detailedData?.developmentProcess?.timeline && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <DevelopmentTimeline timeline={detailedData.developmentProcess.timeline} />
              </motion.div>
            )}
          </div>
        </div>
      )
    },
    {
      id: "code",
      title: "Code Highlights",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95 py-16">
          <div className="max-w-5xl mx-auto px-8">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <motion.h2 
                  className="headline-md text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Code Highlights
                </motion.h2>
                <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
                  Key technical implementations that demonstrate the complexity and sophistication of this project.
                </p>
              </div>
                  <div className="grid gap-6">
                    {detailedData?.codeHighlights?.slice(0, 2).map((highlight: any, index: number) => (
                      <motion.div 
                        key={index} 
                        className="space-y-4"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-2">
                          <h3 className="text-white font-display text-lg">{highlight.title}</h3>
                          <p className="text-white/80 font-body text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>

                        <motion.div 
                          className="relative group"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="bg-ink border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-signal/30 transition-colors duration-200">
                            <div className="bg-white/5 px-4 py-2 border-b border-white/10">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="ml-4 text-white/60 font-body text-sm">{highlight.language}</span>
                              </div>
                            </div>
                            <pre className="p-4 overflow-x-auto max-h-64">
                              <code className="text-white/90 font-mono text-xs leading-relaxed">
                                {highlight.code.length > 500 ? highlight.code.substring(0, 500) + '...' : highlight.code}
                              </code>
                            </pre>
                          </div>
                        </motion.div>

                        {highlight.explanation && (
                          <motion.div 
                            className="p-4 bg-signal/10 border border-signal/20 rounded-lg cursor-pointer"
                            whileHover={{ 
                              scale: 1.01,
                              backgroundColor: "rgba(242, 97, 63, 0.15)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-white/90 font-body text-sm leading-relaxed">
                              {highlight.explanation}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "results",
      title: "Results & Metrics",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-6xl text-center">
            {detailedData?.results && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <motion.h2 
                    className="headline-md text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    Results & Metrics
                  </motion.h2>
                  <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
                    Measurable outcomes that demonstrate the success and impact of this project.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedMetrics
                      title="Development"
                      metrics={detailedData.results.development}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedMetrics
                      title="Performance"
                      metrics={detailedData.results.performance}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedMetrics
                      title="Business Impact"
                      metrics={detailedData.results.business}
                    />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: "lessons",
      title: "Lessons Learned",
      content: (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-ink via-ink to-ink/95">
          <div className="max-w-6xl text-center">
            {detailedData?.lessonsLearned && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <motion.h2 
                    className="headline-md text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    Lessons Learned
                  </motion.h2>
                  <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
                    Insights gained from building this project and recommendations for future development.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    className="space-y-6 p-6 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(242, 97, 63, 0.05)",
                      borderColor: "rgba(242, 97, 63, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-signal font-display text-lg">What Worked Well</h3>
                    <ul className="space-y-3">
                      {detailedData.lessonsLearned.whatWorked.map((lesson: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 font-body text-sm leading-relaxed">
                            {lesson}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="space-y-6 p-6 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(242, 97, 63, 0.05)",
                      borderColor: "rgba(242, 97, 63, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-signal font-display text-lg">Future Improvements</h3>
                    <ul className="space-y-3">
                      {detailedData.lessonsLearned.improvements.map((lesson: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 font-body text-sm leading-relaxed">
                            {lesson}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="space-y-6 p-6 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(242, 97, 63, 0.05)",
                      borderColor: "rgba(242, 97, 63, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-signal font-display text-lg">Unexpected Insights</h3>
                    <ul className="space-y-3">
                      {detailedData.lessonsLearned.surprises.map((lesson: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 font-body text-sm leading-relaxed">
                            {lesson}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
  ];


  // Left sidebar section indicators (stacked)
  const LeftSidebar = () => (
    <div className="fixed left-8 top-32 z-50 flex flex-col space-y-2">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => {
            if (containerRef.current) {
              const scrollAmount = window.innerWidth * index;
              containerRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
              });
            }
          }}
          className={`group relative transition-all duration-300 text-left block w-full max-w-[200px] ${
            currentSection === index 
              ? 'opacity-100' 
              : 'opacity-50 hover:opacity-75'
          }`}
        >
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
              currentSection === index 
                ? 'bg-signal' 
                : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            <span className="text-white font-body text-xs uppercase tracking-wide truncate">
              {section.title}
            </span>
          </div>
        </button>
      ))}
    </div>
  );

  // Update current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const sectionWidth = window.innerWidth;
        const newSection = Math.round(scrollLeft / sectionWidth);
        setCurrentSection(newSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial call to set current section
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Section-to-section snap scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMobile || !containerRef.current) return;
      
      e.preventDefault();
      
      const container = containerRef.current;
      const sectionWidth = window.innerWidth;
      const currentScrollLeft = container.scrollLeft;
      const currentSectionIndex = Math.round(currentScrollLeft / sectionWidth);
      
      if (e.deltaY > 0) { // Scrolling down
        if (currentSectionIndex < sections.length - 1) {
          const nextSectionStart = (currentSectionIndex + 1) * sectionWidth;
          container.scrollTo({
            left: nextSectionStart,
            behavior: 'smooth'
          });
        }
      } else if (e.deltaY < 0) { // Scrolling up
        if (currentSectionIndex > 0) {
          const prevSectionStart = (currentSectionIndex - 1) * sectionWidth;
          container.scrollTo({
            left: prevSectionStart,
            behavior: 'smooth'
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [isMobile, sections.length]);

  // Add scroll event listener to the window for better detection
  useEffect(() => {
    const handleWindowWheel = (e: WheelEvent) => {
      if (isMobile || !containerRef.current) return;
      
      e.preventDefault();
      
      const container = containerRef.current;
      const sectionWidth = window.innerWidth;
      const currentScrollLeft = container.scrollLeft;
      const currentSectionIndex = Math.round(currentScrollLeft / sectionWidth);
      
      if (e.deltaY > 0) { // Scrolling down
        if (currentSectionIndex < sections.length - 1) {
          const nextSectionStart = (currentSectionIndex + 1) * sectionWidth;
          container.scrollTo({
            left: nextSectionStart,
            behavior: 'smooth'
          });
        }
      } else if (e.deltaY < 0) { // Scrolling up
        if (currentSectionIndex > 0) {
          const prevSectionStart = (currentSectionIndex - 1) * sectionWidth;
          container.scrollTo({
            left: prevSectionStart,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('wheel', handleWindowWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWindowWheel);
  }, [isMobile, sections.length]);

  if (isMobile) {
    // Mobile: Use vertical scroll
    return (
      <div className="space-y-16 py-16">
        {sections.map((section, index) => (
          <div key={section.id}>
            {section.content}
          </div>
        ))}
      </div>
    );
  }

  // Desktop: Use horizontal scroll
  return (
    <>
      <LeftSidebar />
      
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ height: '100vh' }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex-shrink-0 w-screen snap-start"
          >
            {section.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
