import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-gray-100 mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-gray-400">
              Hello, I'm 
            </span> Nimra Razi</h1>
          <p className="text-yellow-50 mb-6 text-base sm:text-lg lg:text-xl w-3/4">
          "A passionate web developer skilled with modern frameworks and cutting-edge technologies."
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500 hover:bg-blue-400 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-pink-400 to-gray-500 hover:bg-blue-800 text-white mt-3">
              <span className="block bg-gray-900 hover:bg-pink-400 rounded-full px-5 py-2">Download Cv</span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" w-[350px] h-[350px] flex items-center justify-center overflow-hidden">
            <img src="./images/girl image.png" alt="hero image" className=" w-[350px] h-[350px] object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
