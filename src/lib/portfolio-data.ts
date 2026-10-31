const cinema = { url: "/media/cinematch-preview.jpg" };
const maintenance = { url: "/media/itmaintenance-preview.jpg" };

type PortfolioProject = { name: string; description: string; details: string; tags: string[]; image: string; theme: string; code?: string; demo?: string };

export const profile = {
  email: "guenaien512@gmail.com",
  github: "https://github.com/asmaguenaien",
  linkedin: "https://www.linkedin.com/in/asma-guenaien-b8418321b",
  beacons: "https://beacons.ai/asmaguenaien",
};

export const projects: PortfolioProject[] = [
  {
    name: "CineMatch",
    description: "A focused movie-discovery experience for finding your next watch.",
    details: "A movie discovery application with search, genre filters, movie details, and a saved favorites list. Built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: cinema.url,
    theme: "cinema",
    code: "https://github.com/asmaguenaien/cinematch-ai",
    demo: "https://cinematch-ai-delta-five.vercel.app",
  },
  {
    name: "ITMaintenance",
    description: "An organized workspace for tracking IT assets and maintenance.",
    details: "An IT asset and maintenance management application with separate admin, technician, and employee roles, backed by PostgreSQL and Supabase.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    image: maintenance.url,
    theme: "maintenance",
    code: "https://github.com/asmaguenaien/itmaintenance",
    demo: "https://itmaintenance.vercel.app",
  },
];

export const otherProjects = [
  { name: "BookSmart", description: "Workspace booking with a weekly calendar and virtual assistant.", tags: "React · TypeScript · Framer Motion", code: "https://github.com/asmaguenaien/booksmart" },
  { name: "PlanSeance", description: "Finding shared free time for professors and students.", tags: "React · TypeScript · Vitest", code: "https://github.com/asmaguenaien/Planseance" },
];

export const experience = [
  {
    date: "FEB — OCT 2026",
    title: "Research Master’s Thesis — Secure Health Data Platform",
    place: "ENSIT · Tunis, Tunisia",
    description: "Designed and developed a web platform to assess and mitigate privacy risks in medical datasets. Implemented and evaluated anonymization techniques, reducing the reported re-identification risk from 58% to 10%, and integrated a Retrieval-Augmented Generation (RAG) module for context-aware access to research knowledge while preserving confidentiality. Thesis defense: October 2026, Highest Distinction.",
  },
  {
    date: "JAN — MAY 2024",
    title: "End-of-Study Project Intern — Full-Stack Developer",
    place: "Progress Engineering · Tunis, Tunisia",
    description: "Led the design and development of a MERN-stack web application for company-wide hardware management, enabling employees to submit repair requests for laptops, scanners, and phones.",
  },
  {
    date: "JUL — AUG 2023",
    title: "Software Developer Intern",
    place: "Progress Engineering · Tunis, Tunisia",
    description: "Built a Symfony web application for submitting and tracking employee vacation requests, and worked with the IT team to integrate it with existing systems.",
  },
];

export const education = [
  {
    date: "SEPT 2024 — OCT 2026",
    title: "Master’s Degree in Computer Science — Intelligent Systems (Research)",
    place: "ENSIT · Tunis, Tunisia",
    description: "Research on privacy protection for patient-generated health data in the Internet of Medical Things (IoMT), including multilayer security architecture, re-identification risk assessment, k-anonymity-based anonymization, and security recommendations through a RAG module. Thesis defense: October 2026, Highest Distinction.",
  },
  {
    date: "JUL — OCT 2024",
    title: "SOC Analyst Cybersecurity Bootcamp — FTD Scholarship",
    place: "TED University",
    description: "Training covering CCNA, CyberOps Associate, Certified SOC Analyst (CSA), and Certified Ethical Hacker (CEH) topics, with a focus on network security, incident response, ethical hacking, and practical cybersecurity tools.",
  },
  {
    date: "SEPT 2021 — JUN 2024",
    title: "Bachelor’s Degree in Computer Science — Software Engineering & Information Systems",
    place: "Faculty of Sciences of Bizerte · Bizerte, Tunisia",
    description: "Relevant coursework: software engineering, information systems, web development, artificial intelligence, and databases.",
  },
];

export const skills = [
  { title: "Interfaces & experiences", items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Angular"] },
  { title: "Full-stack development", items: ["Node.js", "Express.js", "MERN", "Symfony", "PHP", "Laravel", "Odoo", "PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Security & data privacy", items: ["Secure Application Design", "Data Anonymization", "k-Anonymity", "Re-identification Risk Assessment", "RAG Integration", "SOC Analysis", "Threat Hunting", "Penetration Testing"] },
  { title: "Systems & tools", items: ["Python", "Java", "Linux", "Git", "GitHub", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Postman"] },
];
