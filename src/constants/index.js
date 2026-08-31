import moon from "../assets/projects/moon.png";
import eventra from "../assets/projects/eventra.png";
import quickDine from "../assets/projects/quickdine.png";
import skillPath from "../assets/projects/skillpath.png";
import spendWise from "../assets/projects/project2.png";
import driveora from "../assets/projects/driveora.png";

export const HERO_CONTENT = `
Software Engineer focused on building scalable web applications and reliable production systems. Experienced with React, Next.js, TypeScript, Node.js, REST APIs, CI/CD, AWS, observability, and automation across fintech and enterprise environments.`;

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
      "Enhance CI/CD pipelines using GitHub Actions and Jenkins to improve deployment reliability and streamline software release workflows.",
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
    slug: "driveora",
    title: "Driveora — Full-Stack Car Rental & Booking Platform",
    category: "Full-Stack · Mobility Technology",
    role: "Full-Stack Developer",
    status: "Featured",
    featured: true,
    image: driveora,
    description:
      "Designed and built a full-stack car rental and booking platform independently, owning the application architecture, frontend experience, backend services, API integration, authentication, booking workflows, and deployment.",
    highlights: [
      "Designed and implemented the frontend and backend architecture, structuring reusable components, routes, services, APIs, and data flows for maintainable development.",
      "Built responsive vehicle discovery and booking workflows with dynamic vehicle data, filtering, form handling, validation, and user-focused interaction patterns.",
      "Developed REST APIs and backend services to manage application data and connect frontend workflows with server-side business logic.",
      "Implemented authentication and user flows to support secure access, personalized experiences, and rental-related functionality.",
      "Handled client-side state, loading states, validation, error handling, and API integration across the application to deliver a reliable end-to-end experience.",
      "Independently managed development, debugging, integration, testing, and deployment across the full application lifecycle.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
    ],
    demo: "https://driveora.vercel.app/",
    github: "https://github.com/calebtolorunleke/Driveora",
  },

  {
    id: 2,
    slug: "moon-ecommerce",
    title: "Moon — Collaborative E-Commerce Platform",
    category: "E-Commerce · Collaborative Project",
    role: "Primary Frontend Contributor",
    status: "Featured",
    featured: true,
    image: moon,
    description:
      "Served as the primary frontend contributor on a three-developer e-commerce application, owning shared frontend architecture, routing, reusable layouts, integration workflows, and code-review coordination.",
    highlights: [
      "Established the shared folder structure, routing strategy, page layouts, and reusable component architecture used across the application.",
      "Built and integrated responsive product, collection, brand, blog, and newsletter experiences across the application.",
      "Led pull-request reviews, merge coordination, and integration workflows to maintain code quality and a stable main branch.",
      "Resolved cross-feature integration issues and coordinated frontend changes across a multi-developer Git workflow.",
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
    demo: "https://moon-ecommerce-app.vercel.app/",
    github: "https://github.com/calebtolorunleke/moon-ecommerce",
  },

  {
    id: 3,
    slug: "eventra",
    title: "Eventra — Full-Stack Event Discovery Platform",
    category: "Full-Stack · Event Technology",
    role: "Full-Stack Developer",
    status: "Live",
    featured: false,
    image: eventra,
    description:
      "Built and deployed a full-stack event discovery platform using React, Node.js, and Express, integrating a custom REST API with a reusable frontend architecture and production deployment workflow.",
    highlights: [
      "Designed and built reusable React components for event cards, categories, organizers, testimonials, navigation, and content sections.",
      "Developed and deployed an Express.js REST API to provide structured event data to the React frontend.",
      "Implemented API integration, environment-based configuration, and client-server communication across development and production environments.",
      "Diagnosed and resolved CORS, deployment, and cross-environment integration issues during development and production deployment.",
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
    id: 4,
    slug: "quickdine",
    title: "QuickDine — Restaurant Discovery & Reservation Platform",
    category: "Full-Stack · Hospitality Technology",
    role: "Frontend-Focused Full-Stack Developer",
    status: "In Development",
    featured: false,
    image: quickDine,
    description:
      "An in-development restaurant discovery and reservation platform focused on authentication, role-based user flows, reusable application architecture, and frontend-to-backend integration.",
    highlights: [
      "Built reusable authentication experiences including sign-in, sign-up, authentication modals, and role-selection flows.",
      "Implemented controlled forms, conditional rendering, and structured client-side state management for user interactions.",
      "Organized routes, components, application data, and backend integration concerns to support incremental feature development.",
      "Designed the application architecture to support future restaurant discovery, reservation, and user-management capabilities.",
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
    id: 5,
    slug: "skillpath",
    title: "SkillPath — Online Learning Platform",
    category: "Frontend · Education Technology",
    role: "Frontend Developer",
    status: "Supporting Project",
    featured: false,
    image: skillPath,
    description:
      "A responsive learning-platform interface built with reusable React components and a maintainable presentation architecture across mobile, tablet, and desktop experiences.",
    highlights: [
      "Built reusable components for course sections, testimonials, partner content, navigation, and calls to action.",
      "Implemented responsive layouts and consistent UI behavior across mobile, tablet, and desktop viewports.",
      "Separated content data from presentation components to improve maintainability and reduce duplicated UI logic.",
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
    id: 6,
    slug: "spendwise",
    title: "SpendWise — Personal Finance Dashboard",
    category: "Frontend · Financial Technology",
    role: "Frontend Developer",
    status: "Supporting Project",
    featured: false,
    image: spendWise,
    description:
      "A TypeScript-based React finance dashboard demonstrating reusable application architecture, client-side state management, and interactive financial data visualization.",
    highlights: [
      "Built reusable dashboard components for financial summaries, analytics, transactions, and navigation.",
      "Implemented interactive financial visualizations using Recharts to present structured financial data clearly.",
      "Used TypeScript and Context API to improve state consistency, component contracts, and maintainability.",
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
  phoneNo: "",
  email: "calebtolorunleke@yahoo.com",
  linkedin: "https://www.linkedin.com/in/calebtolorunleke",
  github: "https://github.com/calebtolorunleke",
};
