import React from 'react';
import { FaInstagram, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className='text-xl font-semibold text-purple-500'>Avinash Bavana</h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Work", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            { icon: <FaInstagram />, link: "https://www.instagram.com/alphapowerpath/" },
            { icon: <FaLinkedin />, link: "www.linkedin.com/in/avinashbavana" },
            { icon: <FaDiscord />, link: "https://discord.com/users/Avinashonline" },
            { icon: <FaGithub />,  link:"https://github.com/avinashbavana"},
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel="noopener noreferrer"
              className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className='text:sm text-gray-400 mt-5'>
          © 2025 Avinash Bavana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
