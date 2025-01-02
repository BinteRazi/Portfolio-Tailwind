"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";


interface Props {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

const projects = [
  {
    title: "Static Interactive Resume",
    desc: "A HTML and TypeScript-based app that allows users to create, edit, and showcase their professional resumes interactively.",
    image: "/images/project_01.png",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Dynamic Resume Builder",
    desc: "This Resume Builder enables users to create, edit, and preview professional resumes interactively with a sleek design.",
    image: "/images/project_02.jpg",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Editable Resume Builder",
    desc: "An editable resume builder that lets users customize and update their resumes effortlessly with a user-friendly interface.",
    image: "/images/project_03.jpg",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Website Landing Page",
    desc: "A simple website landing page built with Next.js, focusing on ease of development, and quick setup.",
    image: "/images/project_04.jpg",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Figma Head Design",
    desc: "A Figma design converted into a web interface using Next.js, ensuring fast performance and seamless user experience.",
    image: "/images/project_05.jpg",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Figma Landing Page Design",
    desc: "A Next.js landing page is a high-performance, SEO-friendly, and responsive web page designed to showcase a product, service, or brand.",
    image: "/images/project_06.jpg",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
];

const ProjectCard = ({ title, desc, image, tags }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      onClick={handleFlip}
      className="w-full max-w-md cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
      style={{ perspective: "1000px" }}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {/* Front Side */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Back Side */}
      <div className="w-full h-64 bg-white/10 shadow-lg hover:bg-white/200 text-white p-4 flex flex-col justify-between rounded-lg">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-900 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectList = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-blue-950">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500">
          My Projects
        </h2>
        <p className="text-gray-300 mt-2">
          Welcome to my portfolio! Here, you will explore a collection of my projects showcasing my expertise in web development and design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8 w-full ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
