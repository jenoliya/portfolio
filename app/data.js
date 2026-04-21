// ============================================================
// JENOLIYA SUNILKUMAR — Portfolio Data
// ============================================================

export const portfolio = {
  name: "Jenoliya Sunilkumar",
  tagline: "Crafting scalable backends & intuitive frontends",
  role: "Full Stack Developer · Backend Python Specialist",
  location: "Coimbatore, Tamil Nadu, India",
  bio: "I'm a Full Stack Developer specialising in backend systems — building fast, reliable APIs with FastAPI and Django, and clean reactive frontends with React, Qwik, and Next.js. I've shipped production systems across EdTech, AgriTech, and ML analytics, integrating payment gateways, managing PostgreSQL and MongoDB databases, and deploying on live servers. I care about writing code that scales cleanly and solves real problems.",
  avatar: null, // drop avatar.jpg in /public and set to '/avatar.jpg'

  contact: {
    email: "jenoliyasunilkumar@gmail.com",
    github: "https://github.com/jenoliya",
    linkedin: "https://www.linkedin.com/in/jenoliya-sunilkumar-96a10b370/", // add your LinkedIn URL here
    twitter: null,
    phone: "+91 6374298737",
  },

  skills: [
    {
      category: "Backend",
      items: ["Python", "FastAPI", "Pydantic", "Django", "Django REST Framework"],
    },
    {
      category: "Frontend",
      items: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS", "Qwik Framework"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "Docker", "SSH Deployment", "Stripe", "VNPay", "Claude AI"],
    },
  ],

  experience: [
    {
      company: "Nexoria",
      role: "Founding Developer",
      period: "Sep 2025 – Jan 2026",
      bullets: [
        "Built a Study Abroad platform and LMS portal using Qwik, TypeScript, and Tailwind CSS with responsive, mobile-friendly UI.",
        "Designed and maintained FastAPI backends integrated with MongoDB for students, universities, courses, and learning content.",
        "Integrated VNPay payment gateway for secure online payments in a Vietnam-based application.",
        "Deployed and managed the full stack on a production server via SSH — handling environment setup, backend deployment, and updates.",
      ],
    },
    {
      company: "Agric360",
      role: "Intern",
      period: "Apr 2025 – Aug 2025",
      bullets: [
        "Built a responsive, user-friendly UI using Tailwind CSS within the Qwik framework.",
        "Developed two FastAPI backend modules integrated with PostgreSQL for an African agri-commerce platform connecting farmers with buyers.",
      ],
    },
    {
      company: "V-Tech Solutions",
      role: "Intern",
      period: "Dec 2024 – Apr 2025",
      bullets: [
        "Worked on data orchestration and synchronisation for an ML analytics framework migration (v2).",
        "Gained hands-on experience with Python, Django, and workflow automation for large-scale data processing.",
      ],
    },
  ],

  projects: [
    {
      title: "Study Abroad & LMS Platform",
      description: "A full-stack EdTech platform for a Vietnamese company. Features a Study Abroad portal and a Learning Management System — built with Qwik + TypeScript frontend, FastAPI backend, and MongoDB. Supports VNPay payments, student/university management, and course enrollment.",
      tags: ["Qwik", "TypeScript", "FastAPI", "MongoDB", "VNPay", "SSH"],
      link: "https://github.com/jenoliya",
      live: null,
      year: "2025–26",
    },
    {
      title: "Agric360 — AgriTech E-Commerce",
      description: "An e-commerce platform connecting African agricultural farmers with buyers. Contributed responsive frontend using Qwik + Tailwind CSS and built two core backend modules in FastAPI backed by PostgreSQL.",
      tags: ["FastAPI", "PostgreSQL", "Qwik", "Tailwind CSS"],
      link: "https://github.com/jenoliya",
      live: null,
      year: "2025",
    },
    {
      title: "ML Analytics Orchestration Framework",
      description: "Worked on a v2 migration of an advanced data orchestration system for ML analytics pipelines. Focused on workflow automation, task management, and data synchronisation using Python and Django.",
      tags: ["Python", "Django", "Data Orchestration", "ML Analytics"],
      link: "https://github.com/jenoliya",
      live: null,
      year: "2024–25",
    },
  ],

  certifications: [
    "SQL, MySQL, PostgreSQL & MongoDB: All-in-One Database Course — Udemy (2025)",
    "Learn Data Analysis with Python, NumPy & Pandas — Udemy (2025)",
    "Master Django REST Framework: Building Powerful APIs — Udemy (2025)",
    "Claude Code in Action — Anthropic Academy (2026)",
    "AI Fluency: Framework & Fundamentals — Anthropic Academy (2026)",
  ],

  education: {
    degree: "B.Sc. Information Technology",
    institution: "Sri Ramakrishna College of Arts & Science, Coimbatore",
    period: "Aug 2022 – May 2025",
    grade: "7.19 CGPA",
  },
}
