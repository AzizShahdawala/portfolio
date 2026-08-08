export const me = {
  name: "Aziz Shahdawala",
  role: "Full-Stack Developer",
  headline: "I build reliable digital products from interface to infrastructure.",
  summary: "Full-stack engineer with 6+ years of experience shipping commerce, enterprise, and data-driven products. I turn complex workflows into fast, maintainable experiences across React, Java, Spring Boot, Angular, Flutter, and SAP Commerce Cloud.",
  location: "Mumbai, India",
  email: "azizshada@gmail.com",
  phone: "+91 8097386483",
  linkedin: "https://www.linkedin.com/in/azizshahda",
  github: "https://github.com/AzizShahdawala",
};

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Angular", "TypeScript", "Flutter", "Responsive UI", "Accessibility"] },
  { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "PostgreSQL", "MongoDB"] },
  { title: "Platforms", skills: ["SAP Commerce Cloud", "SAP Hybris", "Jenkins", "GitHub Actions", "Docker", "CI/CD"] },
];

export const projects = [
  {
    title: "Saifee Rovers Operations Platform",
    type: "Community operations platform",
    year: "2026",
    desc: "A responsive administration and member experience for attendance, events, member management, analytics, and camera-assisted check-ins, designed for real community operations.",
    stack: ["React", "Material UI", "REST APIs", "Analytics"],
    repo: "https://github.com/AzizShahdawala/saifee-rovers-app",
    live: "https://azizshahdawala.github.io/saifee-rovers-app/",
  },
  { title: "ReviewPilot", type: "AI-assisted developer tooling", year: "2026", desc: "An explainable, privacy-first code review workbench that identifies security, reliability, and maintainability risks locally in the browser, with severity scoring and actionable remediation.", stack: ["React", "TypeScript", "Static Analysis", "Developer Experience"], repo: "https://github.com/AzizShahdawala/reviewpilot-lab", live: "https://reviewpilot-lab.vercel.app" },
  { title: "TraceForge", type: "Observability engineering", year: "2026", desc: "An interactive incident-response simulator with live golden signals, service topology, SLO error budgets, correlated event timelines, failure injection, and guided remediation.", stack: ["React", "TypeScript", "Observability", "SRE"], repo: "https://github.com/AzizShahdawala/traceforge", live: "https://traceforge-hazel.vercel.app" },
  { title: "ArchCanvas", type: "System design tooling", year: "2026", desc: "A capacity-planning studio that converts product assumptions into peak throughput, storage, network, availability, and infrastructure recommendations through a live architecture model.", stack: ["React", "TypeScript", "System Design", "Capacity Planning"], repo: "https://github.com/AzizShahdawala/archcanvas", live: "https://archcanvas.vercel.app" },
  {
    title: "Enterprise Commerce Platform",
    type: "Commerce engineering",
    year: "2024–Present",
    desc: "Customer-facing commerce experiences and business workflows built across modern frontend stacks and SAP Commerce services, with a focus on performance, reliability, and maintainability.",
    stack: ["React", "Angular", "SAP Commerce", "Spring Boot"],
  },
  {
    title: "Dealer Incentives Portal",
    type: "Enterprise platform",
    year: "2026",
    desc: "A business-critical portal that converts sales data into dealer incentive workflows and credit-note processing, designed for clarity across complex operational rules.",
    stack: ["Full Stack", "Workflow Design", "Enterprise Data"],
  },
  {
    title: "Crown Clothing",
    type: "E-commerce experience",
    year: "2025",
    desc: "A polished React storefront exploring component architecture, product discovery, shopping flows, and scalable client-side application patterns.",
    stack: ["React", "JavaScript", "E-commerce"],
    repo: "https://github.com/AzizShahdawala/crown-clothing",
  },
];

export const websiteTemplates = [
  { id: "commerce", category: "Commerce", title: "Commerce Atelier", subtitle: "Premium e-commerce storefront", description: "A conversion-focused shop with rich product discovery, bundles, secure checkout, order tracking, and a manageable product catalogue.", audience: "Retail, D2C, fashion, beauty, specialty products", features: ["Product catalogue & filters", "Cart and checkout", "Payments & order tracking", "Admin-ready architecture"], palette: ["#191715", "#f0c7a5", "#fff8f2"], layout: "commerce" },
  { id: "real-estate", category: "Property", title: "Habitat Estates", subtitle: "Real-estate discovery platform", description: "A refined property experience with searchable listings, map-ready discovery, lead capture, agent profiles, and scheduled viewings.", audience: "Agents, developers, property managers, brokers", features: ["Smart listing search", "Property detail pages", "Lead qualification", "Viewing requests"], palette: ["#153d35", "#d6a45f", "#f3f1e8"], layout: "property" },
  { id: "business", category: "Business", title: "Northstar Studio", subtitle: "High-trust business website", description: "A polished company presence that explains services clearly, builds credibility, captures qualified enquiries, and supports future growth.", audience: "Consultancies, agencies, manufacturers, B2B services", features: ["Service architecture", "Case studies", "Lead capture", "CMS-ready content"], palette: ["#18233a", "#8aa6ff", "#f6f8ff"], layout: "business" },
  { id: "saas", category: "Technology", title: "Orbit SaaS", subtitle: "Product-led SaaS launch site", description: "A crisp product marketing system that communicates value fast with feature storytelling, integrations, pricing, demos, and onboarding calls to action.", audience: "SaaS products, AI tools, startups, developer platforms", features: ["Product storytelling", "Pricing plans", "Integration directory", "Demo conversion flow"], palette: ["#10121a", "#9c7cff", "#e8ff80"], layout: "saas" },
  { id: "hospitality", category: "Hospitality", title: "Saffron Table", subtitle: "Restaurant and hospitality experience", description: "An atmospheric, mobile-first destination for menus, reservations, locations, events, offers, and memorable brand storytelling.", audience: "Restaurants, cafes, hotels, caterers, cloud kitchens", features: ["Menus & offers", "Reservations", "Location discovery", "Events and galleries"], palette: ["#401e17", "#ec9a4b", "#fff3df"], layout: "hospitality" },
  { id: "healthcare", category: "Healthcare", title: "Clarity Care", subtitle: "Accessible healthcare website", description: "A calm, trustworthy patient experience for specialties, doctors, appointment requests, educational content, and clinic information.", audience: "Clinics, specialists, wellness practices, diagnostics", features: ["Doctor and service profiles", "Appointment requests", "Accessible UX", "Patient resources"], palette: ["#0c4a55", "#64d4c2", "#effcf9"], layout: "healthcare" },
  { id: "education", category: "Education", title: "Brightpath Academy", subtitle: "Learning and course platform", description: "A structured education experience for course discovery, cohorts, instructors, admissions, student outcomes, and learning resources.", audience: "Schools, coaching, courses, academies, EdTech", features: ["Course catalogue", "Admissions funnel", "Faculty profiles", "Student dashboard-ready"], palette: ["#1f325c", "#ffcc66", "#f5f7ff"], layout: "education" },
  { id: "creator", category: "Personal Brand", title: "Signal Portfolio", subtitle: "Creator and expert portfolio", description: "A distinctive personal brand for showcasing expertise, case studies, writing, speaking, professional focus, and high-intent connections.", audience: "Creators, independent professionals, executives, speakers, artists", features: ["Case-study storytelling", "Content hub", "Professional profile", "Newsletter-ready"], palette: ["#292420", "#ff6b5f", "#f8eadf"], layout: "creator" },
  { id: "operations", category: "Custom App", title: "Flowdesk OS", subtitle: "Custom business operations portal", description: "A tailored authenticated application for replacing spreadsheets and manual workflows with dashboards, approvals, reporting, and role-based access.", audience: "Operations teams, associations, internal platforms, SMEs", features: ["Role-based access", "Workflow automation", "Dashboards & reports", "API integrations"], palette: ["#172433", "#4f9cff", "#eaf3ff"], layout: "dashboard" },
];

export const miniProjects = [
  { title: "Monsters Rolodex", desc: "Searchable React directory powered by an external API.", stack: ["React", "API"], repo: "https://github.com/AzizShahdawala/monsters-rolodex", live: "https://azizshahdawala.github.io/monsters-rolodex/" },
  { title: "Background Generator", desc: "Interactive gradient designer with instant CSS output.", stack: ["JavaScript", "CSS"], repo: "https://github.com/AzizShahdawala/background-generator", live: "https://azizshahdawala.github.io/background-generator/" },
  { title: "Dice Game", desc: "A playful browser game driven by randomized state.", stack: ["JavaScript", "HTML"], repo: "https://github.com/AzizShahdawala/dice-game" },
  { title: "Memory Test", desc: "A focused card-matching experience built in React.", stack: ["React", "Game Logic"], repo: "https://github.com/AzizShahdawala/memory-test" },
];

export const experience = [
  { company: "Asian Paints", role: "Principal Executive — Systems Development", period: "Jul 2026 — Present", location: "Mumbai · On-site", bullets: ["Building a dealer incentives platform that translates sales data into dependable credit-note workflows."] },
  { company: "Asian Paints", role: "Senior Executive — Systems Development", period: "Oct 2024 — Jun 2026", location: "Mumbai · On-site", bullets: ["Delivered digital products across SAP Hybris, Flutter, Angular, and enterprise integration layers."] },
  { company: "Asian Paints", role: "Executive II — Systems Development", period: "Jun 2022 — Oct 2024", location: "Mumbai · On-site", bullets: ["Shipped customer and internal experiences with AngularJS, Spring Boot, Java, Flutter, and SAP Commerce Cloud.", "Improved delivery quality through UX refinement, Jenkins pipelines, and cross-functional engineering practices."] },
  { company: "Asian Paints", role: "Project Trainee", period: "Jan 2022 — Jun 2022", location: "Mumbai · On-site", bullets: ["Implemented and enhanced SAP Commerce Cloud capabilities in a production enterprise environment."] },
  { company: "Tata Consultancy Services", role: "Data Analyst", period: "Aug 2020 — Dec 2021", location: "India · Remote", bullets: ["Built analytics solutions using Python, SAP HANA, Dataiku DSS, H2O.ai, and Qlik Sense."] },
  { company: "D-WebBox", role: "Junior Web Developer", period: "Jul 2020 — Aug 2020", location: "Mumbai · Remote", bullets: ["Contributed to web development and DevOps delivery for client projects."] },
];
