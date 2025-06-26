import React from "react";
import { Link } from "react-router-dom";
function Skills() {
  const skills = [
    { name: "C++", level: "Advanced" },
    { name: "C", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "OpenCV", level: "Beginner" },
    { name: "Node.js", level: "Basic" },
    { name: "Express.js", level: "Intermediate" },
    { name: "Software Development", level: "Intermediate" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "DSA (Competitive Programming)", level: "Advanced" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
  ];

  return (
    <div className="text-white p-8 mt-20 ml-10 mr-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <p className="text-gray-400">Proficiency: {skill.level}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-lg">
        I'm always learning and expanding my skill set. Let's build something together! Head over to the{" "}
        <Link to="/contact" className="text-blue-400 underline hover:text-blue-300">
          Contact
      </Link>{" "}
        page.
      </p>
    </div>
  );
}

export default Skills;
