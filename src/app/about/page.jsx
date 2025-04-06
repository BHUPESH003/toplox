import Banner from "@/components/Banner";
import About from "@/components/about";
import Ourclient from "@/components/ourclient";
import Ourhistory from "@/components/ourhistory";
import Ourprocess from "@/components/ourprocess";
import Ourteam from "@/components/ourteam";
import Whatwedo from "@/components/whatwedo";
import {
  BadgeCheck,
  Cog,
  Factory,
  FactoryIcon,
  LucideFactory,
  Phone,
  Settings,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner title={"About Us"} />
      <About />
      <Ourhistory />
      <Whatwedo />
      <div className=" p-10 lg:p-20">
        <span className="flex col gap-2">
          <Settings className="text-orange-400" />{" "}
          <h1 className="text-black font-bold ">our key feature</h1>
        </span>
        <div className="flex flex-col lg:flex-row justify-between mt-5">
          <span className="text-black text-3xl lg:text-6xl ">
            Core strengths in
            <h1 className="text-black text-3xl lg:text-6xl font-bold">
              industrial innovation
            </h1>
          </span>
          <p className="mt-3">
            Our process is designed to maximize efficiency and quality at every
            stage <br />
            of production. By integrating advanced technologies and best
            practices, <br />
            we ensure seamless workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-14">
          <div className="p-10 border">
            <Factory size={40} className="text-yellow-400" />
            <h1 className="text-black font-medium text-xl mt-6">
              Advanced Technology Integration
            </h1>
            <p className="text-gray-400 mt-6">
              We integrate cutting-edge technologies into every aspect of our
              operations, enhancing efficiency, precision, and innovation to
              deliver superior industrial solutions.
            </p>
          </div>
          <div className="p-10 border">
            <Factory size={30} className="text-yellow-400" />
            <h1 className="text-black font-medium text-xl mt-6">
              Uncompromising Quality Standards
            </h1>
            <p className="text-gray-400 mt-6">
              We uphold the highest quality standards across all processes,
              ensuring consistency, reliability, and excellence in every product
              and service we deliver.
            </p>
          </div>
          <div className="p-10 border">
            <Factory size={30} className="text-yellow-400" />
            <h1 className="text-black font-medium text-xl mt-6">
              Continuous Innovation and R&D
            </h1>
            <p className="text-gray-400 mt-6">
              We prioritize ongoing research and development to drive continuous
              innovation, staying ahead of industry trends and creating advanced
              solutions that meet evolving market demands.
            </p>
          </div>
          <div className=" border">
            <img src="/features-box-image.jpg"></img>
          </div>
        </div>
      </div>
      <Ourprocess />
      <Ourteam />
      <Ourclient />
    </>
  );
};

export default Page;
