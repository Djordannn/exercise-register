"use client";
import Login from "./login";
import Image from "../../../node_modules/next/image";

import React, { useState, useRef, useEffect, act } from "react";
import { PiEyeClosedLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { callAPI } from "@/config/axios";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";

const HomeLogin = () => {
  const [type, setType] = useState("password");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Get data email & password
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  // console.log(email);

  const dispatch = useAppDispatch();
  const onSignIn = async () => {
    try {
      const response = await callAPI.get(
        `/users?email=${email}&password=${password}`
      );
      localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
      console.log(response.data);
      dispatch(setSignIn(response.data[0])); // store data to global store redux
    } catch (error) {
      console.log(error);
    }
  };

  let icon;
  let activeType;
  if (type === "password") {
    if (isVisible) {
      icon = <PiEyeLight />;
      activeType = "text";
    } else {
      icon = <PiEyeClosedLight />;
      activeType = "password";
    }
  }

  return (
    <div>
      <div className="flex items-start h-[570px] bg-[url('../image/mountain.jpg')] bg-no-repeat bg-cover">
        <div className="w-[50%]"></div>
        <div className="w-[50%] mx-auto bg-[#eeee] rounded-xl text-[#2d2d2d] rounded-tl-[5%] rounded-bl-[5%] flex flex-col gap-4 p-20">
          <h2 className="text-3xl mb-2">LogIn now</h2>
          <div className="flex flex-col gap-4">
            <div>
              <Login
                label="Email"
                type="email"
                value={email}
                placeholder="Type your email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <Login
                type={activeType}
                label="Password"
                value={password}
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
            <button
              type="button"
              onClick={onSignIn}
              className="bg-black text-white w-[30%] p-4 mt-4"
            >
              Log In
            </button>
          </div>

          <p className="pt-4 text-center">
            not have an account? <a href="/signUp">register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
