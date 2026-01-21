export const rotatingStats = [
  { line1: "100%", line2: "UPTIME" },
  { line1: "7-DAY", line2: "INSTALL" },
  { line1: "25+", line2: "SYSTEMS" },
  { line1: "5★", line2: "RATED" },
];

export const marqueeLogos = [
  "/logos/client1.svg",
  "/logos/client2.svg",
  "/logos/client3.svg",
  "/logos/client4.svg",
];

export const offerBullets = [
  "Unified intake layer across all demand channels",
  "AI-assisted qualification and revenue diagnostics",
  "State-driven automation from acquisition to retention",
  "Canonical CRM model — single source of truth",
  "System health checks and optimisation loops",
];

export const caseStudies = [
  {
    slug: "e-ctrl",
    title: "E-CTRL",
    image: "/case-study-mockups/case study 1/e-ctrl-case1.png",
    problem: "Amazon sellers needed a way to prove their listing potential before investing in expensive consultations.",
    solution: "Built an AI-powered dual-path audit system that generates qualified leads through free value delivery.",
    result: "100+ weekly audits | 83% email open rate | 12% consultation bookings",
    tagline: "AI-powered Amazon audit tool that converts sellers into customers",
    techStack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Resend"],
    liveDemo: "https://e-ctrl.co.uk",
    metrics: {
      development: "30 days",
      audits: "100+ per week",
      openRate: "83%",
      conversion: "12%"
    }
  },
  {
    slug: "alira",
    title: "ALIRA",
    image: "/case-study-mockups/case study 2/alira-case1.png",
    problem: "ALIRA needed a sophisticated lead generation system that could instantly provide value to potential clients while scaling their consultancy approach.",
    solution: "Built an AI-powered business case generator with multi-step form wizard that delivers professional PDF reports to convert leads into clients.",
    result: "Automated lead generation | Professional PDF delivery | 99%+ email success rate | Scalable consultancy system",
    tagline: "AI-powered business case generator that converts prospects into clients",
    techStack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Resend", "jsPDF"],
    liveDemo: "https://alirapartners.co.uk",
    metrics: {
      development: "4 weeks",
      leads: "Automated",
      pdfDelivery: "99%+",
      conversion: "High-quality"
    }
  },
  {
    slug: "hijama",
    title: "SUNNAH REVIVE CUPPING",
    image: "/case-study-mockups/case study 3/hijama-case1.png",
    problem: "Traditional Islamic healing needed modern digital presence to reach North London Muslim community.",
    solution: "Built a culturally-sensitive, mobile-first web platform that bridges ancient Hijama therapy with modern web technology.",
    result: "500+ clients served | 5+ years experience | Mobile home visits across North London",
    tagline: "Mobile Hijama therapy service connecting Islamic healing traditions with modern healthcare",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://sunnahrevivecupping.co.uk",
    metrics: {
      development: "6 weeks",
      clients: "500+",
      experience: "5+ years",
      coverage: "North London"
    }
  },
  {
    slug: "naunas",
    title: "NAUNAS PORTFOLIO",
    image: "/case-study-mockups/case study 4/naunas-case1.png",
    problem: "Professional portfolio needed modern design to showcase expertise and convert visitors into clients.",
    solution: "Built a cutting-edge portfolio website with interactive case studies, smooth animations, and conversion-optimized design.",
    result: "+91% qualified leads | Modern design | Interactive case studies | Mobile optimized",
    tagline: "Personal portfolio website showcasing web development expertise and client success stories",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveDemo: "https://naunas.co.uk",
    metrics: {
      development: "4 weeks",
      leads: "+91%",
      design: "Modern",
      mobile: "Optimized"
    }
  },
];

export const mainCaseHighlight = {
  title: "E-CTRL",
  problem: "Manual Amazon audits bottlenecked at founder capacity. No qualification layer between lead capture and consultation.",
  solution: "Installed AI-powered qualification system with dual-path routing, automated audit delivery, and CRM integration.",
  result: "100+ WEEKLY AUDITS | 83% OPEN | 12% BOOKED",
  image: "/screenshots/main-case.jpg",
  videoThumb: "/screenshots/video-thumb.jpg",
};

export const stats = [
  { primary: "NO LEADS LOST", subtext: "all demand captured automatically" },
  { primary: "FOUNDER TIME RECLAIMED", subtext: "admin and chasing removed" },
  { primary: "NO GUESSWORK", subtext: "pipeline and outcomes visible" },
];

export const processSteps = [
  "AUDIT",
  "DESIGN",
  "BUILD",
  "OPTIMISE",
];

export const tech = [
  { name: "Airtable", icon: "/logos/tech/airtable.svg" },
  { name: "Calendly", icon: "/logos/tech/calendly.svg" },
  { name: "Gmail", icon: "/logos/tech/gmail.svg" },
  { name: "n8n", icon: "/logos/tech/n8n.svg" },
  { name: "OpenAI", icon: "/logos/tech/openai.svg" },
  { name: "Stripe", icon: "/logos/tech/stripe.svg" },
  { name: "Supabase", icon: "/logos/tech/supabase.svg" },
];

export const navLinks = [
  { label: "ABOUT ME", href: "/about" },
  { label: "CASE STUDIES", href: "#case-studies" },
  { label: "SERVICES", href: "#services" },
  { label: "CONNECT", href: "#connect" },
];

export const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/naunas", icon: "FaTwitter" },
  { name: "LinkedIn", url: "https://linkedin.com/in/naunas", icon: "FaLinkedin" },
  { name: "GitHub", url: "https://github.com/naunas", icon: "FaGithub" },
];

// E-CTRL Case Study Detailed Data
export const eCtrlCaseStudy = {
  slug: "e-ctrl",
  title: "E-CTRL",
  tagline: "AI-powered Amazon audit tool that converts sellers into customers",
  hero: {
    metrics: ["Built in 30 days", "100+ weekly audits", "83% email open rate", "12% consultation bookings"],
    techStack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Resend"],
    liveDemo: "https://e-ctrl.co.uk"
  },
  executiveSummary: {
    problem: "Amazon sellers in the UK/EU market needed a way to prove their listing potential before investing in expensive consultations. Existing audit tools were either too expensive or didn't provide actionable insights for the UK/EU marketplace.",
    solution: "Built a dual-path AI-powered audit system that provides free, valuable insights to Amazon sellers while capturing qualified leads for consultation bookings. The system handles both existing ASIN audits and new product readiness assessments.",
    businessModel: "Free tool → Email capture → PDF reports → Consultation bookings. The system generates qualified leads by providing genuine value upfront, then converts them through professional deliverables and strategic follow-up."
  },
  technicalArchitecture: {
    frontend: [
      { name: "Next.js 14", description: "App Router for optimal performance and SEO" },
      { name: "TypeScript", description: "Strict mode for type safety and better DX" },
      { name: "Tailwind CSS", description: "Custom design system with 8pt grid" },
      { name: "Framer Motion", description: "Smooth animations and micro-interactions" }
    ],
    backend: [
      { name: "API Routes", description: "3 main endpoints: /api/preview, /api/report, /api/email" },
      { name: "OpenAI GPT-4", description: "AI analysis and personalized recommendations" },
      { name: "Supabase", description: "PostgreSQL database with rate limiting functions" },
      { name: "Resend", description: "Email service with PDF attachments and tracking" }
    ],
    integrations: [
      { name: "Amazon Scraper", description: "Custom regex-based UK marketplace scraper" },
      { name: "IDQ Evaluator", description: "8-point binary scoring system for listing quality" },
      { name: "PDF Generation", description: "jsPDF for professional audit reports" },
      { name: "Rate Limiting", description: "PostgreSQL functions prevent abuse" }
    ]
  },
  businessStrategy: {
    funnel: [
      { step: "1", title: "Landing", description: "Dual-path hero with clear value proposition" },
      { step: "2", title: "Input", description: "ASIN or product URL with minimal friction" },
      { step: "3", title: "Analysis", description: "AI-powered audit with progress indication" },
      { step: "4", title: "Preview", description: "Guest users see limited results" },
      { step: "5", title: "Capture", description: "Email signup for full report access" },
      { step: "6", title: "Deliver", description: "PDF report via branded email" },
      { step: "7", title: "Convert", description: "Calendly booking CTA for consultations" }
    ],
    metrics: [
      { metric: "100+", label: "Weekly Audits" },
      { metric: "83%", label: "Email Open Rate" },
      { metric: "12%", label: "Consultation Bookings" },
      { metric: "95%", label: "Scraping Success" }
    ]
  },
  developmentProcess: {
    timeline: [
      { phase: "Week 1", description: "MVP: Basic ASIN audit with OpenAI integration" },
      { phase: "Week 2", description: "Enhanced: New seller path and IDQ scoring system" },
      { phase: "Week 3", description: "Polish: PDF generation, email automation, access control" },
      { phase: "Week 4", description: "Launch: Rate limiting, error handling, performance optimization" }
    ],
    challenges: [
      { challenge: "Amazon Scraping", solution: "Switched from AI scraper to regex-based extraction for reliability" },
      { challenge: "PDF Generation", solution: "Used jsPDF with careful base64 encoding for serverless compatibility" },
      { challenge: "Email Deliverability", solution: "Implemented SPF/DKIM records and Resend for better inbox rates" },
      { challenge: "Rate Limiting", solution: "Built PostgreSQL functions to prevent abuse without throttling real users" }
    ]
  },
  results: {
    development: [
      { metric: "25", label: "Components Built" },
      { metric: "15", label: "API Routes" },
      { metric: "8,000+", label: "Lines of Code" },
      { metric: "30", label: "Days to Launch" }
    ],
    performance: [
      { metric: "1.8s", label: "Average Load Time" },
      { metric: "98", label: "Lighthouse Score" },
      { metric: "95%", label: "Scraping Success Rate" },
      { metric: "WCAG", label: "Accessibility Compliant" }
    ],
    business: [
      { metric: "100+", label: "Weekly Audits" },
      { metric: "83%", label: "Email Open Rate" },
      { metric: "12%", label: "Consultation Bookings" },
      { metric: "£0", label: "Cost Per Lead" }
    ]
  },
  horizontalScrollSections: [
    {
      id: "problem-solution",
      title: "Problem & Solution",
      subtitle: "Business Challenge",
      content: "Amazon sellers in the UK/EU market were struggling to validate their product potential before investing in expensive consultations. Existing tools were either too generic or too expensive. I identified an opportunity to build a free tool that provides genuine value while capturing qualified leads.",
      metrics: ["£500+", "Consultation Cost", "30 min", "Audit Time", "Free", "Tool Cost"]
    },
    {
      id: "technical-architecture",
      title: "Technical Architecture",
      subtitle: "System Design",
      content: "Built a full-stack application with Next.js 14, TypeScript, and Supabase. The system features a dual-path architecture: existing sellers get ASIN audits, while new sellers get product readiness assessments. AI integration provides personalized recommendations based on real Amazon data.",
      metrics: ["Next.js 14", "TypeScript", "OpenAI GPT-4", "Supabase"]
    },
    {
      id: "idq-scoring",
      title: "IDQ Scoring System",
      subtitle: "Listing Quality Evaluation",
      content: "Developed an 8-point binary scoring system that evaluates Amazon listing quality: brand presence, title optimization, bullet points, description length, image quality, and more. This provides objective, actionable feedback that sellers can immediately implement.",
      metrics: ["8 Points", "Binary Scoring", "Real-time", "Evaluation", "95%", "Accuracy"]
    },
    {
      id: "lead-generation",
      title: "Lead Generation Funnel",
      subtitle: "Conversion Strategy",
      content: "Implemented a sophisticated funnel that provides value upfront: free audit preview for guests, full reports for email subscribers, and consultation booking CTAs. The system generates qualified leads by proving expertise before asking for commitment.",
      metrics: ["Free", "Preview", "Email", "Capture", "PDF", "Reports", "12%", "Conversion"]
    },
    {
      id: "business-impact",
      title: "Business Impact",
      subtitle: "Measurable Results",
      content: "The system processes 100+ audits weekly with an 83% email open rate and 12% consultation booking rate. This translates to significant cost savings in lead generation while providing genuine value to Amazon sellers in the UK/EU market.",
      metrics: ["100+", "Weekly Audits", "83%", "Open Rate", "12%", "Bookings", "£0", "Cost Per Lead"]
    }
  ],
  lessonsLearned: {
    whatWorked: [
      "Regex-based scraping was more reliable than AI scraping for Amazon data",
      "Dual-path system addressed different seller needs effectively",
      "Guest/account split created natural upgrade incentive",
      "PDF reports significantly increased perceived value"
    ],
    improvements: [
      "Implement rate limiting from day 1 to prevent abuse",
      "Add more comprehensive error handling for edge cases",
      "Include competitor analysis features for account users",
      "Build Chrome extension for instant audits"
    ],
    surprises: [
      "Email deliverability required more setup than expected",
      "PDF generation in serverless environment had encoding challenges",
      "Amazon's anti-scraping measures were less aggressive than anticipated",
      "Users preferred binary scoring over 10-point scales"
    ]
  },
  codeHighlights: [
    {
      title: "IDQ Binary Evaluator",
      description: "The core scoring algorithm that evaluates Amazon listing quality using 8 binary checks.",
      language: "typescript",
      code: `interface IDQResult {
  score: number;
  maxScore: number;
  checks: {
    has_brand: boolean;
    title_starts_with_brand: boolean;
    title_correct_length: boolean;
    has_bullets_5plus: boolean;
    has_description_200plus: boolean;
    has_main_image: boolean;
    images_6plus: boolean;
    brand_in_bullets_or_desc: boolean;
  };
}

function evaluateIDQ(product: AmazonProduct): IDQResult {
  const checks = {
    has_brand: !!product.brand,
    title_starts_with_brand: product.brand && 
      product.title.toLowerCase().startsWith(product.brand.toLowerCase()),
    title_correct_length: product.title.length >= 50 && 
      product.title.length <= 200,
    has_bullets_5plus: product.bullets.length >= 5,
    has_description_200plus: product.description.length >= 200,
    has_main_image: !!product.mainImage,
    images_6plus: product.images.length >= 6,
    brand_in_bullets_or_desc: product.brand && (
      product.bullets.some(bullet => 
        bullet.toLowerCase().includes(product.brand.toLowerCase())
      ) || product.description.toLowerCase().includes(product.brand.toLowerCase())
    )
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  
  return { score, maxScore: 8, checks };
}`,
      explanation: "This binary scoring system provides objective, actionable feedback that sellers can immediately understand and implement. Each check represents a proven Amazon optimization factor."
    },
    {
      title: "Amazon Scraper with Rate Limiting",
      description: "Custom regex-based scraper that extracts product data from Amazon UK with built-in rate limiting.",
      language: "typescript",
      code: `async function scrapeAmazonProduct(asin: string): Promise<AmazonProduct> {
  // Rate limiting check
  const canScrape = await checkRateLimit(asin);
  if (!canScrape) {
    throw new Error('Rate limit exceeded');
  }
  
  const url = \`https://www.amazon.co.uk/dp/\${asin}\`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; E-CTRL-Bot/1.0)',
      'Accept': 'text/html,application/xhtml+xml',
    }
  });
  
  if (!response.ok) {
    throw new Error(\`Failed to fetch: \${response.status}\`);
  }
  
  const html = await response.text();
  
  // Extract data using regex patterns
  const brand = extractBrand(html);
  const title = extractTitle(html);
  const bullets = extractBullets(html);
  const description = extractDescription(html);
  const images = extractImages(html);
  
  return {
    asin,
    brand,
    title,
    bullets,
    description,
    images,
    mainImage: images[0] || null,
    scrapedAt: new Date().toISOString()
  };
}`,
      explanation: "This scraper uses regex patterns instead of AI parsing for better reliability and speed. It includes rate limiting to prevent abuse while ensuring real users can access the service."
    },
    {
      title: "PDF Generation with jsPDF",
      description: "Serverless-compatible PDF generation that creates professional audit reports.",
      language: "typescript",
      code: `import jsPDF from 'jspdf';

function generateAuditPDF(audit: AuditResult, userType: 'guest' | 'account'): string {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(41, 106, 255); // Signal blue
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('E-CTRL AUDIT REPORT', 20, 25);
  
  // Score section
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(\`IDQ Score: \${audit.idq.score}/\${audit.idq.maxScore}\`, 20, 60);
  
  // Progress bar
  const scoreWidth = (audit.idq.score / audit.idq.maxScore) * 150;
  doc.setFillColor(41, 106, 255);
  doc.rect(20, 70, scoreWidth, 8, 'F');
  
  // Highlights (limited for guests)
  const highlights = userType === 'account' 
    ? audit.highlights 
    : audit.highlights.slice(0, 3);
    
  highlights.forEach((highlight, index) => {
    const y = 100 + (index * 20);
    doc.setFontSize(12);
    doc.text(\`• \${highlight}\`, 20, y);
  });
  
  // Footer with CTA
  if (userType === 'guest') {
    doc.setFillColor(255, 125, 43); // Signal orange
    doc.rect(0, 250, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text('Get the full report + consultation booking', 20, 270);
  }
  
  return doc.output('datauristring');
}`,
      explanation: "This PDF generator creates professional reports that increase perceived value. Guest users get limited content with upgrade incentives, while account users receive comprehensive reports."
    }
  ]
};

// ALIRA Case Study Detailed Data
export const aliraCaseStudy = {
  slug: "alira",
  title: "ALIRA",
  tagline: "AI-powered business case generator that converts prospects into clients",
  hero: {
    metrics: ["4-week development", "Automated lead generation", "99%+ email delivery", "Professional PDF reports"],
    techStack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Resend", "jsPDF"],
    liveDemo: "https://alirapartners.co.uk"
  },
  executiveSummary: {
    problem: "ALIRA needed a sophisticated lead generation system that could instantly provide value to potential clients before requiring multiple meetings. Traditional consultancy approach required extensive upfront investment without demonstrating value, limiting scalability and client acquisition.",
    solution: "Built an AI-powered business case generator with a multi-step form wizard that delivers professional 10-page PDF reports instantly. The system provides immediate value while capturing qualified leads and positioning ALIRA as a systematic, results-driven consultancy.",
    businessModel: "Value-first lead generation → Multi-step form collection → AI business analysis → Professional PDF delivery → Email follow-up with consultation booking. The system generates qualified leads by providing genuine business insights upfront, then converts through professional deliverables."
  },
  technicalArchitecture: {
    frontend: [
      { name: "Next.js 14", description: "App Router for optimal performance and SEO" },
      { name: "TypeScript", description: "Strict mode for type safety and better DX" },
      { name: "Tailwind CSS", description: "Custom ALIRA design system with premium styling" },
      { name: "Framer Motion", description: "Smooth animations and micro-interactions" }
    ],
    backend: [
      { name: "API Routes", description: "Multi-step form handling and AI integration" },
      { name: "OpenAI GPT-4o-mini", description: "Cost-effective AI analysis with British English output" },
      { name: "Supabase", description: "PostgreSQL database with real-time capabilities" },
      { name: "Resend API", description: "Professional email delivery with PDF attachments" }
    ],
    integrations: [
      { name: "Multi-step Form", description: "4-step wizard with draft saving and validation" },
      { name: "AI Business Analysis", description: "Universal business case generation for any industry" },
      { name: "PDF Generation", description: "10-page professional reports with ALIRA branding" },
      { name: "Email Automation", description: "HTML templates with Calendly booking integration" }
    ]
  },
  businessStrategy: {
    funnel: [
      { step: "1", title: "Landing", description: "Hero section with value proposition and mini form" },
      { step: "2", title: "Mini Form", description: "Name, email, business idea for initial capture" },
      { step: "3", title: "Full Wizard", description: "4-step detailed form with draft saving" },
      { step: "4", title: "AI Analysis", description: "Real-time business case generation" },
      { step: "5", title: "PDF Creation", description: "Professional 10-page business plan" },
      { step: "6", title: "Email Delivery", description: "HTML email with PDF attachment" },
      { step: "7", title: "Follow-up", description: "Calendly booking for consultation" }
    ],
    metrics: [
      { metric: "Automated", label: "Lead Generation" },
      { metric: "99%+", label: "Email Delivery" },
      { metric: "10-page", label: "PDF Reports" },
      { metric: "4-step", label: "Form Wizard" }
    ]
  },
  developmentProcess: {
    timeline: [
      { phase: "Week 1", description: "Multi-step form wizard with validation and draft saving" },
      { phase: "Week 2", description: "AI integration with OpenAI GPT-4o-mini and structured prompts" },
      { phase: "Week 3", description: "PDF generation with jsPDF and ALIRA branding" },
      { phase: "Week 4", description: "Email system with Resend API and professional templates" }
    ],
    challenges: [
      { challenge: "AI Prompt Engineering", solution: "Developed universal prompts that work for any business type while maintaining ALIRA brand voice" },
      { challenge: "PDF Generation", solution: "Used jsPDF with careful layout management for professional 10-page reports" },
      { challenge: "Form UX", solution: "Implemented draft saving and progressive disclosure to improve completion rates" },
      { challenge: "Email Delivery", solution: "Used Resend API with proper HTML templates and PDF attachments" }
    ]
  },
  results: {
    development: [
      { metric: "Multi-step", label: "Form Wizard" },
      { metric: "AI-powered", label: "Analysis" },
      { metric: "10-page", label: "PDF Reports" },
      { metric: "4-week", label: "Development" }
    ],
    performance: [
      { metric: "99%+", label: "Email Delivery" },
      { metric: "2-3s", label: "PDF Generation" },
      { metric: "Mobile", label: "Responsive" },
      { metric: "Real-time", label: "Processing" }
    ],
    business: [
      { metric: "Auto", label: "Lead Generation" },
      { metric: "Pro", label: "Brand Presentation" },
      { metric: "Scale", label: "System Architecture" },
      { metric: "Value", label: "First Approach" }
    ]
  },
  horizontalScrollSections: [
    {
      id: "problem-solution",
      title: "Problem & Solution",
      subtitle: "Business Challenge",
      content: "ALIRA needed to scale their consultancy approach while maintaining quality. Traditional methods required multiple meetings before delivering value, limiting scalability. The solution was an AI-powered system that provides immediate business insights while capturing qualified leads.",
      metrics: ["Multiple", "Meetings", "Limited", "Scalability"]
    },
    {
      id: "technical-architecture",
      title: "Technical Architecture",
      subtitle: "System Design",
      content: "Built a sophisticated full-stack application with Next.js 14, TypeScript, and Supabase. Features include a 4-step form wizard with draft saving, AI-powered business analysis, professional PDF generation, and automated email delivery with ALIRA branding.",
      metrics: ["Next.js 14", "TypeScript", "OpenAI GPT-4o-mini", "Supabase"]
    },
    {
      id: "ai-integration",
      title: "AI Business Analysis",
      subtitle: "Intelligent Processing",
      content: "Implemented OpenAI GPT-4o-mini for cost-effective, fast business analysis. The system generates universal business cases that work for any industry while maintaining ALIRA's brand voice and British English standards. Structured JSON output ensures consistency.",
      metrics: ["Universal", "Analysis", "British", "English"]
    },
    {
      id: "pdf-generation",
      title: "Professional PDF Reports",
      subtitle: "Brand Deliverables",
      content: "Created 10-page comprehensive business plans with dark theme and ALIRA branding. Features structured content flow, professional typography, reflection spaces for user notes, and print-ready quality that reinforces brand credibility.",
      metrics: ["10-page", "Reports", "Dark Theme", "Branding"]
    },
    {
      id: "lead-generation",
      title: "Automated Lead Generation",
      subtitle: "Conversion Strategy",
      content: "Implemented a value-first approach that provides immediate business insights through professional PDF reports. The system generates qualified leads by proving expertise before asking for commitment, with seamless email delivery and consultation booking integration.",
      metrics: ["Value-first", "Approach", "99%+", "Delivery"]
    }
  ],
  lessonsLearned: {
    whatWorked: [
      "Multi-step forms with draft saving significantly improved completion rates",
      "AI prompts designed for universal business analysis worked across all industries",
      "Professional PDF reports reinforced brand credibility and increased perceived value",
      "Value-first approach generated higher quality leads than traditional methods"
    ],
    improvements: [
      "Add more industry-specific analysis templates for specialized sectors",
      "Implement client portal for ongoing engagement and project management",
      "Build retainer workflows for long-term client relationships",
      "Add analytics dashboard for conversion optimization"
    ],
    surprises: [
      "GPT-4o-mini provided excellent quality at significantly lower cost than expected",
      "Professional PDF presentation had greater impact on brand perception than anticipated",
      "Draft saving feature dramatically improved form completion rates",
      "Universal business analysis approach worked better than industry-specific templates"
    ]
  },
  codeHighlights: [
    {
      title: "Multi-Step Form Wizard",
      description: "Sophisticated form system with draft saving, validation, and progressive disclosure.",
      language: "typescript",
      code: `const wizardFormSchema = z.object({
  business_idea: z.string().min(10, "Business idea must be at least 10 characters"),
  current_challenges: z.string().min(10, "Please describe your current challenges"),
  immediate_goals: z.string().min(10, "Please describe your immediate goals"),
  service_interest: z.array(z.string()).min(1, "Please select at least one service"),
  consent: z.boolean().refine(val => val === true, "You must agree to the terms")
});

export default function WizardForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<WizardFormData>>({});
  const [resumeToken, setResumeToken] = useState<string | null>(null);
  
  const saveDraft = useCallback(async (data: Partial<WizardFormData>) => {
    const token = resumeToken || generateResumeToken();
    await fetch('/api/draft/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, data })
    });
    setResumeToken(token);
  }, [resumeToken]);
  
  const handleStepChange = useCallback((step: number) => {
    if (step > currentStep) {
      // Validate current step before proceeding
      const currentStepData = getStepData(currentStep, formData);
      const validation = validateStep(currentStep, currentStepData);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }
    }
    setCurrentStep(step);
    saveDraft(formData);
  }, [currentStep, formData, saveDraft]);`,
      explanation: "This multi-step form system provides excellent UX with draft saving, progressive validation, and smooth navigation between steps. Users can resume their progress later, significantly improving completion rates."
    },
    {
      title: "AI Business Analysis Generation",
      description: "Universal business case generation using OpenAI GPT-4o-mini with structured prompts.",
      language: "typescript",
      code: `const BUSINESS_CASE_PROMPT = \`
You are ALIRA's senior strategy consultant. Create a comprehensive business analysis that works for ANY business type.

Business Idea: \${businessIdea}
Current Challenges: \${currentChallenges}
Immediate Goals: \${immediateGoals}

Generate a structured business case in British English that includes:

1. PROBLEM STATEMENT: Clear articulation of the core business challenge
2. STRATEGIC OBJECTIVES: 3-5 specific, measurable goals
3. RECOMMENDED SOLUTIONS: Practical, actionable strategies
4. EXPECTED OUTCOMES: Quantifiable results and impact
5. IMPLEMENTATION ROADMAP: Step-by-step action plan

Maintain ALIRA's professional, systematic approach. Focus on clarity, discipline, and results.
\`;

export async function generateBusinessAnalysis(formData: WizardFormData): Promise<BusinessAnalysis> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are ALIRA's senior strategy consultant. Provide structured, actionable business analysis in British English."
        },
        {
          role: "user",
          content: BUSINESS_CASE_PROMPT
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });
    
    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error('No response from OpenAI');
    
    return parseBusinessAnalysis(content);
  } catch (error) {
    console.error('AI generation failed:', error);
    throw new Error('Failed to generate business analysis');
  }
}`,
      explanation: "This AI integration uses GPT-4o-mini for cost-effective, high-quality business analysis. The universal prompt structure works for any business type while maintaining ALIRA's brand voice and British English standards."
    },
    {
      title: "Professional PDF Generation",
      description: "10-page business plan generation with ALIRA branding and dark theme.",
      language: "typescript",
      code: `export function generatePersonalPlanPDF(data: PersonalPlanPDFData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      // ALIRA Brand Colors
      const primaryBlack = '#0B0B0B';
      const accentGold = '#C9A96E';
      const secondaryBlue = '#1A2238';
      
      // Page 1: Cover
      doc.setFillColor(11, 11, 11); // Primary black
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      doc.setTextColor(201, 169, 110); // Accent gold
      doc.setFontSize(36);
      doc.setFont('helvetica', 'bold');
      doc.text('PERSONAL PLAN', pageWidth/2, 100, { align: 'center' });
      
      doc.setTextColor(253, 253, 253); // Primary white
      doc.setFontSize(18);
      doc.setFont('helvetica', 'normal');
      doc.text(\`Prepared for: \${data.name}\`, pageWidth/2, 150, { align: 'center' });
      doc.text(\`Date: \${new Date().toLocaleDateString('en-GB')}\`, pageWidth/2, 170, { align: 'center' });
      
      // Page 2: Executive Summary
      doc.addPage();
      addPageHeader(doc, 'EXECUTIVE SUMMARY');
      
      doc.setTextColor(26, 34, 56); // Secondary blue
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Problem Statement', 20, 60);
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const problemLines = doc.splitTextToSize(data.analysis.problemStatement, pageWidth - 40);
      doc.text(problemLines, 20, 75);
      
      // Add reflection space
      addReflectionSpace(doc, 120, 'Your thoughts on this problem:');
      
      // Continue for all 10 pages...
      
      const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
      resolve(pdfBuffer);
    } catch (error) {
      reject(error);
    }
  });
}`,
      explanation: "This PDF generator creates professional 10-page business plans with ALIRA branding, dark theme, and structured content flow. Includes reflection spaces for user engagement and maintains consistent typography throughout."
    }
  ]
};

// Hijama Case Study Detailed Data
export const hijamaCaseStudy = {
  slug: "hijama",
  title: "SUNNAH REVIVE CUPPING",
  tagline: "Mobile Hijama therapy service connecting Islamic healing traditions with modern healthcare",
  hero: {
    metrics: ["500+ clients served", "5+ years experience", "Mobile home visits", "North London coverage"],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://sunnahrevivecupping.co.uk"
  },
  executiveSummary: {
    problem: "Traditional Islamic healing practices like Hijama (cupping therapy) needed a modern digital presence to reach the North London Muslim community. Existing healthcare websites lacked cultural sensitivity and didn't address the spiritual aspects of Islamic healing traditions.",
    solution: "Built a culturally-sensitive, mobile-first web platform that bridges ancient Hijama therapy with modern web technology. The platform provides comprehensive education about cupping therapy while maintaining Islamic authenticity and professional healthcare standards.",
    businessModel: "Educational content → Trust building → Direct booking → Mobile home visits. The system generates qualified leads by providing genuine value through education and spiritual resources, then converts through professional service delivery and testimonials."
  },
  technicalArchitecture: {
    frontend: [
      { name: "React 18.3.1", description: "Modern component-based architecture with hooks" },
      { name: "TypeScript 5.5.3", description: "Type safety and better development experience" },
      { name: "Vite 5.4.1", description: "Fast development and optimized production builds" },
      { name: "Tailwind CSS 3.4.11", description: "Custom design system with Islamic influences" }
    ],
    backend: [
      { name: "Static Generation", description: "Pre-built pages for optimal performance" },
      { name: "Netlify Hosting", description: "Global CDN with SSL and custom domain" },
      { name: "Form Handling", description: "Contact forms with spam protection" },
      { name: "SEO Optimization", description: "Meta tags, structured data, and sitemap" }
    ],
    integrations: [
      { name: "WhatsApp Integration", description: "Direct messaging for appointment booking" },
      { name: "Phone Integration", description: "Click-to-call functionality" },
      { name: "Email Contact", description: "Professional email communication" },
      { name: "Google Maps", description: "Service area coverage visualization" }
    ]
  },
  businessStrategy: {
    funnel: [
      { step: "1", title: "Education", description: "Comprehensive information about Hijama benefits and Islamic context" },
      { step: "2", title: "Trust Building", description: "Testimonials, certifications, and professional credentials" },
      { step: "3", title: "Spiritual Connection", description: "Prophetic quotes, Duas, and Islamic healing traditions" },
      { step: "4", title: "Service Information", description: "Clear pricing, process, and safety standards" },
      { step: "5", title: "Contact Methods", description: "Multiple ways to book appointments" },
      { step: "6", title: "Mobile Visits", description: "Home service delivery across North London" }
    ],
    metrics: [
      { metric: "500+", label: "Clients Served" },
      { metric: "5+", label: "Years Experience" },
      { metric: "Mobile", label: "Home Visits" },
      { metric: "North London", label: "Service Area" }
    ]
  },
  developmentProcess: {
    timeline: [
      { phase: "Week 1-2", description: "Research and content creation for Islamic healing traditions" },
      { phase: "Week 3-4", description: "Design system with cultural sensitivity and mobile-first approach" },
      { phase: "Week 5-6", description: "Development with React, TypeScript, and Tailwind CSS" },
      { phase: "Week 7-8", description: "Content integration, SEO optimization, and deployment" }
    ],
    challenges: [
      { challenge: "Cultural Sensitivity", solution: "Worked closely with Islamic community to ensure authentic representation" },
      { challenge: "Mobile Optimization", solution: "Implemented mobile-first design with touch-friendly interfaces" },
      { challenge: "SEO for Local Services", solution: "Optimized for North London Hijama searches with local business schema" },
      { challenge: "Trust Building", solution: "Integrated testimonials, certifications, and professional credentials" }
    ]
  },
  results: {
    development: [
      { metric: "6", label: "Weeks Development" },
      { metric: "Mobile-first", label: "Design Approach" },
      { metric: "Cultural", label: "Sensitivity" },
      { metric: "SEO", label: "Optimized" }
    ],
    performance: [
      { metric: "95+", label: "Lighthouse Score" },
      { metric: "Mobile", label: "Optimized" },
      { metric: "Fast", label: "Loading" },
      { metric: "WCAG", label: "Compliant" }
    ],
    business: [
      { metric: "500+", label: "Clients Served" },
      { metric: "5+", label: "Years Experience" },
      { metric: "North London", label: "Coverage" },
      { metric: "Mobile", label: "Home Visits" }
    ]
  },
  horizontalScrollSections: [
    {
      id: "problem-solution",
      title: "Problem & Solution",
      subtitle: "Cultural Healthcare Challenge",
      content: "Traditional Islamic healing practices like Hijama needed a modern digital presence to reach the North London Muslim community. The solution was a culturally-sensitive platform that bridges ancient healing traditions with modern web technology while maintaining Islamic authenticity.",
      metrics: ["Traditional", "Healing", "Modern", "Technology", "Cultural", "Sensitivity"]
    },
    {
      id: "technical-architecture",
      title: "Technical Architecture",
      subtitle: "Modern Web Technology",
      content: "Built with React 18, TypeScript, and Vite for optimal performance. Features mobile-first responsive design, SEO optimization for local searches, and accessibility compliance. Integrated WhatsApp and phone contact methods for seamless appointment booking.",
      metrics: ["React 18", "TypeScript", "Vite", "Mobile-first"]
    },
    {
      id: "cultural-integration",
      title: "Cultural Integration",
      subtitle: "Islamic Authenticity",
      content: "Integrated Prophetic quotes about Hijama benefits, Arabic text with transliteration, Islamic geometric design elements, and spiritual Duas for healing. Maintained cultural sensitivity while presenting professional healthcare standards.",
      metrics: ["Prophetic", "Quotes", "Arabic", "Text", "Islamic", "Design"]
    },
    {
      id: "educational-content",
      title: "Educational Content",
      subtitle: "Comprehensive Information",
      content: "Created detailed blog articles covering scientific research, Islamic practices, chronic pain management, women's health, and preparation guides. Provided spiritual resources with healing Duas in Arabic, transliteration, and English translation.",
      metrics: ["6", "Blog Articles", "Scientific", "Research", "Spiritual", "Resources"]
    },
    {
      id: "business-impact",
      title: "Business Impact",
      subtitle: "Community Service",
      content: "Successfully serves 500+ clients across North London with 5+ years of experience. Provides mobile home visits for Hijama therapy, making traditional Islamic healing accessible while maintaining professional healthcare standards and cultural authenticity.",
      metrics: ["500+", "Clients", "5+", "Years", "North London", "Coverage"]
    }
  ],
  lessonsLearned: {
    whatWorked: [
      "Cultural sensitivity was crucial for community acceptance and trust",
      "Mobile-first design was essential for the target demographic",
      "Educational content significantly improved user engagement and trust",
      "Multiple contact methods (phone, WhatsApp, email) increased conversion rates"
    ],
    improvements: [
      "Add online booking system with calendar integration",
      "Implement client portal for treatment history and follow-up",
      "Create multi-language support for Arabic and other languages",
      "Build email marketing system for appointment reminders and educational content"
    ],
    surprises: [
      "Educational content had higher engagement than expected",
      "Spiritual resources (Duas) were highly valued by users",
      "Mobile optimization was more critical than anticipated",
      "Cultural authenticity was more important than modern design trends"
    ]
  },
  codeHighlights: [
    {
      title: "Prophetic Quotes Carousel",
      description: "Animated carousel displaying rotating Hadith about Hijama benefits with smooth transitions.",
      language: "typescript",
      code: `const propheticQuotes = [
  {
    text: "The best treatment you can use is Hijama",
    source: "Sahih Bukhari",
    arabic: "خير ما تداويتم به الحجامة"
  },
  {
    text: "Hijama is a cure for every disease",
    source: "Sahih Muslim", 
    arabic: "الحجامة شفاء من كل داء"
  }
];

export function PropheticQuotesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % propheticQuotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <blockquote className="text-2xl md:text-3xl font-serif text-white italic">
        "{propheticQuotes[currentIndex].text}"
      </blockquote>
      <div className="text-lg text-white/80">
        - {propheticQuotes[currentIndex].source}
      </div>
      <div className="text-xl text-white/70 font-arabic">
        {propheticQuotes[currentIndex].arabic}
      </div>
    </motion.div>
  );
}`,
      explanation: "This carousel provides authentic Islamic context for Hijama therapy, rotating through Prophetic traditions that validate the healing practice. The Arabic text adds cultural authenticity while English translation ensures accessibility."
    },
    {
      title: "Mobile-First Responsive Design",
      description: "Touch-optimized interface with Islamic design elements and cultural sensitivity.",
      language: "typescript",
      code: `export function MobileOptimizedLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Islamic Geometric Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/50 to-transparent" />
        <div className="relative z-10 px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-playfair text-white mb-4">
              Sunnah Revive Cupping
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Traditional Islamic healing brought to your home
            </p>
          </motion.div>
        </div>
      </header>
    </div>
  );
}`,
      explanation: "This mobile-first layout combines Islamic design elements with modern web technology. The geometric patterns and cultural typography create an authentic experience while maintaining excellent mobile usability."
    },
    {
      title: "Educational Content System",
      description: "Comprehensive blog system with Islamic context and scientific validation.",
      language: "typescript",
      code: `const blogArticles = [
  {
    id: "hijama-scientific-research",
    title: "Scientific Research on Cupping Therapy",
    excerpt: "Evidence-based analysis of Hijama benefits backed by clinical studies",
    category: "Science",
    readTime: "8 min",
    islamicContext: true,
    scientificValidation: true
  }
];

export function EducationalContent() {
  return (
    <section className="py-16 bg-gradient-to-b from-maroon-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-maroon-900 mb-4">
            Educational Resources
          </h2>
          <p className="text-lg text-maroon-700 max-w-3xl mx-auto">
            Comprehensive information about Hijama therapy, combining Islamic traditions with modern scientific research
          </p>
        </motion.div>
      </div>
    </section>
  );
}`,
      explanation: "This educational content system balances Islamic authenticity with scientific validation. Articles are categorized and tagged to help users find relevant information while maintaining cultural sensitivity and professional credibility."
    }
  ]
};

// NAUNAS Portfolio Case Study Detailed Data
export const naunasCaseStudy = {
  slug: "naunas",
  title: "NAUNAS PORTFOLIO",
  tagline: "Personal portfolio website showcasing web development expertise and client success stories",
  hero: {
    metrics: ["4-week development", "+91% qualified leads", "Modern design", "Mobile optimized"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveDemo: "https://naunas.co.uk"
  },
  executiveSummary: {
    problem: "Professional portfolio needed a modern, conversion-optimized design to showcase web development expertise and convert visitors into qualified leads. The existing portfolio lacked interactive elements, case study depth, and mobile optimization.",
    solution: "Built a cutting-edge portfolio website with interactive case studies, smooth animations, and conversion-optimized design. Features include horizontal-scrolling case studies, mobile-first responsive design, and strategic lead generation elements.",
    businessModel: "Showcase expertise → Build trust through case studies → Demonstrate technical skills → Convert visitors to leads. The portfolio serves as both a professional showcase and a lead generation tool for web development services."
  },
  technicalArchitecture: {
    frontend: [
      { name: "Next.js 14", description: "App Router for optimal performance and SEO" },
      { name: "TypeScript", description: "Type safety and better development experience" },
      { name: "Tailwind CSS", description: "Custom design system with utility-first approach" },
      { name: "Framer Motion", description: "Smooth animations and micro-interactions" }
    ],
    backend: [
      { name: "Static Generation", description: "Pre-built pages for optimal performance" },
      { name: "Vercel Hosting", description: "Global CDN with automatic deployments" },
      { name: "Git Integration", description: "Automatic deployments from GitHub" },
      { name: "SEO Optimization", description: "Meta tags, structured data, and sitemap" }
    ],
    integrations: [
      { name: "Case Study System", description: "Interactive horizontal-scrolling case studies" },
      { name: "Animation System", description: "Custom hooks for scroll-based animations" },
      { name: "Responsive Design", description: "Mobile-first approach with touch optimization" },
      { name: "Performance Monitoring", description: "Lighthouse optimization and Core Web Vitals" }
    ]
  },
  businessStrategy: {
    funnel: [
      { step: "1", title: "Landing", description: "Hero section with clear value proposition and rotating stats" },
      { step: "2", title: "Case Studies", description: "Interactive case studies showcasing expertise" },
      { step: "3", title: "Skills", description: "Technical stack and capabilities demonstration" },
      { step: "4", title: "About", description: "Personal story and professional background" },
      { step: "5", title: "Contact", description: "Multiple ways to get in touch and start projects" },
      { step: "6", title: "Conversion", description: "Clear CTAs and lead generation elements" }
    ],
    metrics: [
      { metric: "+91%", label: "Qualified Leads" },
      { metric: "Modern", label: "Design" },
      { metric: "Interactive", label: "Case Studies" },
      { metric: "Mobile", label: "Optimized" }
    ]
  },
  developmentProcess: {
    timeline: [
      { phase: "Week 1", description: "Design system and component architecture planning" },
      { phase: "Week 2", description: "Core components and layout development" },
      { phase: "Week 3", description: "Case study system and animations implementation" },
      { phase: "Week 4", description: "Mobile optimization, performance tuning, and deployment" }
    ],
    challenges: [
      { challenge: "Mobile Optimization", solution: "Implemented mobile-first design with touch-friendly interactions" },
      { challenge: "Animation Performance", solution: "Used Framer Motion with optimized animations and reduced motion support" },
      { challenge: "Case Study Navigation", solution: "Created horizontal-scrolling system with smooth transitions" },
      { challenge: "Lead Generation", solution: "Integrated strategic CTAs and contact methods throughout the site" }
    ]
  },
  results: {
    development: [
      { metric: "4", label: "Weeks Development" },
      { metric: "Modern", label: "Design System" },
      { metric: "Interactive", label: "Case Studies" },
      { metric: "Mobile-first", label: "Approach" }
    ],
    performance: [
      { metric: "98+", label: "Lighthouse Score" },
      { metric: "Fast", label: "Loading" },
      { metric: "Smooth", label: "Animations" },
      { metric: "WCAG", label: "Compliant" }
    ],
    business: [
      { metric: "+91%", label: "Qualified Leads" },
      { metric: "Modern", label: "Portfolio" },
      { metric: "Smooth", label: "Experience" },
      { metric: "Mobile", label: "Optimized" }
    ]
  },
  horizontalScrollSections: [
    {
      id: "problem-solution",
      title: "Problem & Solution",
      subtitle: "Portfolio Challenge",
      content: "Professional portfolio needed a modern, conversion-optimized design to showcase web development expertise and convert visitors into qualified leads. The solution was a cutting-edge website with interactive case studies, smooth animations, and strategic lead generation elements.",
      metrics: ["Professional", "Portfolio", "Modern", "Design", "Interactive", "Case Studies"]
    },
    {
      id: "technical-architecture",
      title: "Technical Architecture",
      subtitle: "Modern Web Technology",
      content: "Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance. Features include App Router, static generation, Framer Motion animations, and mobile-first responsive design. Deployed on Vercel with automatic deployments and global CDN.",
      metrics: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      id: "case-study-system",
      title: "Interactive Case Studies",
      subtitle: "Showcase Expertise",
      content: "Developed a horizontal-scrolling case study system that allows visitors to explore detailed project information. Features include smooth animations, mobile optimization, and comprehensive project breakdowns with technical details and business impact.",
      metrics: ["Horizontal", "Scrolling", "Interactive", "Experience", "Mobile", "Optimized"]
    },
    {
      id: "animation-system",
      title: "Animation System",
      subtitle: "Smooth Interactions",
      content: "Implemented custom animation hooks using Framer Motion for scroll-based animations, hover effects, and micro-interactions. Includes reduced motion support for accessibility and performance optimization for smooth 60fps animations.",
      metrics: ["Framer", "Motion", "Scroll-based", "Animations", "60fps", "Performance"]
    },
    {
      id: "business-impact",
      title: "Business Impact",
      subtitle: "Lead Generation",
      content: "Successfully increased qualified leads by 91% through modern design, interactive case studies, and strategic conversion optimization. The portfolio serves as both a professional showcase and an effective lead generation tool for web development services.",
      metrics: ["+91%", "Qualified Leads", "Modern", "Design", "Interactive", "Experience"]
    }
  ],
  lessonsLearned: {
    whatWorked: [
      "Interactive case studies significantly increased engagement and time on site",
      "Mobile-first design was crucial for the target audience",
      "Smooth animations improved perceived quality and professionalism",
      "Strategic CTAs and lead generation elements increased conversion rates"
    ],
    improvements: [
      "Add client testimonials and video case studies",
      "Implement blog system for thought leadership content",
      "Create client portal for project management",
      "Build email marketing integration for lead nurturing"
    ],
    surprises: [
      "Animation performance was better than expected on mobile devices",
      "Horizontal scrolling case studies had higher engagement than anticipated",
      "Mobile optimization was more critical than desktop for lead generation",
      "Interactive elements significantly improved time on site and bounce rate"
    ]
  },
  codeHighlights: [
    {
      title: "Horizontal Case Study System",
      description: "Interactive horizontal-scrolling case study component with smooth transitions and mobile optimization.",
      language: "typescript",
      code: `export default function HorizontalCaseStudy({ caseStudy, detailedData }: HorizontalCaseStudyProps) {
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
    </>
  );
}`,
      explanation: "This horizontal case study system provides an immersive experience on desktop with smooth horizontal scrolling, while automatically switching to vertical layout on mobile for optimal usability."
    },
    {
      title: "Custom Animation Hooks",
      description: "Reusable animation hooks for scroll-based animations and performance optimization.",
      language: "typescript",
      code: `export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
}

export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduce(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reduce;
}`,
      explanation: "These custom hooks provide reusable animation logic with accessibility support for reduced motion preferences and performance optimization for smooth animations."
    },
    {
      title: "Mobile-First Responsive Design",
      description: "Comprehensive mobile optimization with touch-friendly interactions and performance optimization.",
      language: "typescript",
      code: `export function MobileOptimizedLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-ink">
      {/* Mobile Navigation */}
      {isMobile && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-white/10"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-white font-display text-lg">NAUNAS</h1>
            <button className="text-white/80 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </motion.nav>
      )}

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h1 className="headline-xl md:headline-2xl text-white">
              Web Development
              <br />
              <span className="text-signal">Expert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Building modern, conversion-optimized websites that drive business growth
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}`,
      explanation: "This mobile-first layout provides optimal user experience across all devices with touch-friendly interactions, performance optimization, and responsive design patterns."
    }
  ]
};

