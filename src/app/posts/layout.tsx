import * as React from "react";
import { Metadata } from "../../../node_modules/next/types";
import AuthGuard from "@/guard/authGuard";

interface IPostLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Post",
  description: "Join to share your story",
};

const PostLayout: React.FunctionComponent<IPostLayout> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <AuthGuard>{children}</AuthGuard>;
};

export default PostLayout;
