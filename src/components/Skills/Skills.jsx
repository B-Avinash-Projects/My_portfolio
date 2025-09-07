// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-800 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full rounded-2xl border border-gray-700
          shadow-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-8 text-center">
            {" "}
            {/* Increased mb for title */}
            {category.title}
          </h3>

          <Tilt
            // className="w-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 sm:gap-x-4 justify-items-center">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  glareEnable={true}
                  // glareMaxOpacity={0.4}
                  glareColor="#8245ec"
                  glarePosition="bottom"
                  className="flex flex-col items-center space-y-2 py-2 px-1 text-center transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </Tilt>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
