"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { callAPI } from "@/config/axios";
import { useRouter } from "../../../node_modules/next/navigation";

interface IPostsProps {}

const PostPage: React.FC<IPostsProps> = (props) => {
  const router = useRouter();

  const [userList, setUserList] = React.useState<any[]>([]);
  const [postsList, setPostList] = React.useState<any>([]);
  const [post, setPost] = React.useState<any[]>([]);

  const getUserList = async () => {
    try {
      const res = await callAPI.get("/users");
      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostList = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPostList(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserList();
    getPostList();
  }, []);

  const printUserList = () => {
    return userList.map((value: any) => {
      return (
        <div key={value.id} className="flex gap-4 mb-2 items-center">
          <img
            src={`https://robohash.org/${value.username}.png`}
            alt="img"
            className="w-[70px] bg-slate-400 rounded-full"
          />
          <div>
            <h2>{value.name}</h2>
            <h2>{value.phone}</h2>
          </div>
        </div>
      );
    });
  };

  const printPostList = () => {
    return postsList.map((value: any, index: number) => {
      return (
        <div
          key={index}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => router.push(`/posts/${value.id}`)}
        >
          <img
            className="bg-slate-400 w-[60px] rounded-full"
            src={`https://robohash.org/${value.userId}-${value.id}.png`}
            alt="img"
          />
          <div>
            <h3 className="text-lg">{value.title}</h3>
            <p className="text-sm">{value.body}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="px-[3%] py-14 bg-[#eeee] min-h-screen flex gap-9 items-start">
      <div className="w-[70%]">
        <div className="flex items-center gap-4">
          <img
            src={`https://robohash.org/random.png`}
            alt="img"
            className="bg-slate-400 w-[100px] rounded-full"
          />
          <div className="w-[100%]">
            <div className="relative">
              <textarea
                className="w-[100%]"
                rows={2}
                onChange={(e: any) => setPost(e.target.value)}
              />
              <p className="absolute right-1 bottom-1">{post.length}/350</p>
            </div>
            <div className="flex justify-between">
              <div> </div>
              <button className="bg-[#2d2d2d] text-white py-1 px-5">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">{printPostList()}</div>
      </div>
      <div className="w-[30%]">{printUserList()}</div>
    </div>
  );
};

export default PostPage;
