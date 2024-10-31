"use client";
import React from "react";
import { LanguageContexts } from "@/contexts/languageContexts";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h2>Logo</h2>
        </div>
        <div className="flex gap-4">
          <input type="text" placeholder="Search" />
          <select name="" id="" className="text-[#2d2d2d]">
            <option value="en" className="text-[#2d2d2d]">
              English(united states){" "}
            </option>
            <option value="id" className="text-[#2d2d2d]">
              Indonesia(IDN){" "}
            </option>
          </select>
          <div>
            <a href="#" className="bg-[#eeee] text-[#2d2d2d]">
              Sign Up
            </a>
            <a href="#" className="bg-[#eeee] text-[#2d2d2d] ml-3">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
