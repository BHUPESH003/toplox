import { CirclePlay, Settings } from "lucide-react";
import React from "react";

const Ourstory = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row mt-20 gap-10 lg:gap-20 px-5 sm:px-10 lg:px-20">
          <div className="gap-10 lg:gap-20">
            <div className="flex items-center gap-2">
              <Settings className="text-orange-400" />
              <h1 className="font-bold text-lg sm:text-xl">OUR STORY</h1>
            </div>
            <h1 className="text-black font-medium text-3xl sm:text-4xl lg:text-5xl mt-5">
              Transforming industries
            </h1>
            <h1 className="text-black font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
              with innovative efficient <br className="hidden sm:block" />{" "}
              solutions
            </h1>
          </div>
          <div className="flex flex-col xl:flex-row gap-5 lg:gap-10">
            <img
              src="/our-story-header-img-1.jpg"
              className="rounded-xl w-full lg:w-auto"
            ></img>
            <img
              src="/our-story-header-img-2.jpg"
              className="rounded-xl w-full lg:w-auto"
            ></img>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row p-8 lg:p-20 gap-10">
          <div>
            <img src="/our-story-img.jpg" className="rounded-xl"></img>
          </div>
          <div className="py-10">
            <p>
              We specialize in revolutionizing industries by delivering
              innovative, efficient <br /> solutions that enhance productivity
              and streamline processes. Through advanced <br />
              technologies, precision engineering, and sustainable practices.
            </p>
            <hr className="w-full h-1 mt-16"></hr>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-10 mt-16 gap-5 sm:gap-10">
              <div className="text-center">
                <h1 className="text-orange-400 font-bold text-4xl sm:text-5xl">
                  10K+
                </h1>
                <h1 className="text-lg sm:text-xl font-semibold mt-1">
                  Completed Projects
                </h1>
              </div>
              <div className="text-center">
                <h1 className="text-orange-400 font-bold text-4xl sm:text-5xl">
                  15K+
                </h1>
                <h1 className="text-lg sm:text-xl font-semibold mt-1">
                  Satisfied Customers
                </h1>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <h1 className="text-orange-400 font-bold text-4xl sm:text-5xl">
                  10K+
                </h1>
                <h1 className="text-lg sm:text-xl font-semibold mt-1">
                  Years Of Mastery
                </h1>
              </div>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-10">
              <div className="flex sm:flex-row justify-center gap-5">
                <img src="/story-client-img-1.jpg" className="rounded-full " />
                <img src="/story-client-img-2.jpg" className="rounded-full " />
                <img src="/story-client-img-3.jpg" className="rounded-full " />
              </div>

              <div className="flex   items-center  gap-5 ">
                <CirclePlay size={40} className="text-orange-400 " />
                <h1 className="uppercase text-lg sm:text-xl mt-2">
                  Watch Intro
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
