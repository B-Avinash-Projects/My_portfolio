import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setisScroll(window.scrollY > 50);

      // detect active section while scrolling
      const scrollPos = window.scrollY + 200;
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click menu item → scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setisOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] sm:px-6 md:px-[7vw] lg:px-[20vw] ${
        isScroll
          ? "bg-[#050414] shadow-md"
          : "bg-[#050414]/20 backdrop-blur-md"
      }`}
    >
      <div className="relative flex justify-between items-center w-full py-6">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#4d2a92]">&lt;</span>
          <span className="text-white">Avinash</span>
          <span className="text-[#4d2a92]">/</span>
          <span className="text-white">Bavana</span>
          <span className="text-[#4d2a92]">&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#4d2a92] ${
                activeSection === item.id ? "text-[#4d2a92]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop social links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/B-Avinash-Projects"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-[#4d2a92]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-bavana-05ab6b26a/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-[#4d2a92]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#4d2a92] cursor-pointer"
              onClick={() => setisOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4d2a92] cursor-pointer"
              onClick={() => setisOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3/5 bg-[#050414] bg-opacity-70 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#4d2a92]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-5 pt-2">
              <a
                href="https://github.com/B-Avinash-Projects"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-bavana-05ab6b26a/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
