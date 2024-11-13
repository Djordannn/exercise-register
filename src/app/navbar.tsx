"use client";
import React from "react";
import { LanguageContexts } from "@/contexts/languageContexts";
import { useAppSelector } from "@/lib/redux/hooks";
import { useAppDispatch } from "@/lib/redux/hooks";
import { callAPI } from "@/config/axios";
import { setSignIn } from "@/lib/redux/features/userSlice";
import Link from "../../node_modules/next/link";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const { language, setLanguage } = React.useContext(LanguageContexts);
  // redux
  const dispatch = useAppDispatch();
  // get value from global store user
  const user = useAppSelector((state) => state.userReducer);

  const keepLogin = async () => {
    try {
      const tokenData = localStorage.getItem("dataUser");
      if (tokenData) {
        const response = await callAPI.get(
          `/users?id=${JSON.parse(tokenData)?.id}`
        );
        console.log("Check SignIn Response :", response.data);
        dispatch(setSignIn({ ...response.data[0], isAuth: true }));
        localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
      } else {
        dispatch(setSignIn({ isAuth: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h2>Logo</h2>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl">{language}</h2>
          <select
            name=""
            id=""
            value={language}
            onChange={(e: any) => setLanguage(e.target.value)}
            className="text-[#2d2d2d]"
          >
            <option value="en" className="text-[#2d2d2d]">
              English(united states)
            </option>
            <option value="id" className="text-[#2d2d2d]">
              Indonesia(IDN)
            </option>
          </select>
          <div className="flex gap-4">
            {user.email ? (
              <h2 className="text-xl">{user.email}</h2>
            ) : (
              <>
                <Link
                  href="/signUp"
                  className="bg-[#bcbcbc] py-2 px-6 text-[#2d2d2d]"
                >
                  Sign Up
                </Link>
                <Link
                  href="/signIn"
                  className="bg-[#bcbcbc] py-2 px-6 text-[#2d2d2d]"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
