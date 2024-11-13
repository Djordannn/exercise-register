"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import * as React from "react";
import { redirect } from "../../node_modules/next/navigation";

export interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FunctionComponent<IAuthGuardProps> = ({ children }) => {
  const userData = useAppSelector((state) => state.userReducer);
  React.useEffect(() => {
    if (userData && Object.hasOwn(userData, "isAuth")) {
      if (!userData?.isAuth) {
        redirect("/");
      }
    }
  }, [userData]);
  return children;
};

export default AuthGuard;
