import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';

export const profile = {
  name: "Nandini Yadav",
  role: "Full Stack Web Developer (MERN Stack)",
  location: "Ghaziabad, India",
  bio: "Motivated Full Stack Web Developer with hands-on experience building real-world applications from scratch. Skilled in designing responsive UIs, developing RESTful APIs, and working with MongoDB-backed systems. Actively seeking Web Developer Intern roles.",
  email: "nandiniyadav1177@gmail.com",
  phone: "+91 9450565624",
  github: "https://github.com/Nandini0707",
  linkedin: "https://linkedin.com/in/nandini-yadav-97b70330a",
};

export const education = [
  {
    institution: "KIET Group of Institutions, Ghaziabad",
    degree: "B.Tech in Computer Science",
    year: "2023 – Present",
    score: "CGPA: 8.9",
  },
  {
    institution: "Aditya Birla Intermediate College, Sonbhadra",
    degree: "Intermediate",
    year: "2023",
    score: "90%",
  },
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  Database: ["MongoDB", "Mongoose", "SQL"],
  Languages: ["C++", "C", "Java", "Python"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
};

export const projects = [
  {
    title: "PRESCRIPTO",
    subtitle: "Doctor Appointment Booking System",
    description: "A full-stack platform for booking doctor appointments. Features role-based authentication, doctor dashboard, admin panel, and integrated payment gateway.",
    tech: ["MERN Stack", "Stripe/Payment", "Tailwind"],
    github: "https://github.com/Nandini0707", // Placeholder if specific link not provided
    demo: "#", // Placeholder
  },
  {
    title: "AI Resume Builder",
    subtitle: "AI-Powered Resume Creation",
    description: "Platform to create, edit, and download resumes with AI content improvement using Google Gemini API. Includes live preview and PDF generation.",
    tech: ["MERN Stack", "Google Gemini API", "ImageKit"],
    github: "https://github.com/Nandini0707",
    demo: "#",
  },
];

export const achievements = [
  "Solved 300+ LeetCode problems",
  "AWOO Foundation Scholarship (Aditya Birla Group)",
  "Smart India Hackathon – Department-level selection",
];

export const certifications = [
  "Cloud Computing Fundamentals – LinkedIn Learning",
  "Cybersecurity Foundation – Palo Alto Networks",
  "Full Stack Development – Microsoft Learn Student Ambassador",
  "Python Programming – Infosys Springboard",
];
