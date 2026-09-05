export const profile = {
  name: "Junaid Ur Rehman",
  email: "junaidhashim520@gmail.com",
  location: "Multan, Punjab, Pakistan",
  phone: "+923251099491",
  socials: {
    fiverr: "https://www.fiverr.com/junaidurrehman4?public_mode=true",
    upwork: "https://www.upwork.com/freelancers/~019a8638129a6efec8?viewMode=1",
    facebook: "https://www.facebook.com/junaid.ur.rehman.hashim",
    youtube: "https://www.youtube.com/@Junaid-Ur-Rehman-91",
    tiktok: "https://www.tiktok.com/@junaid99491",
    instagram: "https://www.instagram.com/do.creative491/",
    linkedin: "https://www.linkedin.com/in/junaid-ur-rehman-09352b3b8/",
  },
};

export const projects = [
  {
    index: "01",
    category: "AI AUTOMATION / WHATSAPP",
    title: "AI WHATSAPP ASSISTANT",
    description:
      "A production-minded WhatsApp workflow that receives and normalizes messages, blocks duplicates, adds business context, prepares a safe AI prompt, validates the response, sends the reply, and updates the message log.",
    tags: ["WhatsApp API", "OpenAI", "Webhooks", "Validation", "Message Logs"],
    image: "/images/ai-whatsapp-automation.webp",
    visual: "automation",
    href: "/projects/ai-automation",
    outcome: "INCOMING MESSAGE TO VERIFIED AI REPLY",
  },
  {
    index: "02",
    category: "WEBSITE DEVELOPMENT / EXPERIENCE",
    title: "WEBSITE PORTFOLIO",
    description:
      "Four responsive website experiences created for personal branding, online learning, real estate, and fitness—each shaped around its audience, visual identity, and primary conversion goal.",
    tags: ["Next.js", "React", "Responsive UI", "SEO", "Performance"],
    image: null,
    visual: "website",
    href: "/projects/website-development",
    outcome: "04 WEBSITES / DESIGN & DEVELOPMENT",
    gallery: [
      { title: "JUNAID UR REHMAN PORTFOLIO", image: "/images/project-personal-portfolio.webp", position: "50% 25%" },
      { title: "AUTOMOTIVE COURSE WEBSITE", image: "/images/project-automotive-courses.webp", position: "50% 35%" },
      { title: "PRIME HOME REAL ESTATE", image: "/images/project-prime-home.webp", position: "50% 40%" },
      { title: "FITNESS ARENA GYM", image: "/images/project-fitness-arena.webp", position: "50% 35%" },
    ],
  },
  {
    index: "03",
    category: "DIGITAL MARKETING / GROWTH",
    title: "CAMPAIGN GROWTH SYSTEM",
    description:
      "A practical campaign framework connecting audience research, creative testing, landing-page messaging, lead capture, and performance reporting into one repeatable growth loop.",
    tags: ["Meta Ads", "Strategy", "Lead Generation", "Analytics", "Reporting"],
    image: null,
    visual: "marketing",
    href: "/projects/digital-marketing",
    generatedImage: "/images/project-digital-marketing-real.jpg",
    outcome: "RESEARCH TO REPORTING",
  },
  {
    index: "04",
    category: "CONTENT CREATION / SOCIAL",
    title: "CONTENT ENGINE",
    description:
      "A multi-format content system that turns one core idea into platform-ready scripts, carousels, short-form videos, captions, and a consistent publishing plan.",
    tags: ["Content Strategy", "Short-form Video", "Copywriting", "Canva", "Social Media"],
    image: null,
    visual: "content",
    href: "/projects/content-creation",
    generatedImage: "/images/project-content-creation-real.jpg",
    outcome: "IDEA TO MULTI-CHANNEL CONTENT",
  },
];

export const disciplines = [
  {
    number: "01",
    title: "AI AUTOMATION",
    copy: "Smart workflows that handle repetitive tasks, respond to customers, connect business tools, and keep every action organized and traceable.",
    tags: ["OpenAI", "WhatsApp", "Webhooks", "n8n", "AI Agents"],
    image: "/images/ai-whatsapp-automation.png",
    href: "/projects/ai-automation",
  },
  {
    number: "02",
    title: "DIGITAL MARKETING",
    copy: "Audience research, campaign strategy, creative testing, lead generation, and reporting combined into a practical growth system.",
    tags: ["Meta Ads", "Strategy", "Campaigns", "Analytics", "Leads"],
    image: "/images/project-digital-marketing-real.jpg",
    href: "/projects/digital-marketing",
  },
  {
    number: "03",
    title: "WEBSITE DEVELOPMENT",
    copy: "Responsive, fast, and focused websites designed around strong branding, clear user journeys, and direct business conversion goals.",
    tags: ["Next.js", "React", "Responsive UI", "SEO", "Performance"],
    image: "/images/project-prime-home.png",
    href: "/projects/website-development",
  },
  {
    number: "04",
    title: "CONTENT CREATION",
    copy: "Content systems that transform one strong idea into videos, carousels, captions, visuals, and a consistent publishing plan.",
    tags: ["Strategy", "Video", "Copywriting", "Canva", "Social Media"],
    image: "/images/project-content-creation-real.jpg",
    href: "/projects/content-creation",
  },
];

export const experience = [
  {
    year: "NOW",
    role: "AI AUTOMATION & DIGITAL SOLUTIONS",
    company: "Independent / Client Systems",
    text: "Designing AI agents, messaging automations, data pipelines, lead systems, and full-stack tools that remove repetitive work and connect business operations.",
  },
  {
    year: "07+ YRS",
    role: "OPERATIONS & LOGISTICS",
    company: "Professional Operations Experience",
    text: "Hands-on experience coordinating inventory, inbound/outbound movement, reconciliations, purchasing, reporting, and process discipline — a practical foundation for automation work.",
  },
  {
    year: "BUILDING",
    role: "PRODUCT & SYSTEM THINKING",
    company: "Web / Mobile / Automation",
    text: "Combining development, workflow design, and business understanding to create systems that are visually strong, measurable, and maintainable.",
  },
];

export const stats = [
  ["07+", "YEARS OPERATIONS EXPERIENCE"],
  ["04", "CORE DIGITAL SERVICES"],
  ["AI", "AUTOMATION-LED THINKING"],
  ["360°", "IDEA TO EXECUTION"],
] as const;
