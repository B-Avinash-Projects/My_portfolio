import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, id) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-16"
          >
            {/* Timeline circle */}
            <div className="absolute sm:left-1/2 left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
                ${
                  id % 2 === 0
                    ? "sm:ml-16 sm:mr-auto text-left"
                    : "sm:mr-16 sm:ml-auto text-left"
                } mt-12 sm:mt-0`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-gray-300 mt-1">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
