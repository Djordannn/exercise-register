import * as React from "react";
import { Metadata } from "next";
import { callAPI } from "@/config/axios";

interface ISlugLayout {
  children: React.ReactNode;
}

type PropsParams = {
  params: { slug: string };
};

// Dynamic MetaData
export const generateMetadata = async ({
  params,
}: PropsParams): Promise<Metadata> => {
  try {
    const res = await callAPI.get(`/posts?id=${params.slug}`);
    return {
      title: res.data[0].title,
    };
  } catch (error) {
    console.log(error);
  }
};

const SlugLayout: React.FunctionComponent<ISlugLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default SlugLayout;
