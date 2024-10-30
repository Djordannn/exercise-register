"use client";
import Login from "./login";
import Image from "../../../node_modules/next/image";

import React, { useState, useRef, useEffect, act } from "react";
import { PiEyeClosedLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";

const HomeLogin = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (type === "password");
  let icon;
  let activeType;
  if (isVisible) {
    icon = <PiEyeLight />;
    activeType = "text";
  } else {
    icon = <PiEyeClosedLight />;
    activeType = "password";
  }

  return (
    <div className="flex items-center h-[800px] bg-[url('../image/mountain.jpg')] bg-no-repeat bg-cover">>
      <div className="w-[50%]"></div>
      <div className="w-[50%] mx-auto bg-[#eeee] rounded-xl text-[#2d2d2d] rounded-tl-[5%] rounded-bl-[5%] flex flex-col gap-4 p-20">
        <h2 className="text-3xl mb-2">LogIn now</h2>
        <div className="flex flex-col gap-4">
          <div>
            <Login label="Email" type="email" placeholder="Type your email" />
          </div>
          <div className="relative">
            <Login
              ref={passwordRef}
              type={activeType}
              label="Password"
              placeholder="Type your password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="absolute right-3 bottom-1 text-3xl cursor-pointer"
              onClick={() => setIsVisible(!isVisible)}
            >
              {icon}
            </button>
          </div>
        </div>

        <div>
          <div className="">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="">
              I agree to our{" "}
              <a href="#" className="font-semibold">
                Terms of use
              </a>
              {"  "}
              and{" "}
              <a href="#" className="font-semibold">
                Privacy policy
              </a>{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" className="mr-4" />
            <label htmlFor="">I am also to receive message and emails.</label>
          </div>
          <button className="bg-black text-white w-[30%] p-4 mt-4">
            Log In
          </button>
        </div>

        <p className="pt-4 text-center">
          not have an account? <a href="/signUp">register</a>
        </p>
      </div>
    </div>
  );
};

export default HomeLogin;
