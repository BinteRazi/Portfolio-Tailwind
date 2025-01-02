import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Socials = [
  { name: "Facebook", src: "/icons/Facebook.png" },
  { name: "Twitter", src: "/icons/Twitter.png" },
  { name: "LinkedIn", src: "/icons/LinkedIn.png" },
];

const Nav = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      {/* Logo Section */}
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="Company logo"
            width={40}
            height={40}
            className="w-[40] h-[40] object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">N'R</h1>
      </div>

      {/* Mobile Menu Icon */}
      <button
        type="button"
        className="md:hidden flex items-center justify-center text-white"
        aria-label="Open navigation menu"
      >
        <AiOutlineMenu size={30} />
      </button>

      {/* Social Icons */}
      <div className="flex flex-row gap-5 mb-2 bg-white rounded-full justify-between items-center border-4 border-gray-500 p-1">
        {Socials.map((social) => (
          <img
            key={social.name}
            src={social.src}
            alt={`${social.name} icon`}
            width={28}
            height={28}
            className="w-[28px] h-[28px] object-contain "
          />
        ))}
      </div>
    </div>
  );
};

export default Nav;
