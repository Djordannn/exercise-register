"use client";

import SignUp from "./signUp/page";

export default function Home() {
  return (
    <div className="mx-auto w-[50%] text-center mt-[22rem]">
      <h1 className="text-4xl mb-5">Hello World</h1>
      <a href="/signUp" className="bg-black text-white py-3 px-10">
        Sign Up
      </a>
    </div>
  );
}
