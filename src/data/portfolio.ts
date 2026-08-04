// src/data/portfolio.ts
// All of Kishore P's portfolio data extracted from contents.md

export const personalInfo = {
  name: "Kishore P",
  title: "AI, ML, Robotics & Full-Stack Developer",
  shortTitle: "AI / ML / Web",
  heroRole: "Full-Stack Developer",
  heroIntro:
    "I build production-ready web apps and AI-powered systems — from React frontends to deep learning pipelines.",
  email: "kidkrrish3@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  status: "Specialist Programmer @ Infosys",
  university: "Vellore Institute of Technology, Chennai",
  bio: "B.Tech CSE (AI & Robotics) Graduate from VIT Chennai. Specialist Programmer (L1) Trainee at Infosys Mysore. Passionate about AI/ML, Deep Learning, Full-Stack Web Development, Robotics, and UI/UX.",
  tagline: "AI/ML • Full-Stack • Robotics • DevOps & Cloud",
  github: "https://github.com/kidkrrish3",
  linkedin: "https://linkedin.com/in/kishore-p",
  resumePath: "/Resume/Arham Resume.pdf",
};

const hoverColors = [
  "hover:bg-white",
  "hover:bg-neo-yellow",
  "hover:bg-neo-blue",
  "hover:bg-neo-green",
  "hover:bg-neo-pink",
  "hover:bg-neo-purple",
  "hover:bg-neo-orange",
];

export const skillCategories = [
  {
    name: "AI / Machine Learning",
    label: "> _ AI/ML",
    count: 7,
    skills: [
      { name: "TensorFlow", category: "FRAMEWORK" },
      { name: "PyTorch", category: "FRAMEWORK" },
      { name: "OpenCV", category: "LIBRARY" },
      { name: "Pandas", category: "LIBRARY" },
      { name: "Scikit-learn", category: "LIBRARY" },
      { name: "Jupyter", category: "TOOL" },
      { name: "Ollama", category: "TOOL" },
    ],
  },
  {
    name: "Full-Stack Web",
    label: "> _ WEB",
    count: 15,
    skills: [
      { name: "React", category: "LIBRARY" },
      { name: "Next.js", category: "FRAMEWORK" },
      { name: "Tailwind", category: "STYLING" },
      { name: "Node.js", category: "BACKEND" },
      { name: "TypeScript", category: "LANGUAGE" },
      { name: "MongoDB", category: "DATABASE" },
      { name: "MySQL", category: "DATABASE" },
      { name: "Appwrite", category: "BACKEND" },
      { name: "REST APIs", category: "PROTOCOL" },
      { name: "Git", category: "VERSION" },
      { name: "GitHub", category: "OPS" },
      { name: "Postman", category: "TOOL" },
      { name: "Vercel", category: "DEPLOY" },
      { name: "Firebase", category: "BACKEND" },
      { name: "Bootstrap", category: "STYLING" },
    ],
  },
  {
    name: "Programming",
    label: "> _ CODE",
    count: 9,
    skills: [
      { name: "Python", category: "LANGUAGE" },
      { name: "C", category: "LANGUAGE" },
      { name: "C++", category: "LANGUAGE" },
      { name: "C#", category: "LANGUAGE" },
      { name: "Java", category: "LANGUAGE" },
      { name: "HTML5", category: "CORE" },
      { name: "CSS3", category: "CORE" },
      { name: "JavaScript", category: "LANGUAGE" },
      { name: "SQL", category: "QUERY" },
    ],
  },
  {
    name: "Cloud & DevOps",
    label: "> _ OPS",
    count: 6,
    skills: [
      { name: "Docker", category: "OPS" },
      { name: "Arduino", category: "HARDWARE" },
      { name: "Kubernetes", category: "OPS" },
      { name: "GCP", category: "CLOUD" },
      { name: "AWS", category: "CLOUD" },
      { name: "Azure", category: "CLOUD" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat, catIdx) =>
  cat.skills.map((skill, skillIdx) => ({
    ...skill,
    hoverColor: hoverColors[(catIdx * cat.skills.length + skillIdx) % hoverColors.length],
  }))
);

export const softSkills = [
  "Leadership", "Team Management", "Communication", "Public Speaking",
  "Strategic Planning", "Time Management", "Critical Thinking", "Adaptability",
  "Creativity", "Collaboration", "Ownership", "Responsibility", "Scrum / Agile",
  "Technical Documentation",
];

export const tools = ["VS Code", "Linux", "Figma", "MATLAB", "Amazon EC2"];

export const experiences = [
  {
    id: 1,
    role: "Specialist Programmer (L1) Trainee",
    company: "Infosys",
    duration: "Upcoming",
    type: "Full-Time",
    location: "India",
    status: "Upcoming",
    dotColor: "bg-neo-yellow",
    accentColor: "text-neo-yellow",
    package: "10 LPA",
    description:
      "Selected as a Specialist Programmer (L1) Trainee at Infosys—one of India's largest IT services and consulting companies. Will contribute to enterprise-scale software solutions and digital transformation projects.",
    tech: ["Enterprise Software", "Cloud", "Digital Transformation", "Full-Stack Development"],
  },
  {
    id: 2,
    role: "Frontend & UI/UX Intern",
    company: "VITADATA (Startup)",
    duration: "May 2025",
    type: "Internship",
    location: "Remote / Chennai, India",
    status: "Completed",
    dotColor: "bg-neo-green",
    accentColor: "text-neo-green",
    description:
      "Worked as a Frontend and UI/UX Intern focusing on responsive user interfaces and intuitive user experiences for data-driven products.",
    tech: ["React", "UI/UX", "Figma", "Frontend Development", "TypeScript"],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering (AI & Robotics)",
    institution: "Vellore Institute of Technology (VIT), Chennai",
    duration: "2023 — Ongoing",
    status: "Active",
    cgpa: "8.21",
    board: null as string | null,
    dotColor: "bg-neo-blue",
    accentColor: "text-neo-blue",
    focus: ["AI & Robotics", "Computer Science", "Full-Stack Development", "Systems Design"],
  },
  {
    id: 2,
    degree: "Higher Secondary Education (Class XII)",
    institution: "The Optimus Public School, Bhavani",
    duration: "2022",
    status: "Completed",
    board: "CBSE",
    dotColor: "bg-neo-pink",
    accentColor: "text-neo-pink",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    id: 3,
    degree: "Secondary Education (Class X)",
    institution: "The Optimus Public School, Bhavani",
    duration: "2020",
    status: "Completed",
    board: "CBSE",
    dotColor: "bg-neo-orange",
    accentColor: "text-neo-orange",
    subjects: ["Mathematics", "Science", "Computer Science"],
  },
];

export type ProjectCategory = "All" | "AI" | "ML/DL" | "Web Development" | "Others";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  status: string;
  isPublic: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LMS AI SaaS Platform",
    description:
      "AI-powered Learning Management SaaS platform designed for scalable course delivery, analytics, and intelligent student interaction. Built with a modern TypeScript stack focusing on modular architecture and production-grade deployment readiness.",
    tech: ["TypeScript", "Next.js", "AI Integration", "SaaS", "Full Stack"],
    category: ["AI", "Web Development"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FBFF48",
    gradientTo: "#FF9F1C",
  },
  {
    id: 2,
    title: "Realtime Multimodal Violence Detection",
    description:
      "Real-time multimodal violence detection system combining MobiLSTM for video sequence modeling, 1D-CNN for audio classification, and Autoencoder-based anomaly detection for weapon recognition, integrated via a Streamlit dashboard.",
    tech: ["Python", "Deep Learning", "CNN", "Autoencoder", "Streamlit"],
    category: ["ML/DL"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FF2A2A",
    gradientTo: "#A855F7",
  },
  {
    id: 3,
    title: "AI Network Routing Simulator",
    description:
      "Interactive network routing simulator comparing Traditional Dijkstra's Algorithm with Reinforcement Learning-based Q-Learning Routing. Simulates congestion scenarios in dynamic network environments.",
    tech: ["Python", "Networking", "Q-Learning", "Dijkstra", "Streamlit"],
    category: ["AI"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#3B82F6",
    gradientTo: "#33FF57",
  },
  {
    id: 4,
    title: "Multimodal MCI Detection",
    description:
      "Advanced multimodal diagnostic framework for early detection of Mild Cognitive Impairment and Dementia using EEG Signal Processing, Facial Emotion Recognition, and Weighted Late Fusion for interpretable healthcare AI.",
    tech: ["Python", "Jupyter Notebook", "Multimodal AI", "EEG Processing", "Medical AI"],
    category: ["ML/DL", "AI"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FF70A6",
    gradientTo: "#A855F7",
  },
  {
    id: 5,
    title: "Resumind – AI Resume Analyzer",
    description:
      "AI-powered ATS Resume Analyzer capable of extracting skills and keywords, ATS compatibility scoring, resume improvement suggestions, and instant feedback built using modern frontend architecture.",
    tech: ["React", "Vite", "TypeScript", "Puter.js", "AI", "Vercel"],
    category: ["AI", "Web Development"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FBFF48",
    gradientTo: "#33FF57",
  },
  {
    id: 6,
    title: "DevEvents – Event Discovery Platform",
    description:
      "Production-ready event discovery platform featuring Next.js 16, MongoDB integration, PostHog analytics, scalable deployment workflow, and performance-focused architecture.",
    tech: ["Next.js 16", "TypeScript", "MongoDB", "PostHog", "Vercel"],
    category: ["Web Development"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#3B82F6",
    gradientTo: "#FBFF48",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built using Vite, React, Tailwind CSS, and Supabase. Showcases projects, certifications, skills, and experience with a clean, professional aesthetic.",
    tech: ["Vite", "React", "Tailwind CSS", "Supabase"],
    category: ["Web Development"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FF9F1C",
    gradientTo: "#FF70A6",
  },
  {
    id: 8,
    title: "Data Dashboard using Streamlit",
    description:
      "Interactive dashboard allowing users to upload CSV files, apply filters, generate real-time visualizations, and explore datasets interactively.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit", "Data Visualization"],
    category: ["Others"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#33FF57",
    gradientTo: "#3B82F6",
  },
  {
    id: 9,
    title: "SQL Query Generator – Gemini AI",
    description:
      "Natural Language → SQL conversion tool that converts English prompts into SQL queries, explains the generated queries, and provides sample outputs. Designed for developers and learners.",
    tech: ["Python", "SQL", "Gemini API", "Generative AI", "Streamlit"],
    category: ["AI"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FBFF48",
    gradientTo: "#3B82F6",
  },
  {
    id: 10,
    title: "SentinelAI – Phishing Detection Engine",
    description:
      "AI-powered browser security extension that detects phishing attacks, spam content, and social engineering attempts using heuristic detection combined with NLP.",
    tech: ["React", "TypeScript", "Chrome Extension APIs", "NLP", "AI Security"],
    category: ["AI", "Others"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FF2A2A",
    gradientTo: "#FF9F1C",
  },
  {
    id: 11,
    title: "Cognitive Visual Attention Simulation",
    description:
      "AI simulation of human visual focus using Saliency Maps, Fixation Modeling, and Attention Heatmaps. Demonstrates cognitive modeling through computer vision techniques.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib", "Streamlit", "Computer Vision"],
    category: ["AI", "ML/DL"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#A855F7",
    gradientTo: "#FF70A6",
  },
  {
    id: 12,
    title: "Automated Answer Grading System",
    description:
      "AI-based grading system featuring EasyOCR extraction, TextBlob spelling correction, and SentenceTransformers semantic similarity scoring. Designed to reduce manual grading effort.",
    tech: ["Python", "OCR", "NLP", "SentenceTransformers", "Computer Vision", "Streamlit"],
    category: ["AI", "ML/DL"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#33FF57",
    gradientTo: "#FBFF48",
  },
  {
    id: 13,
    title: "Custom MCP Server – AI Sticky Notes",
    description:
      "Lightweight productivity server enabling natural language note creation, reminder management, and Claude Desktop compatibility. Built using FastMCP + uv runtime.",
    tech: ["Python", "FastMCP", "REST API", "AI Productivity Tools"],
    category: ["AI", "Others"],
    status: "Completed",
    isPublic: true,
    gradientFrom: "#FF9F1C",
    gradientTo: "#33FF57",
  },
];

export const leadership = [
  {
    id: 1,
    org: "Arignar Anna Thamizh Mandram",
    role: "Design Lead & Joint Secretary",
    category: "Cultural & Literature",
    year: "2025",
    color: "neo-yellow",
    achievements: [
      "Organized international-level Pongal Thiruvizha 2025 with 12+ cultural events; playback singer Velmurugan as chief guest",
      "Led end-to-end branding strategy and designed all posters, stage visuals, and branding assets",
      "Published 3–4 editions of Kanaiyazhi literary magazine",
      "Led a 500+ member community within a 20-member core committee",
      "Successfully conducted 35+ events",
    ],
  },
  {
    id: 2,
    org: "Artificial Intelligence Club",
    role: "General Secretary & Advisor",
    category: "Technical",
    year: "2025 — Current",
    color: "neo-green",
    achievements: [
      "Organized AI-focused hackathons and workshops impacting 800+ students",
      "Led strategic planning and technical roadmap for the club",
      "Managed 400+ members with a 15–20 member leadership team",
      "Conducted 25+ technical events and collaborated with IBM Z Ambassadors",
      "Mentored AI, Cloud, and Full Stack student projects",
    ],
  },
  {
    id: 3,
    org: "Student Welfare Office — VIT",
    role: "Events & Outreach Member",
    category: "Institutional",
    year: "2024 — Current",
    color: "neo-blue",
    achievements: [
      "Led design and print production for Vibrance and TechnoVIT campus fests",
      "Worked on branding, merchandise, stage creatives, and event visuals",
      "Assisted with Fresher's Induction, Graduation Ceremony, Crystal Connexions (15-Year Alumni Meet)",
      "Managed celebrity promotions including Nani, Priyanka Mohan, and Surya's Saturday event",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Career Essentials in Generative AI",
    org: "Microsoft & LinkedIn",
    year: "2024",
    category: "AI/ML",
    color: "neo-green",
  },
  {
    id: 2,
    name: "A-Z Machine Learning",
    org: "SuperDataScience (Udemy)",
    year: "2024",
    category: "AI/ML",
    color: "neo-blue",
  },
  {
    id: 3,
    name: "A-Z Deep Learning",
    org: "SuperDataScience (Udemy)",
    year: "2024",
    category: "AI/ML",
    color: "neo-purple",
  },
  {
    id: 4,
    name: "Foundational C# Certification",
    org: "Microsoft",
    year: "2024",
    category: "Programming",
    color: "neo-pink",
  },
  {
    id: 5,
    name: "Master the Coding Interview: DSA",
    org: "Zero to Mastery (Udemy)",
    year: "2024",
    category: "Programming",
    color: "neo-orange",
  },
  {
    id: 6,
    name: "Full-Stack Web Development Bootcamp",
    org: "The App Brewery",
    year: "2023",
    category: "Web Development",
    color: "neo-yellow",
  },
  {
    id: 7,
    name: "Complete Web Development Bootcamp",
    org: "Angela Yu (Udemy)",
    year: "2023",
    category: "Web Development",
    color: "neo-green",
  },
  {
    id: 8,
    name: "Complete Web & Mobile Designer",
    org: "Zero to Mastery (Udemy)",
    year: "2023",
    category: "Web Development",
    color: "neo-blue",
  },
  {
    id: 9,
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    year: "2024",
    category: "Others",
    color: "neo-orange",
  },
  {
    id: 10,
    name: "Scrum Fundamentals Certified (SFC)",
    org: "SCRUMstudy",
    year: "2024",
    category: "Others",
    color: "neo-pink",
  },
  {
    id: 11,
    name: "Complete Ethical Hacking Bootcamp",
    org: "Zero to Mastery (Udemy)",
    year: "2024",
    category: "Others",
    color: "neo-red",
  },
];
