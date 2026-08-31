import moon from "../assets/projects/moon.png";
import eventra from "../assets/projects/eventra.png";
import quickDine from "../assets/projects/quickdine.png";
import skillPath from "../assets/projects/skillpath.png";
import spendWise from "../assets/projects/project2.png";

export const HERO_CONTENT = `
Frontend-Focused Full-Stack Software Engineer with experience building scalable React and Next.js applications and supporting high-availability production systems across fintech and enterprise environments. I combine user-focused frontend engineering with TypeScript, Node.js, REST API integration, CI/CD, observability, automation, and production reliability to deliver maintainable software from development through deployment.
`;

export const ABOUT_TEXT = `
I'm a Frontend-Focused Full-Stack Software Engineer with experience building responsive web applications and supporting business-critical production systems.

My frontend work focuses on React, Next.js, TypeScript, reusable component architecture, responsive design, REST API integration, and application performance. I also bring hands-on experience with CI/CD pipelines, production monitoring, incident investigation, root-cause analysis, automation, and release reliability.

This combination allows me to approach software from both the user and operational perspectives: building interfaces that are intuitive and maintainable while considering how applications are deployed, monitored, supported, and improved in production.

I enjoy collaborating with engineers, designers, and stakeholders to solve practical problems, improve engineering processes, and deliver reliable software.
`;

export const EXPERIENCES = [
  {
    year: "Jul 2025 – Present",
    role: "Contract Full-Stack Engineer (Frontend Focused)",
    company: "Skill4Skill",
    location: "Remote, Canada",
    description: [
      "Develop responsive, production-ready web applications using Next.js, React, and TypeScript, delivering scalable user interfaces and modern component-based frontend architecture.",
      "Build 50+ reusable React components and integrate 20+ REST APIs to improve maintainability, performance, and user experience.",
      "Enhance CI/CD pipelines using GitHub Actions and Jenkins to improve deployment reliability and streamline software releases workflows.",
      "Collaborate through Git-based development workflows, contributing to feature development, code reviews, and iterative product delivery.",
      "Refactor legacy frontend code into modular, reusable, component-driven architecture while enforcing code quality with ESLint and Prettier.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "GitHub Actions",
      "Jenkins",
      "ESLint",
      "Prettier",
    ],
  },

  {
    year: "Feb 2022 – Jun 2025",
    role: "Frontend Developer (Part-Time)",
    company: "Findworka",
    location: "Hybrid, Nigeria / Canada",
    description: [
      "Developed and maintained responsive customer-facing applications using React and modern JavaScript, translating product requirements into reusable UI components.",
      "Improved page performance through code splitting, lazy loading, asset optimization, and rendering improvements.",
      "Collaborated with backend engineers to integrate REST APIs and deliver scalable, data-driven product features.",
      "Mentored junior developers on React, JavaScript, component architecture, and API integration practices.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Code Splitting",
      "Lazy Loading",
      "Responsive Design",
    ],
  },

  {
    year: "Oct 2022 – Jul 2025",
    role: "Production Engineer / Unit Head",
    company: "Guaranty Trust Bank (GTCO)",
    location: "Hybrid, Nigeria",
    description: [
      "Managed the stability and operational health of enterprise banking applications supporting more than three million users while maintaining 99.9% platform availability.",
      "Led root-cause analysis for high-priority incidents and partnered with engineering teams on permanent code-level and process improvements.",
      "Developed Python and PowerShell automation that reduced repetitive operational work by more than 15 hours per week.",
      "Built Dynatrace and Grafana dashboards and alerts that improved production visibility, issue detection, and incident response.",
    ],
    technologies: [
      "Python",
      "PowerShell",
      "Oracle SQL",
      "REST APIs",
      "Dynatrace",
      "Grafana",
      "AWS",
      "Incident Management",
      "Root Cause Analysis",
    ],
  },

  {
    year: "Apr 2021 – Oct 2022",
    role: "Solution Engineer / RPA Developer",
    company: "dipoleDIAMOND",
    location: "Hybrid, Nigeria",
    description: [
      "Designed enterprise automation workflows using UiPath, Power Automate, and ProcessMaker, reducing manual processing by 40%.",
      "Investigated workflow and application failures and implemented permanent fixes through stronger validation and exception handling.",
      "Optimized Oracle SQL queries and backend processes to improve automation execution speed and operational efficiency.",
      "Built Python and PowerShell scripts that strengthened data validation, release quality, and post-deployment reliability.",
    ],
    technologies: [
      "UiPath",
      "Power Automate",
      "ProcessMaker",
      "Python",
      "PowerShell",
      "Oracle SQL",
      "REST APIs",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    slug: "moon-ecommerce",
    title: "Moon — Collaborative E-Commerce Platform",
    category: "E-Commerce · Collaborative Project",
    role: "Primary Frontend Contributor",
    status: "Featured",
    featured: true,
    image: moon,
    description:
      "A responsive e-commerce experience for a premium ceramics brand, developed collaboratively within a three-developer frontend team. I owned the shared application architecture, routing, reusable layouts, pull-request reviews, merge quality, and production integration.",
    highlights: [
      "Established the folder structure, shared layout, routing strategy, and reusable component patterns.",
      "Led pull-request reviews and merge coordination to reduce integration conflicts and maintain a stable main branch.",
      "Built responsive experiences for product discovery, collections, brand history, blog content, and newsletter engagement.",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Motion",
      "Git",
      "GitHub",
      "Vercel",
    ],
    demo: "",
    github: "",
  },

  {
    id: 2,
    slug: "eventra",
    title: "Eventra — Full-Stack Event Discovery Platform",
    category: "Full-Stack · Event Technology",
    role: "Full-Stack Developer",
    status: "Live",
    featured: true,
    image: eventra,
    description:
      "A responsive event-discovery platform that allows users to explore event listings through categorized browsing, reusable event cards, organizer information, testimonials, and API-driven content.",
    highlights: [
      "Built a component-driven React interface with reusable event, category, organizer, and content components.",
      "Developed and deployed an Express REST API that provides structured event data to the frontend.",
      "Configured environment-based API integration and resolved CORS, deployment, and cross-environment issues.",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Material UI",
      "Vercel",
    ],
    demo: "https://eventra-rouge.vercel.app/",
    github: "https://github.com/calebtolorunleke/eventra",
  },

  {
    id: 3,
    slug: "quickdine",
    title: "QuickDine — Restaurant Discovery & Reservation Platform",
    category: "Full-Stack · Hospitality Technology",
    role: "Frontend-Focused Full-Stack Developer",
    status: "In Development",
    featured: true,
    image: quickDine,
    description:
      "A restaurant discovery and reservation platform designed for diners and restaurant owners. The current implementation focuses on reusable authentication experiences, role-based user flows, controlled forms, and a maintainable structure for future reservation APIs.",
    highlights: [
      "Developed reusable sign-in, sign-up, authentication modal, and user-role selection interfaces.",
      "Implemented controlled forms, conditional rendering, and validation-ready state management.",
      "Separated components, routes, application data, and backend integration concerns to support progressive development.",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    demo: "",
    github: "",
  },

  {
    id: 4,
    slug: "skillpath",
    title: "SkillPath — Online Learning Platform",
    category: "Frontend · Education Technology",
    role: "Frontend Developer",
    status: "Supporting Project",
    featured: false,
    image: skillPath,
    description:
      "A responsive online-learning interface built around reusable components, accessible content structure, clear visual hierarchy, and consistent behavior across mobile, tablet, and desktop screens.",
    highlights: [
      "Built reusable sections for courses, testimonials, partner logos, navigation, and calls to action.",
      "Implemented responsive layouts across mobile, tablet, and desktop viewports.",
      "Separated content data from presentation components to improve maintainability.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "React Fast Marquee",
      "React Icons",
    ],
    demo: "",
    github: "https://github.com/calebtolorunleke/skillpath",
  },

  {
    id: 5,
    slug: "spendwise",
    title: "SpendWise — Personal Finance Dashboard",
    category: "Frontend · Financial Technology",
    role: "Frontend Developer",
    status: "Supporting Project",
    featured: false,
    image: spendWise,
    description:
      "A responsive personal-finance dashboard demonstrating TypeScript-based React development, reusable dashboard architecture, interactive data visualization, and maintainable client-side state management.",
    highlights: [
      "Created reusable dashboard components for summaries, analytics, transactions, and navigation.",
      "Implemented interactive financial visualizations using Recharts.",
      "Used TypeScript and Context API to improve state consistency and maintainability.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "Recharts",
    ],
    demo: "https://spending-wise.vercel.app/",
    github: "https://github.com/calebtolorunleke/spendwise",
  },
];

export const education = [
  {
    school: "Obafemi Awolowo University",
    degree: "PGD Computer Science (Postgraduate)",
    period: "2023 - 2025",
  },
  {
    school: "Ekiti State University",
    degree: "BSc Biotechnology",
    period: "2014 - 2019",
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    title: "Meta Full-Stack Developer Specialization",
    issuer: "Coursera (Meta)",
    year: "2025",
  },
  {
    title: "Full-Stack Developer Certification",
    issuer: "Tech Studio Academy",
    year: "2025",
  },
  {
    title: "Frontend Development Certification",
    issuer: "TechyJaunt",
    year: "2023",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    year: "2022",
  },
];

export const CONTACT = {
  address: "Vancouver, British Columbia, Canada",
  phoneNo: "+1 (236) 335-7976",
  email: "calebtolorunleke@yahoo.com",
  linkedin: "https://www.linkedin.com/in/calebtolorunleke",
  github: "https://github.com/calebtolorunleke",
};
