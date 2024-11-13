"use client";

import React, { useState, useRef, useEffect, act } from "react";
import { callAPI } from "@/config/axios";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useRouter } from "../../../node_modules/next/navigation";
import AuthGuard from "@/guard/authGuard";
import FormInput from "@/components/formInput";

interface ISignInPageProps {}

const SignIn: React.FC<ISignInPageProps> = (props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onSignIn = async () => {
    try {
      const res = await callAPI.get(
        `/users?email=${email}&password=${password}`
      );
      console.log("Check SignIn Response : ", res.data);
      localStorage.setItem("dataUser", JSON.stringify(res.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[8%] py-24 bg-slate-400 h-[90vh] flex items-center justify-center text-white">
      <div className="w-[40%] p-6 bg-slate-800 mx-auto">
        <h1 className="py-4 text-3xl">SignIn</h1>
        <div className="flex flex-col gap-4">
          <FormInput
            type="text"
            label="Email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            label="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <div className="mt-3">
            <button
              type="button"
              onClick={onSignIn}
              className="bg-slate-400 py-1 px-4"
            >
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
