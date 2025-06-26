import React from "react";

function Contact() {
  return (
    <div className="text-white p-8 mt-20 ml-10 mr-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
        <form
          action="https://formspree.io/f/xvgraplb"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-8 text-lg">
        Or contact me directly:<br />
        <p className="mt-4">📧 Email: <span className="text-gray-300">souravdhillon50@gmail.com</span></p>
        <p>🔗 LinkedIn: <span className="text-gray-300">linkedin.com/in/sourav8singh</span></p>
        <p>🐱 GitHub: <span className="text-gray-300">github.com/Souravdhillon1</span></p>
      </div>
    </div>
  );
}

export default Contact;
