import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-semibold xl:leading-[95px] max-w-5xl">
        Build smarter with{" "}
        <span className="bg-gradient-to-r from-[#2bb7da] via-[#3b82f6] to-[#7c3aed] bg-clip-text text-transparent">
          Agentify
        </span>
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-300">
        Turn your ideas into powerful AI-driven solutions. Automate workflows,
        enhance productivity, and scale faster with intelligent agents.
      </p>

      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 p-1.5 pr-4 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur">
        <img src={assets.group_profile} alt="users" />
        <p className="text-xs font-medium">Trusted by 1M+ users worldwide</p>
      </div>
    </div>
  );
};

export default Hero;
