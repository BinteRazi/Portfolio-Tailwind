"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center">
      <section className="text-white w-full" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <img 
            src="/images/Web-Developer.jpg" 
            width={500} 
            height={500} 
            alt="About Me" 
            className="rounded-lg shadow-lg"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold  mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500">About Me</h2>
            <p className="text-base lg:text-lg">
            I'm a creative and passionate web developer with a flair for building interactive, visually stunning, and highly functional web applications.
             Leveraging cutting-edge technologies like React, Next.js, TypeScript, and Tailwind CSS, I bring ideas to life with precision and creativity.
              With a focus on delivering seamless user experiences and innovative solutions, I strive to transform complex concepts into engaging digital 
              realities that leave a lasting impact. </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
