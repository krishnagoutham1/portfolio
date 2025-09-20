import { socialLinks } from "../Utils/Constants";

const Footer = () => (
  <footer className="md:flex flex-row-reverse items-center justify-between p-3 md:px-20 sm:px-6">
    <div className="flex justify-center gap-8 mb-3">
      {socialLinks.map((links, index) => (
        <a
          key={index}
          href={links.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 transition-transform duration-300"
        >
          {links.icon}
        </a>
      ))}
    </div>

    <div className="mb-3">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Thalatam Venkata Naveen. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
