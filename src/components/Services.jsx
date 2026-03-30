import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {
  const servicesData = [
    {
      title: "AI Automation",
      description:
        "Streamline your workflows with intelligent automation powered by AI agents.",
      icon: assets.ads_icon,
    },
    {
      title: "AI Content Generation",
      description:
        "Create high-quality content instantly using advanced AI-driven tools.",
      icon: assets.marketing_icon,
    },
    {
      title: "Custom AI Solutions",
      description:
        "Build tailored AI solutions to solve your unique business challenges.",
      icon: assets.content_icon,
    },
    {
      title: "Data & Insights",
      description:
        "Leverage data-driven insights to make smarter and faster decisions.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="scroll-mt-24 relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white"
    >
      {/* Background Image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-[110px] -left-[70px] -z-10 dark:hidden"
      />

      {/* Title */}
      <Title
        title="What we offer"
        desc="Powerful AI solutions designed to automate workflows, boost productivity, and scale your business."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <img src={service.icon} alt="" className="w-10 h-10" />

            <h3 className="text-lg font-semibold">{service.title}</h3>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
