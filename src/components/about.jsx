"use client"
import { Cog, Settings, Star } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-28 px-10 lg:px-16 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="transition-transform duration-500 hover:scale-105">
            <img src="/about-img-1.jpg" alt="Factory exterior" className="rounded-xl shadow-md"></img>
          </div>
          <div className="flex col justify-between px-12 mt-10">
            <h1 className="text-orange-500 text-5xl font-bold transition-all duration-300 hover:text-orange-600">25+</h1>
            <h1 className="text-black text-xl font-medium">
              Year Of <br />
              Experience
            </h1>
          </div>
          <div className="absolute top-32 right-10 transition-transform duration-500 hover:scale-105">
            <img
              src="/about-img-2.jpg"
              alt="Manufacturing process"
              className="rounded-xl border-8 border-white shadow-lg h-60 md:h-auto"
            ></img>
          </div>
        </div>
        <div className="mt-40 md:mt-0 md:pl-8">
          <span className="flex items-center gap-2">
            <Settings className="text-orange-500 animate-spin-slow" />{" "}
            <h1 className="text-black font-bold">ABOUT US</h1>
          </span>
          <h1 className="text-black text-4xl lg:text-6xl mt-5 leading-tight">
            Building quality through
          </h1>
          <h1 className="text-black text-4xl lg:text-6xl font-bold mt-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            industrial innovation
          </h1>
          <p className="py-7 text-gray-700 leading-relaxed">
            At the heart of our operations is a commitment to delivering
            superior products through cutting-edge technology and innovative processes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-6">
            <div>
              <span className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                <Cog className="text-orange-500" />
                <h1 className="text-black font-medium">Sustainable Manufacturing</h1>
              </span>
              <span className="flex items-center gap-2 mt-3 hover:translate-x-1 transition-transform">
                <Cog className="text-orange-500" />
                <h1 className="text-black font-medium">Advanced Automation</h1>
              </span>
              <span className="flex items-center gap-2 mt-3 hover:translate-x-1 transition-transform">
                <Cog className="text-orange-500" />
                <h1 className="text-black font-medium">Efficient Production Processes</h1>
              </span>
              <span className="flex items-center gap-2 mt-3 hover:translate-x-1 transition-transform">
                <Cog className="text-orange-500" />
                <h1 className="text-black font-medium">Reliable Delivery Services</h1>
              </span>
              <button className="rounded-xl text-center w-44 h-12 bg-white text-black border-orange-500 border-2 mt-8 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-md">
                Learn More
              </button>
            </div>
            <div className="mr-0 lg:mr-14 mt-5 md:mt-0">
              <div className="bg-[#f5f5f5] text-center rounded-xl py-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">4.9</h1>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-400" />
                  ))}
                </div>
                <h1 className="text-gray-700 mt-4 font-medium">15.5K Genuine Rating</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </>
  );
};

export default About;
