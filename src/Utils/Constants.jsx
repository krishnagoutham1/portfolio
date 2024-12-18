import MernImg from "../assets/Mern.png";
import FrontendImg from "../assets/Frontend.png";
import BackendImg from "../assets/Backend.png";
import ProjectRaves from "../assets/project-raves.png";
import ProjectEventCalander from "../assets/project-eventCalander.png";
import projectInstaShare from "../assets/project-instaShare.png";
import projectCharity from "../assets/project-charity.png";
import projectShipmentBooking from "../assets/project-shipmentBooking.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
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
  SiPostman,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export const NavLinks = [
  {
    name: "Home",
    href: "#home",
    className: "hover:text-primary-focus transition-colors duration-300",
  },
  {
    name: "About",
    href: "#about",
    className: "hover:text-cyan-100 transition-colors duration-300",
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
  {
    href: " https://github.com/krishnagoutham1",
    icon: <FaGithub className="text-gray-500 hover:text-gray-900" />,
  },
  {
    href: "https://www.linkedin.com/in/krishna-goutham1",
    icon: <FaLinkedin className="text-blue-500 hover:text-blue-700" />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter className="text-blue-400 hover:text-blue-600" />,
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram className="text-pink-500 hover:text-pink-700" />,
  },
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
    skillName: "JavaScript",
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
    icon: <FaGithub className="text-4xl text-gray-800 mb-4" />,
    skillName: "GitHub",
  },
  {
    icon: <FaGit className="text-4xl text-orange-500 mb-4" />,
    skillName: "Git",
  },
  {
    icon: <SiWebpack className="text-4xl text-blue-500 mb-4" />,
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
  {
    icon: <SiPostman className="text-4xl text-orange-600 mb-4" />,
    skillName: "Postman",
  },
];

export const projects = [
  {
    title: "Raves",
    description:
      "RAVES is an HRMS & EMS platform that optimizes workforce management with modules like Companies, Resources, Work Orders, Timesheets, and Payroll. It enhances efficiency by streamlining employee management and contract handling.",
    imageUrl: ProjectRaves,
    git: false,
    live: true,
    githubLink: "",
    projectLink: "https://lucidraves.ai/",
  },
  {
    title: "Event Calander",
    description:
      "Organize your schedule effortlessly with a versatile event calendar featuring small and large views. Add, edit, or delete events and participants to streamline your planning process.",
    imageUrl: ProjectEventCalander,
    githubLink: "https://github.com/krishnagoutham1/event-calander",
    projectLink: "https://event-calander.netlify.app",
    git: true,
    live: true,
  },
  {
    title: "Insta Share",
    description:
      "Experience a modern Instagram clone with customizable light and dark themes. Enjoy seamless social interactions and personalized features for a unique user experience.",
    imageUrl: projectInstaShare,
    githubLink: "https://github.com/krishnagoutham1/insta-share",
    projectLink: "https://instaashare.netlify.app",
    git: true,
    live: true,
  },
  {
    title: "Charity Site",
    description:
      "EmpowerChange is a dedicated platform to support children's welfare by providing shelter, food, and education. Join us in making a difference through generous donations and spreading hope.",
    imageUrl: projectCharity,
    githubLink: "https://github.com/krishnagoutham1/charity",
    projectLink: "https://shelterwings.netlify.app",
    git: true,
    live: true,
  },
  {
    title: "Shipment Booking",
    description:
      "ShipmentBooking is a user-friendly application for seamless shipment booking and real-time tracking. Simplify logistics with efficient booking and stay updated with accurate tracking features.",
    imageUrl: projectShipmentBooking,
    githubLink: "https://github.com/krishnagoutham1/shipment-booking",
    projectLink: "https://shipment-booking.netlify.app",
    git: true,
    live: true,
  },
];
