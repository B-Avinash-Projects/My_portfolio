import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-15 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section title */}
      <div className="text-center mb-16 ">
        <h2 className="font-bold  text-white text-4xl justify-center">
          EXPERIENCE
        </h2>
        <div className=" w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 font-bold lg:large">
           A collection of my academic and self-learning experience.
        </p>
      </div>

      <div  className="flex flex-col space-y-10 w-100">
        {/* box 1 proffessional certificate*/}
        <div className="bg-gray-700 rounded-lg w-full shadow-lg p-6">
          <h3 className="text-white text-xl font-semibold">IBM Full Stack Developer Proffesional Certificates</h3>
          <p className="text-sm text-gray-400 font-semibold mt-1">Coursera (Offered by IBM) | completed: [august, 2025]</p>
          <ul className=" list-disc list-inside mt-4 text-gray-300 font-semibold space-y-2">
            <li>Learned full-stack development with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.</li>
            <li>Gained practical experience in developing and deploying cloud-based applications</li>
            <li>Built and showcased multiple mini-projects as part of the certification.</li>
          </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-700 rounded-lg w-full shadow-lg p-6">
          <h3 className="text-white text-xl font-semibold">Self-Learning & Skill Development</h3>
          <p className="text-sm text-gray-400 font-semibold mt-1">Ongoing</p>
          <ul className=" list-disc list-inside mt-4 text-gray-300 font-semibold space-y-2">
            <li>Actively learning Java, Data Structures & Algorithms, and modern web technologies.</li>
            <li>Developing multiple personal projects ranging from portfolio websites to full-stack applications to apply knowledge in real-world scenarios</li>
            <li>Maintaining projects on GitHub, focusing on clean code practices and continuous improvement</li>
          </ul>
          </div>
        </div>
    </section>
  );
};

export default Experience;
