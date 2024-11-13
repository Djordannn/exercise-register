"use client";

import * as React from "react";
import axios from "axios";
import { callAPI } from "@/config/axios";

interface IDetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FC<IDetailProps> = ({ params }) => {
  const [detailPost, setDetailPost] = React.useState<any>(null);
  const getDetailPost = async () => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/posts?id=${slug}`);
      setDetailPost(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPost();
  }, []);

  if (!detailPost) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Post Title : {detailPost?.title}</p>
    </div>
  );
};

export default Detail;
