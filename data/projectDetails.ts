export type WebsiteCase = {
  title: string;
  type: string;
  image: string;
  summary: string;
  features: string[];
};

export type ProjectDetail = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  overview: string;
  challenge: string;
  solution: string;
  tools: string[];
  deliverables: string[];
  process: { number: string; title: string; copy: string }[];
  websites?: WebsiteCase[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "ai-automation",
    number: "01",
    title: "AI AUTOMATION",
    eyebrow: "WHATSAPP / AI / WORKFLOW SYSTEM",
    summary: "A structured WhatsApp assistant that turns every incoming customer message into a validated, contextual, and logged AI response.",
    image: "/images/ai-whatsapp-automation.png",
    imageAlt: "WhatsApp AI automation workflow showing validation, business context, AI response, and message logging",
    overview: "This workflow is designed as an operational system rather than a simple chatbot. It normalizes incoming messages, rejects unsupported events, prevents duplicate processing, adds business context, prepares the AI input, validates the reply, and records the final action.",
    challenge: "Customer messages arrive at any time and often require repetitive answers. A useful automated assistant must respond quickly without processing the same event twice, replying to invalid messages, or losing the conversation history.",
    solution: "A staged automation pipeline separates reception, validation, context, generation, delivery, and logging. Each stage has one clear responsibility, making the system easier to test, monitor, and improve.",
    tools: ["WhatsApp API", "OpenAI", "Webhooks", "JavaScript", "Data Tables"],
    deliverables: ["Incoming-message webhook", "Duplicate-message protection", "Business-context layer", "Validated AI reply", "Message activity log", "Human-ready workflow structure"],
    process: [
      { number: "01", title: "RECEIVE", copy: "Capture and normalize the incoming WhatsApp payload into a consistent message format." },
      { number: "02", title: "VALIDATE", copy: "Reject invalid events and prevent a previously processed message from running twice." },
      { number: "03", title: "ENRICH", copy: "Add the business rules and context the model needs before generating a response." },
      { number: "04", title: "RESPOND", copy: "Validate the AI output, deliver it through WhatsApp, and update the message log." },
    ],
  },
  {
    slug: "digital-marketing",
    number: "02",
    title: "DIGITAL MARKETING",
    eyebrow: "STRATEGY / CAMPAIGNS / ANALYTICS",
    summary: "A practical growth framework connecting the right audience, clear messaging, campaign creative, lead capture, and useful reporting.",
    image: "/images/project-digital-marketing-real.jpg",
    imageAlt: "Marketing professional reviewing printed campaign analytics beside a laptop",
    overview: "Digital marketing works best when strategy and measurement are connected. This service brings audience research, campaign structure, creative direction, landing-page messaging, and reporting into one repeatable system.",
    challenge: "Publishing ads without a clear audience, message, conversion path, or measurement plan creates activity but very little useful learning. The challenge is building a campaign that reveals what actually moves prospects.",
    solution: "Start with the offer and audience, create focused message angles, test creative variations, connect every campaign to a clear destination, and review meaningful signals to guide the next iteration.",
    tools: ["Meta Ads", "Audience Research", "Content Strategy", "Lead Forms", "Analytics"],
    deliverables: ["Audience and offer definition", "Campaign structure", "Creative direction", "Landing-page messaging", "Lead-generation flow", "Performance reporting framework"],
    process: [
      { number: "01", title: "RESEARCH", copy: "Clarify the audience, problem, offer, competition, and strongest message angles." },
      { number: "02", title: "CREATE", copy: "Develop campaign concepts and creative variations matched to customer intent." },
      { number: "03", title: "LAUNCH", copy: "Connect ads, landing experiences, lead capture, and tracking into one journey." },
      { number: "04", title: "IMPROVE", copy: "Read the signals, document learning, and refine targeting, creative, and messaging." },
    ],
  },
  {
    slug: "website-development",
    number: "03",
    title: "WEBSITE DEVELOPMENT",
    eyebrow: "DESIGN / DEVELOPMENT / RESPONSIVE EXPERIENCE",
    summary: "Four distinct website experiences built for personal branding, automotive learning, real estate, and fitness businesses.",
    image: "/images/project-personal-portfolio.png",
    imageAlt: "Junaid Ur Rehman personal portfolio website homepage",
    overview: "Each website is designed around a different audience and business goal. The visual identity changes, but the fundamentals remain consistent: clear hierarchy, responsive behavior, direct navigation, and strong calls to action.",
    challenge: "A business website must do more than look polished. Visitors need to understand the offer quickly, find the right information, trust the brand, and know what action to take next on any screen size.",
    solution: "Translate each brand into a focused page system, organize content around user intent, build responsive layouts, and position conversion actions where they naturally support the visitor journey.",
    tools: ["Next.js", "React", "HTML", "CSS", "Responsive Design"],
    deliverables: ["Information architecture", "Responsive page layouts", "Custom visual direction", "Conversion-focused calls to action", "Service and contact sections", "Performance-ready frontend"],
    process: [
      { number: "01", title: "DISCOVER", copy: "Define the audience, business goal, required pages, content, and primary action." },
      { number: "02", title: "DESIGN", copy: "Create the hierarchy, visual direction, page flow, and responsive interface system." },
      { number: "03", title: "DEVELOP", copy: "Build reusable components and ensure the experience works across screen sizes." },
      { number: "04", title: "REFINE", copy: "Review content, responsiveness, accessibility, performance, and conversion paths." },
    ],
    websites: [
      { title: "JUNAID UR REHMAN PORTFOLIO", type: "PERSONAL BRAND PORTFOLIO", image: "/images/project-personal-portfolio.png", summary: "A modern portfolio presenting automation, web development, services, skills, résumé, and direct contact options within a confident personal brand.", features: ["Service-led hero", "Personal brand identity", "Portfolio navigation", "WhatsApp contact path"] },
      { title: "AUTOMOTIVE COURSE WEBSITE", type: "ONLINE LEARNING EXPERIENCE", image: "/images/project-automotive-courses.png", summary: "An automotive learning landing experience using a strong vehicle-led hero, simple course discovery, and prominent enrollment actions.", features: ["Course discovery", "Automotive visual direction", "Clear navigation", "Enrollment call to action"] },
      { title: "PRIME HOME REAL ESTATE", type: "PROPERTY DISCOVERY WEBSITE", image: "/images/project-prime-home.png", summary: "A property platform combining an aspirational real-estate hero with location, property-type, and price filters for faster discovery.", features: ["Property search filters", "Listing navigation", "Agent contact path", "List-property action"] },
      { title: "FITNESS ARENA GYM", type: "LOCAL FITNESS WEBSITE", image: "/images/project-fitness-arena.png", summary: "A high-energy gym website connecting the brand promise with memberships, services, trainers, schedules, gallery content, and WhatsApp enquiries.", features: ["Membership journey", "Trainer and schedule sections", "Location details", "WhatsApp conversion"] },
    ],
  },
  {
    slug: "content-creation",
    number: "04",
    title: "CONTENT CREATION",
    eyebrow: "IDEAS / PRODUCTION / DISTRIBUTION",
    summary: "A repeatable content system for turning one strong idea into useful video, carousel, visual, and written formats.",
    image: "/images/project-content-creation-real.jpg",
    imageAlt: "Real content editing workspace with camera equipment and photo-editing software",
    overview: "Consistent content is easier when every post is not created from zero. This approach starts with useful themes and builds a repeatable path from research and scripting through production, repurposing, and publishing.",
    challenge: "Businesses often have valuable knowledge but no reliable system for packaging it. Ideas become scattered posts, production takes too long, and the brand voice changes from one platform to another.",
    solution: "Build around a small set of content pillars, define repeatable formats, capture efficiently, and repurpose each core idea for the channels where the audience already spends time.",
    tools: ["Content Strategy", "Copywriting", "Canva", "Short-form Video", "Social Media"],
    deliverables: ["Content pillars", "Topic and hook bank", "Short-form scripts", "Carousel structure", "Caption framework", "Publishing calendar"],
    process: [
      { number: "01", title: "PLAN", copy: "Choose content pillars, audience questions, business priorities, and useful formats." },
      { number: "02", title: "SCRIPT", copy: "Shape each idea into a clear hook, useful body, and natural next action." },
      { number: "03", title: "PRODUCE", copy: "Create the core video, visual, or written asset with consistent brand direction." },
      { number: "04", title: "REPURPOSE", copy: "Adapt the core asset into channel-ready posts and organize the publishing plan." },
    ],
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
