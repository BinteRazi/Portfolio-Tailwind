import React from "react";

const ContactForm = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-blue-950">
      <section className="relative z-10 w-full max-w-lg bg-white/10 rounded-lg shadow-lg p-8 hover:bg-white/20 transition-all duration-300" id="contact">
        <form className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500">
              Contact Us
            </h2>
            <p className="text-gray-300 mt-2">
              We did love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              name="message"
              rows={5}
              className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-bold text-white uppercase border border-white bg-gradient-to-r from-blue-500 via-pink-400 to-gray-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
      <div className="absolute inset-0 bg-gray-900 opacity-90 -z-10"></div>
    </div>
  );
};

export default ContactForm;
