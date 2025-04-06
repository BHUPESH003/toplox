import Banner from "@/components/Banner";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner title={"Projects"} />

      <div className="p-6 md:p-20">
        <ul className="flex flex-wrap gap-4 md:gap-10 items-center justify-center py-8 md:py-16 text-sm md:text-base">
          <li className="text-orange-400 font-bold">All</li>
          <li className="font-bold">Automation</li>
          <li className="font-bold">Development</li>
          <li className="font-bold">Infrastructure</li>
          <li className="font-bold">Manufacturing</li>
          <li className="font-bold">Sustainability</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div>
            <img src="/project-1.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Total Quality Management Implementation
            </h1>
          </div>
          <div>
            <img src="/project-2.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Advanced Research in Material Science
            </h1>
          </div>
          <div>
            <img src="/project-3.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Workplace Safety Enhancement Initiative
            </h1>
          </div>
          <div>
            <img src="/project-4.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Robotic Process Automation Deployment
            </h1>
          </div>
          <div>
            <img src="/project-5.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Energy-Efficient Manufacturing Systems
            </h1>
          </div>
          <div>
            <img src="/project-6.jpg" className="rounded-2xl w-full" />
            <h1 className="text-black font-bold text-center py-4 md:py-5 text-lg md:text-xl">
              Redesigning Factory Layouts for Efficiency
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
