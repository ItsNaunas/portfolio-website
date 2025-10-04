export const rotatingStats = [
  { line1: "+82%", line2: "LEADS" },
  { line1: "7-DAY", line2: "DELIVERY" },
  { line1: "25+", line2: "PROJECTS" },
];

export const marqueeLogos = [
  "/logos/client1.svg",
  "/logos/client2.svg",
  "/logos/client3.svg",
  "/logos/client4.svg",
];

export const offerBullets = [
  "CRO-focused websites",
  "AI lead gen marketing campaign",
  "AI automations & chatbots",
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
    title: "HIJAMA",
    image: "/case-study-mockups/case study 3/hijama-case1.png",
    problem: "Confusing value proposition.",
    solution: "Simplified messaging, added demo CTA.",
    result: "+58% demo bookings",
  },
  {
    slug: "naunas",
    title: "NAUNAS",
    image: "/case-study-mockups/case study 4/naunas-case1.png",
    problem: "Professional but boring site.",
    solution: "Modern redesign with case study highlights.",
    result: "+91% qualified leads",
  },
];

export const mainCaseHighlight = {
  title: "CONSULTANT AGENCIES",
  problem: "Site wasn't converting",
  solution: "Site wasn't converting",
  result: "+82% LEADS",
  image: "/screenshots/main-case.jpg",
  videoThumb: "/screenshots/video-thumb.jpg",
};

export const stats = [
  { metric: "+42%", label: "CONVERSION LIFT" },
  { metric: "7", label: "DAY DELIVERY TIME" },
  { metric: "25+", label: "PROJECTS COMPLETED" },
];

export const processSteps = [
  "AUDIT",
  "DESIGN",
  "BUILD",
  "OPTIMISE",
];

export const tech = [
  { name: "Next.js", icon: "/logos/tech/nextdotjs.svg" },
  { name: "Tailwind", icon: "/logos/tech/tailwindcss.svg" },
  { name: "Supabase", icon: "/logos/tech/supabase.svg" },
  { name: "Vercel", icon: "/logos/tech/vercel.svg" },
  { name: "Docker", icon: "/logos/tech/docker.svg" },
  { name: "n8n", icon: "/logos/tech/n8n.svg" },
  { name: "Stripe", icon: "/logos/tech/stripe.svg" },
  { name: "OpenAI", icon: "/logos/tech/openai.svg" },
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

