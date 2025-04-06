import { Settings, Star } from "lucide-react";
import React from "react";

const Ourclient = () => {
  return (
    <>
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 p-10 lg:px-20 lg:py-24">
        <div>
          <img src="/testimonial-image.jpg" className="rounded-xl"></img>
        </div>
        <div className="py-12">
          <span className="flex col gap-2">
            <Settings className="text-orange-400" />{" "}
            <h1 className="text-black">OUR CLIENT SAY</h1>
          </span>
          <h1 className="text-black text-5xl mt-7">
            What our satisfied clients
          </h1>
          <h1 className="text-black text-5xl font-bold mt-1">are saying</h1>
          <div className="flex col mt-12">
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
          </div>
          <p className="text-xl text-gray-500 mt-6">
            The team&apos;s attention to detail and commitment to quality
            <br /> exceeded our expectations. They delivered on time, and their
            <br />
            innovative solutions improved our production efficiency by 30%.
            <br /> Highly recommended!
          </p>
          <div className="flex mt-10 justify-between">
            <div className="flex flex-col lg:flex-row gap-4">
              <img src="/author-1.jpg" className=" rounded-xl"></img>
              <div>
                <h1 className="text-black text-xl font-semibold">
                  Rohit Sharma
                </h1>
                <p className="text-gray-400">Homeowner</p>
              </div>
            </div>
            <div className="flex col gap-5 ">
              <button className="w-14 h-12 bg-orange-500 text-white rounded-xl">
                ←
              </button>
              <button className="w-14 h-12 bg-orange-500 text-white rounded-xl">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourclient;
