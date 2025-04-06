import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="relative bg-[url(/page-header-bg.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-14 py-6 md:py-10">
        <div>
          <img
            src="header-white-logo.svg"
            alt="Toplax Logo"
            className="h-8 md:h-10"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white font-medium">
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition">
              About Us
            </Link>
            <Link href="/services" className="hover:text-orange-400 transition">
              Services
            </Link>
            <Link href="/projects" className="hover:text-orange-400 transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-orange-400">
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2 text-white mt-4 md:mt-0">
          <Phone className="text-orange-400" />
          <h1 className="font-bold text-base md:text-lg">+01 123456789</h1>
        </div>
      </div>
      <hr className="relative z-10" />

      <h1 className="relative z-10 py-20 md:py-36 text-4xl md:text-7xl px-6 md:px-10 text-white text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
