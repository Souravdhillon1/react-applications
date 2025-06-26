import React from "react";

function About() {
  return (
    <div className="flex justify-center items-start min-h-screen mt-20 px-4">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>

        <p className="text-lg mb-4">
          Hello! I'm <strong>Sourav Singh</strong>, a passionate Computer Science student at <strong>NIT Uttarakhand</strong>, deeply interested in Software and Web Development, AI & ML, and Competitive Programming.
        </p>

        <p className="text-lg mb-4">
          I work primarily with <strong>React.js</strong>, <strong>C++</strong>, <strong>Python</strong>, and enjoy building responsive and interactive web applications. I'm also exploring <strong>AI</strong>, <strong>ML</strong>, and <strong>OpenCV</strong> projects.
        </p>

        <ul className="list-disc list-inside text-lg mb-4 space-y-1">
          <li>Python Summer Trainee at Symbiosis Technology (Python and GUI)</li>
          <li>Top 20% in LeetCode Weekly Contests</li>
          <li>Over 600+ questions on LeetCode</li>
          <li>100+ questions on GFG & Codestudio</li>
          <li>Selected for GSoC 2025 (OpenCV)</li>
          <li>Worked on various AI and ML projects</li>
        </ul>

        <p className="text-lg mb-4">
          I’m currently working on deepening my frontend skills and contributing to open-source. I’m also actively preparing for software development roles.
        </p>

        <p className="text-lg text-center">
          Want to collaborate or just say hi? Head over to the{" "}
          <a href="/contact" className="text-blue-400 underline hover:text-blue-300">
            Contact
          </a>{" "}
          page!
        </p>
      </div>
    </div>
  );
}

export default About;
