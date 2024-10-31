"use client";
import SignUp from "./signup";
import Image from "../../../node_modules/next/image";
import React, { useState, useRef, useEffect, act } from "react";
import { PiEyeClosedLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { callAPI } from "@/config/axios";

const HomeSignUp = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const name = firstName + " " + lastName;

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

  const onSignUp = async () => {
    try {
      // lengkapi fungsi ini hingga bisa menambah data ke file db.json
      const res = await callAPI.post("/users", {
        name: { name },
        email: { email },
        password: { password },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   if (passwordRef.current) {
  //     console.log("Ref from password INPUT :", passwordRef.current.value);
  //   }

  return (
    <div className="flex items-center h-[800px] bg-[url('../image/mountain.jpg')] bg-no-repeat bg-cover">
      <div className="w-[50%]">{/* <h1>Hello</h1> */}</div>
      <div className="w-[50%] mx-auto bg-[#eeee] rounded-tl-[5%] rounded-bl-[5%] text-[#2d2d2d] mt-1 flex flex-col gap-4 p-20">
        <h2 className="text-3xl mb-2">Register now</h2>
        <div className="flex gap-4">
          <div className="w-[48%]">
            <SignUp
              label="First Name"
              type="text"
              placeholder="Type your first name"
              onChange={(e: any) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="w-[48%]">
            <SignUp
              label="Last Name"
              type="text"
              placeholder="Type your last name"
              onChange={(e: any) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <SignUp
          label="Email"
          type="text"
          placeholder="Type your email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <SignUp
          label="Phone"
          type="text"
          placeholder="+62"
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
        <div className="relative">
          <SignUp
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
            onClick={onSignUp}
            className="bg-black text-white w-[30%] p-4 mt-4"
          >
            Submit
          </button>
        </div>

        <p className="pt-4 text-center">
          Already have an account? <a href="/logIn">login</a>
        </p>
      </div>
    </div>
  );
};

export default HomeSignUp;
