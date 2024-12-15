import MernImg from "../assets/Mern.png";
import FrontendImg from "../assets/Frontend.png";
import BackendImg from "../assets/Backend.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiMysql,
  SiRedis,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export const NavLinks = [
  {
    name: "Home",
    href: "#home",
    className: "hover:text-cyan-light transition-colors duration-300",
  },
  {
    name: "About",
    href: "#about",
    className: "hover:text-cyan-light transition-colors duration-300",
  },
  {
    name: "Skills",
    href: "#skills",
    className: "hover:text-cyan-light transition-colors duration-300",
  },
  {
    name: "Projects",
    href: "#projects",
    className: "hover:text-cyan-light transition-colors duration-300",
  },

  {
    name: "Contact",
    href: "#contact",
    className: "hover:text-cyan-light transition-colors duration-300",
  },
];

export const tiltAbout = [
  { cardName: "Mern Developer", cardImg: MernImg },
  { cardName: "React Developer", cardImg: FrontendImg },
  { cardName: "Node Developer", cardImg: BackendImg },
];

export const socialLinks = [
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

export const skillsData = [
  {
    icon: <FaReact className="text-4xl text-blue-500 mb-4" />,
    skillName: "React.js",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-blue-400 mb-4" />,
    skillName: "Tailwind CSS",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-600 mb-4" />,
    skillName: "Redux",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 mb-4" />,
    skillName: "JavaScript (ES6)",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-600 mb-4" />,
    skillName: "TypeScript",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 mb-4" />,
    skillName: "CSS3",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 mb-4" />,
    skillName: "HTML5",
  },
  {
    icon: <FaGithub className="text-4xl text-white mb-4" />,
    skillName: "GitHub",
  },
  {
    icon: <FaGit className="text-4xl text-orange-500 mb-4" />,
    skillName: "Git",
  },
  {
    icon: <SiWebpack className="text-4xl text-white mb-4" />,
    skillName: "Webpack",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 mb-4" />,
    skillName: "MySQL",
  },
  {
    icon: <SiRedis className="text-4xl text-red-500 mb-4" />,
    skillName: "Redis",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-500 mb-4" />,
    skillName: "Databases",
  },
  {
    icon: <FaCode className="text-4xl text-gray-600 mb-4" />,
    skillName: "SCSS",
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description: "An e-commerce platform with advanced search and filter.",
    imageUrl: "", // Add your image URL here
    githubLink: "https://github.com/your-profile/ecommerce",
    projectLink: "https://ecommerce.example.com",
    git: true,
    live: true,
  },
  {
    title: "HRMS Tool",
    description: "A comprehensive employee management system.",
    imageUrl: "", // Add your image URL here
    githubLink: "https://github.com/your-profile/hrms",
    projectLink: "https://hrms.example.com",
  },
  {
    title: "HRMS Tool",
    description: "A comprehensive employee management system.",
    imageUrl: "", // Add your image URL here
    githubLink: "https://github.com/your-profile/hrms",
    projectLink: "https://hrms.example.com",
  },
  {
    title: "HRMS Tool",
    description: "A comprehensive employee management system.",
    imageUrl: "", // Add your image URL here
    githubLink: "https://github.com/your-profile/hrms",
    projectLink: "https://hrms.example.com",
  },
  {
    title: "HRMS Tool",
    description: "A comprehensive employee management system.",
    imageUrl: "", // Add your image URL here
    githubLink: "https://github.com/your-profile/hrms",
    projectLink: "https://hrms.example.com",
  },
];
