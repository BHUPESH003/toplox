import { Settings } from "lucide-react";
import React from "react";

const Ourprocess = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] p-10 lg:p-20">
        <span className=" flex gap-2">
          <Settings className="text-orange-400" />{" "}
          <h1 className="text-black font-bold text-xl">OUR PROCESS</h1>
        </span>
        <div className="flex flex-col lg:flex-row justify-between mt-5">
          <span className="text-black text-3xl lg:text-5xl ">
            Streamlined processes for
            <h1 className="text-black text-3xl lg:text-5xl font-bold mt-1">
              optimal efficiency
            </h1>
          </span>
          <p className="sm:mt-2">
            Our process is designed to maximize efficiency and quality at every
            stage <br />
            of production. By integrating advanced technologies and best
            practices, <br />
            we ensure seamless workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16">
          <div>
            <img src="/our-process-image.jpg" className="rounded-xl"></img>
          </div>
          <div className="py-10">
            <div className="flex flex-col lg:flex-row  rounded-xl py-6">
              <div className="px-6 py-2">
                <h1 className="text-6xl text-[#ff9900] text-center lg:text-start font-bold">
                  01
                </h1>
              </div>
              <div className=" text-black ">
                <h1 className="font-bold text-xl text-center lg:text-start">
                  Understanding Your Needs
                </h1>
                <p className="mt-2 text-center lg:text-start">
                  We begin by thoroughly assessing your requirements and <br />
                  objectives to develop a tailored approach.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  rounded-xl mt-14">
              <div className="px-6 py-2">
                <h1 className="text-6xl font-bold text-[#ff9900] text-center lg:text-start">
                  02
                </h1>
              </div>
              <div className="">
                <h1 className="font-bold text-xl text-center lg:text-start">
                  Design and Planning
                </h1>
                <p className="mt-2 text-center lg:text-start">
                  Our team collaborates to create detailed project plans,
                  ensuring <br />
                  all aspects of the process.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  rounded-xl mt-14">
              <div className="px-6 py-2">
                <h1 className="text-6xl font-bold text-[#ff9900] text-center lg:text-start">
                  03
                </h1>
              </div>
              <div className=" ">
                <h1 className="font-bold text-xl text-center lg:text-start">
                  Implementation
                </h1>
                <p className="mt-2 text-center lg:text-start">
                  Utilizing advanced technologies and skilled personnel, we
                  <br /> execute the project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourprocess;
