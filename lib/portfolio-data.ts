import type { LucideIcon } from "lucide-react"
import {
  Database,
  Wrench,
  Sparkles,
  Braces,
  Server,
  Layers,
} from "lucide-react"

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
] as const

export const SOCIAL_LINKS = {
  github: "https://github.com/Naman1313",
  linkedin: "https://www.linkedin.com/in/naman1313/",
  email: "mailto:namanvit2028@gmail.com",
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: Braces,
    items: [
      "Java",
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Zustand",
      "Bootstrap",
      "jQuery",
      "Mongoose",
      "Framer Motion",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "REST APIs",
      "Postman",
      "Vercel",
      "VS Code",
      "Vite",
      "Antigravity",
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    items: ["Authentication", "API Design", "Schema Validation", "Caching"],
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    items: [
      "Leadership",
      "Creative Problem Solving",
      "Collaboration",
      "Adaptive Learning",
    ],
  },
] as const

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  span?: "lg" | "md" | "sm"
  accent?: "blue" | "violet" | "cyan" | "amber" | "rose"
}

export const PROJECTS: Project[] = [
  {
    title: "TaskLoom",
    description:
      "TaskLoom is a modern, full-stack \"task management and team collaboration platform\" designed to help users plan, organize, and track work efficiently. It offers a clean UI, drag-and-drop boards, progress visualization, real-time updates, and a smooth authentication flow, all built with a focus on usability and performance.",
    tags: ["React", "TypeScript", "Zustand", "Framer Motion", "Three.js", "Tailwind", "Vite"],
    image: "/projects/taskloom.jpg",
    liveUrl: "https://tasksloom.vercel.app/",
    repoUrl: "https://github.com/Naman1313/TaskLoom",
    featured: true,
    span: "lg",
    accent: "blue",
  },
  {
    title: "Nyaya-Setu",
    description:
      "Nyaya-Setu is a blockchain-powered, tamper-proof digital evidence management system that ensures immutable chain of custody using SHA-256 hashing, IPFS storage, and verifiable blockchain records—built to restore trust in digital evidence for the Indian judiciary.",
    tags: ["Node.js", "Express", "MongoDB", "Ethereum", "IPFS", "AWS S3", "AES-256", "EJS"],
    image: "/projects/nyaya-setu.jpg",
    liveUrl: "https://nyaya-setu-kjga.onrender.com/home",
    repoUrl: "https://github.com/Naman1313/Nyaya-Setu",
    span: "md",
    accent: "violet",
  },
  {
    title: "FarmSarthi",
    description:
      "FarmSarthi is designed to empower Indian farmers with real-time information, smart tools, and direct market access.It aims to eliminate the inefficiencies of traditional *mandis (markets) by providing a direct digital interface between farmers and buyers. The project bridges the gap between the Minimum Support Price (MSP) and prices quoted by middlemen, empowering farmers with better price realization.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS", "EJS", "FireBase"],
    image: "/projects/farmsarthi.jpg",
    liveUrl: "https://farmsarthi.onrender.com/",
    repoUrl: "https://github.com/Naman1313/FarmSarthi",
    span: "md",
    accent: "cyan",
  },
  {
    title: "ArtBid Studio",
    description:
      "ArtBid Studio is a full-stack web application that allows artists to upload artwork and buyers to place live bids using a built-in signature pad. The system updates bids in real-time using AJAX + XML polling, and includes secure authentication, artwork management, and dynamic price updates.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Canvas API", "PHP", "MySQL", "XML", "XAMPP"],
    image: "/projects/artbid.jpg",
    repoUrl: "https://github.com/Naman1313/ArtBid-Studio",
    span: "sm",
    accent: "amber",
  },
  {
    title: "PhishDetect",
    description:
      "A deep learning-based system for detecting phishing websites using URL analysis and Convolutional Neural Networks (CNN). This project aims to classify URLs as phishing or legitimate with high accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    image: "/projects/phishdetect.jpg",
    repoUrl: "https://github.com/Naman1313/PhishDetect",
    span: "sm",
    accent: "rose",
  },
] as const

export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
  active?: boolean
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Member of Student Council",
    company: "Ingraham English School",
    period: "2019 — 2023",
    bullets: [
      "Coordinated and conducted various school-wide events, ensuring smooth execution and high student engagement.",
      "Played a key role in maintaining discipline across the campus and demonstrating strong leadership qualities among peers.",
    ],
  },
  {
    role: "House Captain",
    company: "Ingraham English School",
    period: "2022 — 2023",
    bullets: [
      "Represented the house in various inter-school and intra-school competitions, fostering a strong sense of unity and team spirit.",
      "Demonstrated exemplary leadership qualities by organizing events, mentoring peers, and consistently motivating the team toward success.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Pinnacle Labs",
    period: "Jun 2025 — Jul 2025",
    bullets: [
      "Improved UI workflows leading to 15% faster page load times.",
      "Integrated REST APIs and debugged components across the stack.",
      "Optimized backend API responses for high-traffic flows.",
    ],
  },
  {
    role: "Technical Core Member",
    company: "NULL Chapter, VIT Bhopal",
    period: "2025 — Present",
    active: true,
    bullets: [
      "Built backend modules for internal tools used by chapter members.",
      "Organized technical workshops, hackathons and events.",
    ],
  },
  {
    role: "Co Lead - Event Management Team",
    company: "DSA Club, VIT Bhopal",
    period: "2026 — Present",
    active: true,
    bullets: [
      "Organized and executed multiple successful events, ensuring smooth operations.",
      "Demonstrated strong leadership qualities by managing team members and coordinating tasks effectively.",
    ],
  },
  {
    role: "ServiceNow Virtual Internship Program",
    company: "ServiceNow University & SmartBridge",
    period: "May 2026",
    bullets: [
      "Completed a comprehensive virtual internship focused on ServiceNow Administration, Agentic AI, Flows, Reporting, and ATF fundamentals.",
      "Gained hands-on exposure to workflow automation, platform administration, and report creation within the ServiceNow ecosystem.",
      "Prepared for the ServiceNow Certified System Administrator (CSA) certification through industry-aligned training modules.",
    ],
  },
] as const

export type Certificate = {
  title: string
  issuer: string
  date: string
  id?: string
  image: string
  link: string
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "November 2025",
    image: "/certificates/coursera-networking.png",
    link: "/certificates/coursera-networking.png",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL Online Certification",
    date: "Jan-Apr 2025",
    image: "/certificates/nptel-cloud-computing.png",
    link: "/certificates/nptel-cloud-computing.png",
  },
  {
    title: "Marketing Analytics",
    issuer: "NPTEL Online Certification",
    date: "Jan-Apr 2026",
    image: "/certificates/nptel-marketing-analytics.png",
    link: "/certificates/nptel-marketing-analytics.png",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "August 2024",
    image: "/certificates/mathworks-matlab.png",
    link: "/certificates/mathworks-matlab.png",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "October 2024",
    image: "/certificates/hackerrank-problem-solving.png",
    link: "/certificates/hackerrank-problem-solving.png",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "17 Dec, 2024",
    id: "2D52747B1036",
    image: "/certificates/hackerrank-problem-solving-intermediate.png",
    link: "/certificates/hackerrank-problem-solving-intermediate.png",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "07 Dec, 2024",
    id: "FD28C57B7520",
    image: "/certificates/hackerrank-python-basic.png",
    link: "/certificates/hackerrank-python-basic.png",
  },
  {
    title: "Virtual Internship Program",
    issuer: "ServiceNow",
    date: "May 27, 2026",
    id: "SNU2023053",
    image: "/certificates/servicenow-internship.png",
    link: "/certificates/servicenow-internship.png",
  },
  {
    title: "Python Essentials",
    issuer: "Vityarthi",
    date: "27/11/2024",
    image: "/certificates/vityarthi-python.png",
    link: "/certificates/vityarthi-python.png",
  },
  {
    title: "Fundamentals of AI and ML",
    issuer: "Vityarthi",
    date: "28/4/2025",
    image: "/certificates/vityarthi-ai-ml.png",
    link: "/certificates/vityarthi-ai-ml.png",
  },
  {
    title: "Programming in Java",
    issuer: "Vityarthi",
    date: "01 Dec 2025",
    id: "d71qJzpyZCiU",
    image: "/certificates/vityarthi-java.png",
    link: "/certificates/vityarthi-java.png",
  },
] as const

export type Achievement = {
  title: string
  issuer: string
  category: "award"
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Gold Medal at International Olympiard of Mathematics(IOM)",
    issuer: "",
    category: "award",
  },
  {
    title: "School Topper in Class 10",
    issuer: "",
    category: "award",
  },
  {
    title: "Appointed as House Captain in School",
    issuer: "",
    category: "award",
  },
  {
    title: "Won 2x Hackathons",
    issuer: "",
    category: "award",
  },
] as const
