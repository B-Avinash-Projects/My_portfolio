import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(" ");

  //check scroll

  useEffect(() => {
    const handleScroll = () => {
      setisScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setisOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] sm:px-6 md:px-[7vw] lg:px-[20vw] ${
        isScroll
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex justify-between items-center w-full py-10">
        {/* menu logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#4d2a92]">&lt;</span>
          <span className="text-white">Avinash</span>
          <span className="text-[#4d2a92]">/</span>
          <span className="text-white">Bavana</span>
          <span className="text-[#4d2a92]">&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8  text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`
                cursor-pointer hover:text-[#4d2a92] ${
                  activeSection === item.id ? "text-[#4d2a92]" : ""
                }
              `}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/B-Avinash-Projects"
            target="_blank"
            rel="nopener no referrer"
            className="text-gray-300 hover:text-[#4d2a92]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/avinash-bavana-05ab6b26a/"
            target="_blank"
            rel="nopener no referrer"
            className="text-gray-300 hover:text-[#4d2a92]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

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

      {/* Mobile Menu Items */}
      {
        isOpen && (
          <div className="absolute top-16 -left-11 translate-x-1/2 w-3/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) =>
              <li key={item.id} className={`cursor-pointer hover:text-white ${
                activeSection === item.id? "text-[#4d2a92]" : ""
              }`}>

                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
              )}

              <div className="flex space-x-5">
                <a href="https://github.com/B-Avinash-Projects"
                rel="nopener no referrer"
                className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24}></FaGithub>
                </a>

                <a
                href="https://www.linkedin.com/in/avinash-bavana-05ab6b26a/"
                rel="nopener no referrer"
                className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24}></FaLinkedin>
                </a>
              </div>
            </ul>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
