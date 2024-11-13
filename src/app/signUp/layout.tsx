import * as React from "react";
import { Metadata } from "../../../node_modules/next/types";

interface ISignupLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "SignUp",
  description: "Join to share your story",
};

const SignupLayout: React.FunctionComponent<ISignupLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default SignupLayout;
