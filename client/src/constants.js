import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import renderLogo from "./assets/tech_logo/render.png";
import redisLogo from "./assets/tech_logo/redis.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import kubernetesLogo from "./assets/tech_logo/kubernetes.svg";

// Education Section Logo's
import matoshriLogo from "./assets/education_logo/matoshri.png";
import pictLogo from "./assets/education_logo/pict.png";
import nirmalaLogo from "./assets/education_logo/nirmala.png";

// Project Section Logo's
import prescriptoLogo from "./assets/work_logo/prescripto.png";
import staycationLogo from "./assets/work_logo/staycation.png";
import greencartLogo from "./assets/work_logo/greencart.png";
import chatverseLogo from "./assets/work_logo/chatverse.png";
import quickblogLogo from "./assets/work_logo/quickblog.png";
import mernauthLogo from "./assets/work_logo/mernauth.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Redis", logo: redisLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: pictLogo,
    school: "Pune Institute of Computer Technology, Dhankawadi",
    date: "Nov 2022 - Present",
    grade: "7.59 CGPA",
    desc: "I am currently a 4th-year student pursuing a Bachelor's degree in Information Technology. My coursework has provided a strong foundation in core IT principles, including data structures, algorithms, and software development methodologies. I have actively engaged in projects that apply theoretical knowledge to practical, real-world challenges, preparing me for a career in technology.",
    degree: "Bachelor of Engineering in Information Technology",
  },
  {
    id: 2,
    img: matoshriLogo,
    school: "Matoshri Academy, Eklahare, Nashik",
    date: "2020 - 2021",
    grade: "91%",
    desc: "I completed my Class 12 education with a strong focus on Physics, Chemistry, and Mathematics (PCM) with Computer Science. This rigorous curriculum developed my analytical and problem-solving skills, which have been instrumental in my subsequent academic and technical pursuits.",
    degree: "HSC (Class 12) - PCM with Computer Science",
  },
  {
    id: 3,
    img: nirmalaLogo,
    school: "Nirmala Convent High School, Nashik",
    date: "2018 - 2019",
    grade: "87%",
    desc: "My secondary education laid the groundwork for my academic career. I completed my Class 10 with a focus on Science and Computer Applications, where I developed a foundational understanding of logical thinking and computational concepts.",
    degree: "SSC (Class 10) - Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Prescripto - Doctor Appointment System",
    description:
      "A full-stack appointment platform handling over 150 daily bookings and boosting clinic revenue by 20% through optimized slot utilization. This MERN stack application features real-time slot synchronization, which reduced scheduling conflicts by 90%. It also integrates the Razorpay payment gateway to process over ₹2M in transactions with a 100% success rate.",
    image: prescriptoLogo,
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "REST APIs",
      "Razorpay Integration",
    ],
    github:
      "https://github.com/AtharvaMalve21/Prescripto---Medical-Management.git",
    webapp: "https://prescripto-medical-management.vercel.app/",
  },

  {
    id: 1,
    title: "GreenCart - E-commerce Platform",
    description:
      "A scalable MERN stack e-commerce platform capable of managing over 300 products and supporting 100+ concurrent users[cite: 36, 37]. The services are containerized using Docker, which reduced deployment time by 65% and lowered AWS costs by 40%[cite: 39]. The platform also features a persistent cart system with JWT authentication, which increased checkout conversions by 25%[cite: 40].",
    image: greencartLogo,
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Razorpay",
    ],
    github: "https://github.com/AtharvaMalve21/green-cart.git",
    webapp: "https://green-cart-nu-five.vercel.app/",
  },

  {
    id: 2,
    title: "Staycation - Full Stack Hotel Booking Platform",
    description:
      "A MERN stack hotel booking platform that launched with 75+ properties and generated over ₹1.5M in revenue in its first quarter through Stripe integration and Node.js webhooks[cite: 42, 44, 45]. It implements real-time availability updates using MongoDB change streams, which reduced double bookings by 95%[cite: 46]. The platform also features a dynamic pricing algorithm using a Python microservice, boosting host earnings by 18% during peak seasons[cite: 47].",
    image: staycationLogo,
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Microservices",
      "Stripe Payment",
    ],
    github: "https://github.com/AtharvaMalve21/staycation-app.git",
    webapp: "https://staycation-app-umber.vercel.app/",
  },

  {
    id: 3,
    title: "ChatVerse",
    description:
      "A full-stack, real-time chat application built with the MERN stack and WebSockets (Socket.IO). It supports instant 1-on-1 and group chats with features like typing indicators, online/offline presence tracking, and JWT authentication. The app stores chat history in MongoDB, providing a seamless and responsive user experience.",
    image: chatverseLogo,
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
      "JWT Auth",
    ],
    github: "https://github.com/AtharvaMalve21/Chat-Verse.git",
    webapp: "https://chat-verse-three-xi.vercel.app/",
  },

  {
    id: 4,
    title: "Quick Blog",
    description:
      "A full-stack blog platform built with React and Node.js that enables admins to add blog posts with AI-generated descriptions using the OpenAI GPT-3.5 Turbo API. The application also includes a newsletter subscription feature with confirmation emails handled by Nodemailer, a responsive UI with Tailwind CSS, and robust backend API management.",
    image: quickblogLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Tailwind CSS",
      "Nodemailer",
      "Full-Stack",
    ],
    github: "https://github.com/AtharvaMalve21/NextGen-BlogPlatform.git",
    webapp: "https://next-gen-blog-platform.vercel.app/",
  },

  {
    id: 5,
    title: "MERN Authentication",
    description:
      "A robust full-stack authentication system built with the MERN stack. It provides essential user management features including registration, login, and secure authentication using JWT (JSON Web Tokens). The application features protected routes on both the client and server sides, password hashing with bcrypt, and a well-structured RESTful API.",
    image: mernauthLogo,
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "RESTful API",
    ],
    github: "https://github.com/AtharvaMalve21/MERN-AUTH.git",
    webapp: "https://mern-auth-azure-psi.vercel.app/",
  },
];

export const achievementsAndCertifications = [
  {
    title: "Mastering Data Structures & Algorithms using C/C++",
    issuer: "Udemy",
    year: "2025",
    description:
      "Comprehensive certification demonstrating proficiency in fundamental and advanced data structures and algorithms using C/C++. Covered essential topics including arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, searching techniques, dynamic programming, and algorithm complexity analysis. Gained hands-on experience implementing efficient solutions for complex computational problems, optimizing code performance, and understanding time and space complexity. This certification validates strong problem-solving skills and deep understanding of algorithmic thinking essential for software development and competitive programming.",
    link: "https://www.udemy.com/certificate/UC-1a73bb47-90a1-4ca9-9b3c-d9d21e2f85ab/",
  },
  {
    title: "Coding Ninjas",
    issuer: "Coding Ninjas",
    year: "",
    description:
      "Elite competitive programmer with 1500+ rating on Coding Ninjas platform. Solved 500+ complex coding problems spanning data structures, algorithms, dynamic programming, and mathematical computations. This achievement demonstrates exceptional problem-solving abilities, algorithmic thinking, and coding proficiency essential for technical interviews and software development roles.",
    link: "https://www.naukri.com/code360/profile/AtharvaMalve",
  },
];
