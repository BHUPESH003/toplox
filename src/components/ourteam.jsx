import { Settings } from "lucide-react";
import React from "react";

const Ourteam = () => {
  return (
    <>
      <div className="p-10 lg:p-20">
        <span className="flex col gap-2">
          <Settings className="text-orange-400" />{" "}
          <h1 className="text-black font-bold lg:text-xl">OUR TEAM</h1>
        </span>
        <span className="text-black text-3xl lg:text-6xl ">
          Streamlined processes for
          <h1 className="text-black text-3xl lg:text-6xl font-bold">
            optimal efficiency
          </h1>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          <div>
            <img src="/team-1.jpg" className="rounded-xl"></img>
            <h1 className="text-black text-center font-semibold py-3">
              Ronald Richards
            </h1>
            <p className="text-center">Manufacturing Executive</p>
          </div>
          <div>
            <img src="/team-2.jpg" className="rounded-xl"></img>
            <h1 className="text-black text-center font-semibold py-3">
              Ronald Richards
            </h1>
            <p className="text-center">Manufacturing Executive</p>
          </div>
          <div>
            <img src="/team-3.jpg" className="rounded-xl"></img>
            <h1 className="text-black text-center font-semibold py-3">
              Ronald Richards
            </h1>
            <p className="text-center">Manufacturing Executive</p>
          </div>
          <div>
            <img src="/team-4.jpg" className="rounded-xl"></img>
            <h1 className="text-black text-center font-semibold py-3">
              Ronald Richards
            </h1>
            <p className="text-center">Manufacturing Executive</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
