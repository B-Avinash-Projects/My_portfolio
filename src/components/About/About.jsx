import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center md:gap-16">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            Avinash Bavana
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight whitespace-nowrap ">
            <span className="text-white">I am a </span>
            <span className="text-bold text-[#8245ec] ">
              Full Stack Developer
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg md:text-lg mt-8 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sapiente quasi in atque sequi corporis amet sint corrupti dolorum,
            velit dolores maxime nisi ut quam id aperiam asperiores nam iste!
          </p>

          {/* resume button */}

          <a
          href="https://drive.google.com/file/d/15xed6vjcY6d828oYmeAM9JtmUIHfnKm_/view"
          target="_blank"
          rel="noopener no referrer"
          className="inline-block text-white bg-#8245ec py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-200 hover:[transform:scale(120%)]"

          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec'
          }}
          >
              Download CV
          </a>
        </div>
        <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-50 md:h-50 lg:h-[23rem] lg:w-[15rem] lg:object-cover border-4 border-purple-700 rounded-full overflow-hidden flex-shrink-0" 
        
        tiltAnglex={20}
        tiltAngleY={20}
        scale={1.05}
        > {/* Added overflow-hidden */}
          <div className="md:w-full flex justify-center md:justify-end h-full"> {/* Changed md:w-1/2 to md:w-full and added h-full */}
          <img src={profileImage} alt="Avinash"
          className="w-full h-full object-cover rounded-full" // Changed classNames for image
          />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;