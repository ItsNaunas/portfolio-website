"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface CodeHighlightProps {
  title: string;
  description: string;
  code: string;
  language?: string;
  explanation?: string;
}

export default function CodeHighlight({ 
  title, 
  description, 
  code, 
  language = "typescript",
  explanation 
}: CodeHighlightProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-3">
        <h3 className="text-white font-display text-xl">{title}</h3>
        <p className="text-white/80 font-body text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Code Block */}
      <div className="relative group">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white/80 font-body text-sm transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        
        <div className="bg-ink border border-white/10 rounded-lg overflow-hidden">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-white/60 font-body text-sm">{language}</span>
            </div>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-white/90 font-mono text-sm leading-relaxed">
              {code}
            </code>
          </pre>
        </div>
      </div>

      {/* Explanation */}
      {explanation && (
        <div className="p-4 bg-signal/10 border border-signal/20 rounded-lg">
          <p className="text-white/90 font-body text-sm leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </motion.div>
  );
}
