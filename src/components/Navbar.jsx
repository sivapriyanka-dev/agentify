import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-2 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      {/* 🔥 Bigger Logo */}
      <div className="flex items-center">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="h-28 sm:h-32 lg:h-36 xl:h-40"
          alt="logo"
        />
      </div>

      {/* 🔥 Menu */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[var(--color-primary)] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      {/* 🔥 Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />

        {/* Mobile menu */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Connect button */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
