import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  postgres,
  nodejs,
  // samaritans,
  // oist,
  // nextinnovation,
  // cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  hackathon,
  portfolio,
  pglife,
  sortingvisualiser,
  // aws,
  sdm_logo,
  ksss_logo,
  keb_logo,
  intelli_logo,
  smartIVBags,
  LMS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors of Engineering.",
    company_name: "SDM College of Engineering and Technology, Dharwad.",
    icon: sdm_logo,
    iconBg: "#fff",
    date: "2021-2025",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems,Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Internet of Things.",
      "CGPA: 7.83/10",
    ],
  },
  {
    title: "Pre-University Education",
    company_name: "KSSS PU Science and Commerce College, Hubli.",
    icon: ksss_logo,
    iconBg: "#fff",
    date: "2019-2021",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics, Biology.",
      "Grade: 92.33%"
    ],
  },
  {
    title: "SSLC",
    company_name: "K. E. Board's ENG MED School, Dharwad.",
    icon: keb_logo,
    iconBg: "#fff",
    date: "2018-2019",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "Grade: 88.16%",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NOde.js",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgre SQL",
    icon: postgres,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "Intelligrow Bancsoft Consultancy Services Pvt.Ltd",
    icon: intelli_logo,
    iconBg: "#fff",
    date: "April 2025 - present",
    points: [
      "Working as a Java Developer Intern at Intelligrow Bancsoft, contributing to core banking application modules.",
      "Gaining hands-on experience in building and optimizing backend functionalities using Java and Spring Boot.",
      "Collaborating with the team to implement RESTful APIs and perform database operations with MySQL.",
      "Enhanced debugging and code quality by writing unit tests and participating in code reviews.",
      "Developing reusable components and followed Agile methodologies to ensure timely delivery of tasks."
    ],
  },
 
];

const extracurricular = [
  {
    title: "Won Second Place in National Level Hackathon",
    type: "Achievements",
    icon: hackathon,
    iconBg: "#007BB5",
    date: "April 2024",
    points: ["Credential ID: Anirudha Joshi"],
    credential: "https://drive.google.com/file/d/1Ni__HYZXyPtTF2YCq0YeuduUtjET4T2l/view?usp=sharing",
  },
  
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mohitrajput2002/my-portfolio",
    live_project_link: "https://mohit-singh-rajput.vercel.app/",
  },
  {
    name: "Learning Management System",
    description:
      "Developed a secure, role-based file and notes sharing platform using ReactJS, NodeJS, ExpressJS, and PostgreSQL, incorporating JWT for authentication. Integrated Cloudinary for efficient file storage, designed an intuitive user interface, and optimized database structure for reliable performance tailored specifically for administrators, teachers, and students.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgrerSQL",
        color: "green-text-gradient",
      },
    ],
    image: LMS,
    source_code_link: "https://github.com/Anirudha-N-Joshi/LMS",
    // live_project_link: "https://github.com/mohitrajput2002/PG_Life",
  },
  {
    name: "Smart IV Bags Monitoring System",
    description:
      "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
    ],
    image: smartIVBags,
    source_code_link:
      "https://github.com/mohitrajput2002/sorting-visualizer-project.github.io.git",
    // live_project_link: "https://sorting-visuallizer.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
