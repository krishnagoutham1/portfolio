import { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLinks } from "../Utils/Constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="px-1 sm:px-0 lg:px-48 sticky top-0 z-50">
      <nav className="h-[100px] bg-[#05445e] w-full md:rounded-full my-3 px-3 sm:px-4 md:px-10 opacity-95">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-20" />
            <div className="text-2xl font-bold primary-focus">
              <a href="#home">Krishna Goutham</a>
            </div>
          </div>

          <div className="hidden md:flex gap-5">
            {NavLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-lg font-medium hover:text-[#00ffe5] ${item.className}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-teal-dark text-white py-4 rounded-lg mt-3 shadow-lg bg-[#05445e]">
            {NavLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-8 py-2 hover:text-cyan-light transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
