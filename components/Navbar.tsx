"use client";
import React from "react";
import Link from "next/link";
import { Sun, MoonStar } from "lucide-react";
import useDarkMode from "./hooks/useDarkMode";
import { inconsolata } from "@/lib/fonts";

type Props = {};

const Navbar = (props: Props) => {
  const { change, mode } = useDarkMode();

  const getIcon = () => {
    if (mode === "light")
      return <MoonStar size={20} className="text-dark-200" />;
    return <Sun size={20} className="text-dark-500" />;
  };

  const getNextMode = () => {
    if (mode === "light") return "dark";
    return "light";
  };

  return (
    <nav className="flex py-5 px-4 justify-between">
      <Link
        href="/"
        className={`${inconsolata.className} text-base md:text-xl font-semibold text-brand dark:text-brand-light flex items-baseline transition-all leading-none`}
      >
        <span className="text-xs md:text-sm text-light-100 dark:text-dark-500">
          &lt;
        </span>
        ULinks
        <span className="text-xs md:text-sm text-light-100 dark:text-dark-500">
          /&gt;
        </span>
      </Link>

      <div className="text-xl mx-2 sm:mx-4">
        <button
          title={`Switch to ${getNextMode()} mode`}
          onClick={() => change(mode === "light")}
          style={{
            transform: `rotate(${mode === "dark" ? "-180deg" : "0deg"})`,
          }}
          className="rounded-full p-1 sm:p-2 group transition-all hover:shadow-spread-xs"
        >
          {getIcon()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
