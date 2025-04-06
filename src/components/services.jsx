import { Factory, Settings } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[url(/our-service-bg.jpg)] bg-cover bg-fixed py-32 px-6 sm:px-10">
      <div className="relative w-full max-w-screen-xl mx-auto text-white">
        <div className="flex items-center gap-2">
          <Settings className="text-orange-400" />
          <h1 className="font-bold text-lg sm:text-xl">SERVICES</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Comprehensive
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
              for industrial excellence
            </h1>
          </div>
          <div>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              We provide a wide range of services tailored to meet the unique
              needs of modern industries. From precision manufacturing to custom
              product design, automation, and efficient logistics.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl relative mt-16 shadow-lg">
        {[
          "Custom Manufacturing Solution",
          "Industrial Automation & Robotics",
          "Product Design & Prototyping",
          "Equipment Maintenance Support",
        ].map((title, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 sm:p-8 border-b sm:border-r last:border-r-0"
          >
            <Factory size={50} className="text-orange-400" />
            <h1 className="text-black text-xl font-medium mt-6">{title}</h1>
            <button className="mt-6 w-16 h-10 text-black bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center">
              →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
