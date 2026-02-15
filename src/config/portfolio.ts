import {
  MapPin,
  Code2,
  FileCode,
  Atom,
  Zap,
  Paintbrush,
  Wind,
  GitBranch,
  Github,
  Smartphone,
  Palette,
  Box,
  CheckCircle,
  TestTube2,
  Gauge,
  Timer,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Folder,
  Puzzle,
  Users,
  Linkedin,
  Instagram,
  type LucideIcon,
} from "lucide-react";
import toi from "../assets/toi.png";
import mm from "../assets/mm.png";
import ecommerce from "../assets/ecommerce.png";
import screenr_long from "../assets/screenr_long.png";
// Personal Information
export const personalInfo = {
  name: "Alisha Tamboli",
  displayName: "alisha tamboli", // For navbar/logo
  title: "Front End Engineer",
  tagline: "a Front End Engineer",
  location: "Pune Maharashtra, India",
  email: "alishatamboli101@gmail.com",
  phone: "+91 9370308654",
  copyright: "© 2026 Alisha Tamboli",
  careerStartDate: "2021-08-01", // Format: YYYY-MM-DD
};

// Social Links
export const socialLinks = {
  linkedin: "",
  github: "",
  instagram: "",
};

// About Me
export const aboutMe = {
  intro: `Front End Engineer focused on high-performance, user-centered interfaces.`,

  background: `Front End Engineer with 4 years of experience building responsive, accessible web applications. Proficient in React, JavaScript (ES6+), HTML, CSS, and Next.js, with a strong focus on scalable UI architecture and performance. I enjoy transforming complex requirements into clean, maintainable products and collaborating closely with design and backend teams in Agile environments.`,

  philosophy: ``,

  yearOfExperience: "4+",
  projectsCompleted: "20+",
  happyClients: "10+",
};

// Skills
export const skills = {
  frontend: [
    { name: "React.js", icon: Atom },
    { name: "React Native", icon: Smartphone },
    { name: "Next.js", icon: Zap },
    { name: "JavaScript (ES6+)", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Paintbrush },
    { name: "SCSS", icon: Paintbrush },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Bootstrap", icon: Palette },
  ],
  stateManagement: [
    { name: "Redux", icon: Box },
    { name: "Context API", icon: Box },
    { name: "Zustand", icon: Box },
  ],
  testing: [
    { name: "Jest", icon: CheckCircle },
    { name: "React Testing Library", icon: TestTube2 },
    { name: "Unit Testing", icon: CheckCircle },
  ],
  performance: [
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "Component Reusability", icon: Puzzle },
    { name: "UI Optimization", icon: Gauge },
    { name: "Load Time Reduction", icon: Timer },
    { name: "Accessibility Improvements", icon: Users },
  ],
  api: [
    { name: "RESTful APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Azure", icon: Cloud },
    { name: "GitLab", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Slack", icon: MessageSquare },
    { name: "ProofHub", icon: Folder },
  ],
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "SDE-II",
    company: "SG Analytics",
    location: "Pune, Maharashtra",
    period: "September 2023 - August 2025",
    responsibilities: [
      "Developed and maintained modern, responsive dashboards using React, Next.js, and TypeScript.",
      "Built modular UI components with Tailwind CSS and Material UI to improve reusability and consistency.",
      "Integrated RESTful APIs and GraphQL endpoints to deliver real-time insights.",
      "Improved frontend performance by 25% with code splitting, lazy loading, and caching optimizations.",
      "Partnered with designers and backend engineers to ensure seamless product integration and UX.",
    ],
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Wipro Ltd",
    location: "Pune, Maharashtra",
    period: "August 2021 - September 2023",
    responsibilities: [
      "Built enterprise-level web applications using React.js, Redux, and Next.js.",
      "Converted wireframes and Figma prototypes into interactive, responsive interfaces.",
      "Optimized website load time by 30% through improved CSS architecture and lightweight libraries.",
      "Implemented role-based authentication and API-driven content management for internal tools.",
      "Participated in daily Agile stand-ups to deliver sprint goals and resolve bugs.",
    ],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "Sinhgad College of Commerce, Pune",
    degree: "Bachelor of Business Administration",
    period: "Jun 2016 - Oct 2019",
  },
];

// Notable Projects
export const notableProjects = [
  {
    id: 1,
    title: "Employee Portal System",
    role: "Frontend Developer",
    techStack: ["React.js", "Redux", "REST APIs"],
    year: "2024",
    src: screenr_long,
    achievements: [
      "Developed a company-wide employee dashboard for analytics and task management.",
      "Implemented state management with Redux for consistent, reliable data flows.",
      "Delivered a responsive, role-aware UI to support multiple user personas.",
    ],
  },
  {
    id: 2,
    title: "E-commerce Web App",
    role: "Frontend Developer",
    techStack: ["React.js", "Redux", "Payment Gateway"],
    year: "2024",
    src: ecommerce,
    achievements: [
      "Built an online store with product filtering and cart management.",
      "Integrated secure payment gateway workflows and validation states.",
      "Optimized UX for a smooth, conversion-friendly checkout experience.",
    ],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    role: "Frontend Developer",
    techStack: ["Next.js", "REST APIs", "Data Visualization"],
    year: "2023",
    src: toi,
    achievements: [
      "Designed and implemented an analytics dashboard for business reporting.",
      "Connected REST endpoints for real-time updates and filtering.",
      "Built reusable chart components for consistent data visualization.",
    ],
  },
  {
    id: 4,
    title: "Learning Management Platform",
    role: "Frontend Developer",
    techStack: ["React.js", "Node.js", "REST APIs"],
    year: "2023",
    src: mm,
    achievements: [
      "Created a responsive platform for course enrollment and tracking.",
      "Implemented structured navigation and progress tracking UX.",
      "Ensured cross-device performance and accessibility standards.",
    ],
  },
];

// Personal Projects
export const personalProjects = [
  {
    id: 1,
    title: "Employee Portal System",
    url: "#",
    src: screenr_long,
  },
  {
    id: 2,
    title: "E-commerce Web App",
    url: "#",
    src: ecommerce,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    url: "#",
    src: toi,
  },
  {
    id: 4,
    title: "Learning Management Platform",
    url: "#",
    src: mm,
  },
];

// Awards
export const awards = [
  // Intentionally left empty - add awards when available.
];

// Achievements
export const achievements = [
  "Boosted application responsiveness by 25% through optimized front-end code and design.",
  "Reduced version control conflicts by 15%, improving workflow efficiency by 20%.",
  "Improved team collaboration by 10%, leading to a 12% increase in project delivery speed.",
];

// References
export const references = [
  // Intentionally left empty - add references when available.
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "ecommerce platform",
    year: "2023",
    role: "Full Stack Developer",
    client: "ShopFast Inc.",
    tag: "Featured",
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile app for task and project management with real-time sync.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "task management app",
    year: "2023",
    role: "Mobile Developer",
    client: "ProductivePro",
    links: {
      demo: "https://taskapp-demo.com",
      github: "https://github.com/username/taskapp",
    },
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio website design",
    year: "2022",
    role: "Front-end Developer",
    links: {
      demo: "https://portfolio-demo.com",
      github: "https://github.com/username/portfolio",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard for visualizing complex data with charts and graphs.",
    technologies: ["React", "D3.js", "TypeScript"],
    image: "analytics dashboard",
    year: "2022",
    role: "Front-end Developer",
    client: "DataViz Corp.",
    links: {
      demo: "https://analytics-demo.com",
      github: "https://github.com/username/analytics",
    },
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Full Stack",
    description:
      "Social networking platform with posts, comments, and real-time messaging.",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    image: "social media interface",
    year: "2021",
    role: "Full Stack Developer",
    client: "ConnectHub",
    links: {
      demo: "https://socialmedia-demo.com",
      github: "https://github.com/username/social",
    },
  },
  {
    id: 6,
    title: "Weather Application",
    category: "API Integration",
    description:
      "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    image: "weather app interface",
    year: "2021",
    role: "Front-end Developer",
    links: {
      demo: "https://weather-demo.com",
      github: "https://github.com/username/weather",
    },
  },
];

// Contact Information for Footer
export const contactInfo = [
  // {
  //   icon: Mail,
  //   label: "Email",
  //   value: personalInfo.email,
  //   href: `mailto:${personalInfo.email}`,
  // },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: personalInfo.phone,
  //   href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  // },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

// Social Media
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: socialLinks.linkedin,
  },
  {
    name: "GitHub",
    icon: Github,
    url: socialLinks.github,
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: socialLinks.instagram,
  },
  // {
  //   name: "WhatsApp",
  //   icon: MessageCircle,
  //   url: "https://wa.me/918210773776",
  // },
  // {
  //   name: "Phone",
  //   icon: Phone,
  //   url: "tel:+918210773776",
  // },
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];
