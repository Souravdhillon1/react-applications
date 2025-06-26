import React from "react";
import { Link } from "react-router-dom";


function Services() {
  const services = [
    {
      title: "🌐 Web Development",
      description:
        "I build responsive, accessible, and fast web apps using React.js, Tailwind CSS, and Node.js. Clean UI, reusable components, and scalable architecture guaranteed.",
    },
    {
      title: "🤖 AI Projects – Checkers Game",
      description:
        "Developed an AI-powered Checkers game using the Minimax algorithm with Alpha-Beta Pruning. The AI evaluates board states efficiently and makes intelligent, strategic moves in real time.",
    },
    {
      title: "🌿 Machine Learning – Weed Detection",
      description:
        "Built a weed detection system using computer vision and ML to identify unwanted plants in fields. The system assists autonomous robots in smart farming tasks like targeted spraying or weed removal.",
    },
    {
      title: "📚 DSA & Competitive Coding",
      description:
        "Need help with LeetCode, Codeforces, or interview prep? I provide 1-on-1 mentoring, mock interviews, and personalized learning plans and tips.",
    },
    {
      title: "🚀 Open Source Contributions",
      description:
        "I actively contribute to and mentor in open-source projects. I can help you set up repos, write clean docs, and guide you in making impactful pull requests.",
    },
  ];

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Services I Provide</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-lg">
        Want to collaborate or learn more? Reach out via the{" " }
        <Link to="/contact" className="text-blue-400 underline hover:text-blue-300">
          Contact 
      </Link>{" "}

        page!
      </p>
    </div>
  );
}

export default Services;
