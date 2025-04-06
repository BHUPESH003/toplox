import { FactoryIcon, LucideFactory, Settings, Shield, BarChart } from "lucide-react";
import React from "react";

const Whatwedo = () => {
  return (
    <>
      <div className="bg-[#222222] grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20">
        <div className="px-6 sm:px-28">
          <span className="flex items-center gap-2">
            <Settings className="text-orange-400" />
            <h1 className="text-white font-bold text-xl">WHAT WE DO</h1>
          </span>
          <h1 className="text-white text-4xl sm:text-6xl mt-5">
            Innovative factory <br />
            and industry
          </h1>
          <h1 className="text-white text-4xl sm:text-6xl font-bold">
            solutions today
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mt-8 sm:mt-12">
            <div className="border border-gray-700 hover:border-orange-400 bg-[#222222] rounded-xl p-6 sm:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
              <FactoryIcon size={42} className="text-orange-400" />
              <h1 className="text-xl font-bold text-white mt-4">
                Automation <br />
                Solutions
              </h1>
              <p className="text-gray-300 mt-3">
                Streamlining processes through cutting-edge technology.
              </p>
            </div>
            <div className="bg-[#393939] border border-gray-700 hover:border-orange-400 rounded-xl px-6 sm:px-10 py-6 sm:py-10 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
              <Shield size={42} className="text-orange-400" />
              <h1 className="text-xl font-bold text-white mt-4">
                Quality Control
              </h1>
              <p className="text-gray-300 mt-3">
                Ensuring product excellence through rigorous testing and quality assurance protocols.
              </p>
            </div>
            <div className="bg-[#393939] border border-gray-700 hover:border-orange-400 rounded-xl px-6 sm:px-10 py-6 sm:py-10 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
              <BarChart size={42} className="text-orange-400" />
              <h1 className="text-xl font-bold text-white mt-4">
                Performance <br /> Analytics
              </h1>
              <p className="text-gray-300 mt-3">
                Data-driven insights to optimize your industrial operations and maximize efficiency.
              </p>
            </div>
            <div className="border border-gray-700 hover:border-orange-400 bg-[#222222] rounded-xl p-6 sm:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
              <LucideFactory size={42} className="text-orange-400" />
              <h1 className="text-xl font-bold text-white mt-4">
                Supply Chain <br />
                Management
              </h1>
              <p className="text-gray-300 mt-3">
                Optimizing distribution networks for reliability and cost-effectiveness.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-16">
            <div className="text-white flex items-center gap-2 font-medium">
              Let&apos;s make something great work together.
              <button className="text-orange-400 font-medium hover:text-orange-300 border-b border-orange-400 hover:border-orange-300 pb-0.5 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 px-10 lg:py-20">
          <img
            src="/what-we-do-image.jpg"
            className="w-full rounded-lg shadow-xl"
            alt="What We Do"
          />
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
