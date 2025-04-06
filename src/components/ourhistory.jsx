import { BadgeCheck, Settings } from "lucide-react";
import React from "react";

const Ourhistory = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 md:p-24">
        <span className="flex flex-col gap-2">
          <Settings className="text-orange-400" />
          <h1 className="text-black font-bold text-lg md:text-xl">
            OUR HISTORY
          </h1>
        </span>
        <div className="flex flex-col md:flex-row justify-between mt-5 ">
          <span className="text-black text-3xl md:text-6xl">
            Foundation of excellence
            <h1 className="text-black text-3xl md:text-6xl font-bold">
              in industry
            </h1>
          </span>
          <p className="text-base md:text-lg mt-4 md:mt-0 ">
            Built on a legacy of quality and innovation, we have established a
            strong <br />
            foundation in the industrial sector, consistently delivering
            reliable <br />
            solutions that drive progress and set industry standards.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-16 gap-6 md:gap-0">
          <div className="grid grid-cols-1 md:grid-cols-1 border bg-white rounded-xl overflow-hidden w-full md:w-1/3">
            <h1 className="text-lg font-medium py-4 px-6">
              In 1920 - Planning
            </h1>
            <h1 className="text-lg font-medium py-4 px-6 bg-orange-500 text-white">
              In 1922 - Journey Started
            </h1>
            <h1 className="text-lg font-medium py-4 px-6">
              In 1925 - Journey Progress
            </h1>
            <h1 className="text-lg font-medium py-4 px-6">
              In 1930 - Global Reach
            </h1>
            <h1 className="text-lg font-medium py-4 px-6">
              In 1940 - Industry Leadership
            </h1>
          </div>

          <div className="w-full md:w-2/3 pl-0 md:pl-10 flex flex-col justify-center mt-6 md:mt-0">
            <h1 className="text-black text-4xl md:text-5xl font-bold">
              Journey <span className="font-extrabold">started</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              Welcome to Industry, a leading industry innovator with a rich
              history of excellence. With a passion for precision and a
              commitment to quality, we have been empowering industries and
              driving progress.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <BadgeCheck className="text-orange-400" />
                <h1 className="text-sm md:text-lg">Quality Control System</h1>
              </div>
              <div className="flex items-center space-x-4">
                <BadgeCheck className="text-orange-400" />
                <h1 className="text-sm md:text-lg">
                  Building Quality Industrial
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <BadgeCheck className="text-orange-400" />
                <h1 className="text-sm md:text-lg">
                  Environmental Responsibility
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <BadgeCheck className="text-orange-400" />
                <h1 className="text-sm md:text-lg">
                  Building Quality Industrial
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-end mt-6 md:mt-0">
            <img
              src="/history-image-1.jpg"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourhistory;
