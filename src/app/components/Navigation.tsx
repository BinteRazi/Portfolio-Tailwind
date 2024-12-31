"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const NavLinks = [
  { name: "Home", Link: "/", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>🏠</span> },
  { name: "About", Link: "/about", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>ℹ️</span> },
  { name: "Projects", Link: "/projects", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>📁</span> },
  { name: "Skills", Link: "/skills", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>💡</span> },
  { name: "Contact", Link: "/contact", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>📞</span> },
];

const Navigation = () => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[60%] max-w-lg rounded-full flex justify-between items-center border bg-black border-white px-4 py-4 shadow-lg"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.Link}
          className={`flex items-center space-x-2 p-2 transition-colors duration-200 ${
            path === nav.Link ? "text-blue-600" : "text-white hover:text-gray-300"
          }`}
        >
          <nav.icon className="w-6 h-6" />
          <span className="hidden sm:inline">{nav.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
