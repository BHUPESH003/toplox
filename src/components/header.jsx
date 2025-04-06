"use client";
import { Cog, Menu, Phone, Settings } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="px-14 py-10 bg-[url(/hero-bg-1.jpg)] bg-center bg-cover ">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-4 bg-transparent z-50 relative">
            <div>
              <img src="header-white-logo.svg" alt="Logo" className="h-10" />
            </div>

            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="text-white w-8 h-8" />
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-0 left-0 right-0 w-full h-[80vh] rounded-xl bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-6 text-white z-50 transition-all duration-300">
                <button
                  className="absolute top-6 right-6 text-white text-3xl"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
                <Link href={"/"} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href={"/about"} onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
                <Link href={"/services"} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link href={"/projects"} onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
                <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-row items-center justify-between gap-6 text-white">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/projects"}>Projects</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>

            <div className="hidden lg:flex text-orange-400 items-center gap-2">
              <Phone />
              <h1 className="text-white font-bold text-xl">+91 1234567890</h1>
            </div>
          </div>
          <hr className=" w-full h-1 mt-5" />
          <div className=" py-20 lg:py-40">
            <span className="flex col gap-2">
              <Settings className="text-orange-400" />{" "}
              <h1 className="text-white font-bold">WELCOME OUR INDUSTRY</h1>
            </span>
            <h1 className="text-white text-6xl mt-6">Excellence innovating</h1>
            <h1 className="text-white text-6xl mt-2">industry for today</h1>
            <p className="text-white mt-5">
              At the heart of our operations is a commitment to delivering
              superior products through cutting-
              <br />
              edge technology and innovative processes.
            </p>
            <button className="text-black font-semibold bg-white text-center w-44 h-10 mt-10 rounded-xl">
              Explore More
            </button>
          </div>
          <hr className=" w-full h-1 mt-5" />
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between px-6 lg:px-24 mt-4 lg:mt-10 gap-6 lg:gap-0">
            <span className="flex flex-col lg:flex-row items-center gap-2">
              <Cog className="text-orange-400" />
              <h1 className="text-white font-bold">
                Advanced Manufacturing Solutions
              </h1>
            </span>
            <span className="flex flex-col lg:flex-row items-center gap-2">
              <Cog className="text-orange-400" />
              <h1 className="text-white font-bold">
                Quality Assurance Systems
              </h1>
            </span>
            <span className="flex flex-col lg:flex-row items-center gap-2">
              <Cog className="text-orange-400" />
              <h1 className="text-white font-bold">
                State-of-the-Art Technology
              </h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
