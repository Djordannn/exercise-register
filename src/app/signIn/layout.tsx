import * as React from "react";
import Login from "./login";
import { Metadata } from "../../../node_modules/next/types";

interface ILoginLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "LogIn",
  description: "Join to share your story",
};

const LoginLayout: React.FunctionComponent<ILoginLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
