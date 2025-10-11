"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full">
      {/* ---------- Top Bar ---------- */}
      <div className="bg-[#0B1F33] text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4 gap-2 md:gap-0">
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-yellow-400" />
              <span>5523 Research Park Drive, Suite 130</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+02 (2544) 547</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <p>
              <span className="font-semibold text-white">Global Certified:</span>{" "}
              ISO 9001:2024
            </p>
            <p>
              <span className="font-semibold text-white">Winner:</span>{" "}
              Construction award 2016
            </p>
            <div className="flex gap-3 text-white">
              <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
           
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
                MostaBuild
              </h2>
              <p className="text-xs text-gray-500 uppercase">
                Industry & Factory Solutions
              </p>
            </div>
          </div>

          {/* Center: Navigation */}
          <ul className="hidden lg:flex gap-8 text-[15px] font-medium text-gray-700 uppercase">
            <li className="text-yellow-500 border-b-2 border-yellow-500 cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              About
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Services
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Projects
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Pages
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Right: Cart + Button */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <BsCart2 className="text-2xl text-gray-700 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-md transition">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Navigation Highlight Bar ---------- */}
      <div className="bg-yellow-500 h-[4px] w-full"></div>
    </header>
  );
}
