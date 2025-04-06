import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black px-10 lg:px-20 py-14 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Ready to work with us?</h1>
          <p className="mt-3 text-gray-400">
            Join us to experience cutting-edge industrial solutions that drive
            innovation, lasting success.
          </p>
        </div>

        <hr className="my-10 border-gray-600" />

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center ">
              <img src="/footer-logo.svg" />
            </div>
            <p className="mt-2 text-gray-400">
              We are committed to providing <br />
              personalized industrial solutions.
            </p>
            <div className="flex gap-3 mt-4">
              <Facebook size={20} className="text-orange-400  " />
              <Twitter size={20} className="text-orange-400 " />
              <Youtube size={20} className="text-orange-400 " />
              <Instagram size={20} className="text-orange-400 " />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold">Security</h2>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>+91 123654789</li>
                <li>info@domainname.com</li>
                <li>520, West Valley, Amin and minim</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-600" />

        <div className="text-center text-gray-400">
          Copyright © 2024 All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
