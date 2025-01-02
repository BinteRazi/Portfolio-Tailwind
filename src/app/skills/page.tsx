import React from "react";

const SkillPage = () => {
  // Array of skills and their corresponding logo paths
  const skills = [
    { name: "Next.js", src: "/images/tech/next.js.png" },
    { name: "React", src: "/images/tech/react.png" },
    { name: "Tailwind", src: "/images/tech/tailwind.png" },
    { name: "Visual Studio Code", src: "/images/tech/visual.svg" },
    { name: "TypeScript", src: "/images/tech/typscript.png" },
    { name: "JavaScript", src: "/images/tech/javascript.png" },
    { name: "HTML", src: "/images/tech/html.png" },
    { name: "CSS", src: "/images/tech/css.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-950 px-4 py-8">
      <div className="flex flex-col gap-4 max-w-[90%] lg:max-w-[80%] text-center items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500 text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] leading-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500">
              Technologies
            </span>
          </h1>
          <p className="text-white max-w-[600px] text-xs sm:text-sm md:text-base leading-snug">
            Showcase of my expertise and technologies I have worked with.
          </p>
        </div>

        {/* Skills Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 rounded-lg p-4 hover:bg-white/20 shadow-md transition-all duration-300 transform hover:scale-105"
              aria-label={skill.name}
            >
              <img
                src={skill.src}
                alt={`${skill.name} Logo`}
                className="w-[50px] h-[50px]"
              />
              <p className="text-white text-xs sm:text-sm font-medium mt-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
