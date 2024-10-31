"use client";
import React, { useState, useEffect } from "react";
import { callAPI } from "@/config/axios";
// import axios from "axios";

const Chat = () => {
  const [dataUser, setDataUsers] = useState<any[]>([]);
  const [deleted, setDelete] = useState("");
  const [input, setInput] = useState<string>("");

  const lengthInput = () => {
    const newInput = input.split("");
    for (let i = 0; i <= newInput.length; i++) {
      return newInput.length;
    }
  };

  useEffect(() => {
    callAPI
      .get("/users")
      .then((response) => console.log(setDataUsers(response.data)))
      .catch((error) => console.log(error));
  }, []);

  const newData = () => {
    return dataUser.map((value, index) => {
      return (
        <div
          key={`${value}-${index}`}
          className="flex flex-row gap-4 mb-4 items-center"
        >
          <div>
            <img
              src={`https://robohash.org/${value.id}`}
              alt="img"
              className="w-[100px] bg-slate-400 rounded-full"
            />
          </div>
          <div className="w-full p-5">
            <h3 className="text-2xl">{`${value.name}`}</h3>
            <p className="text-lg">{`${value.phone}`}</p>
          </div>
        </div>
      );
    });
  };

  const onDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=373f", {
      method: "DELETE",
    });
  };

  return (
    <div>
      {/* <input
        type="text"
        onChange={(e: any) => {
          setDelete(e.target.value);
        }}
        className="border-2 border-black"
      />
      <button type="button" onClick={onDelete}>
        delete
      </button> */}
      <div className="p-5 flex gap-10 ">
        <div className="w-[60%]h-[700px]">
          <div className="flex items-center">
            <div className="w-[20%] pb-9">
              <img
                src="https://robohash.org/4"
                alt="img"
                className="w-[100px] bg-slate-400 rounded-full"
              />
            </div>
            <div className="w-full">
              <textarea
                type="text"
                className="bg-[#eeee] rounded-lg w-full p-2 h-[150px]"
                onChange={(e: any) => {
                  setInput(e.target.value);
                }}
              />
              <div className="flex justify-between items-center">
                <div>{lengthInput()}</div>
                <button
                  type="button"
                  className="bg-[#2d2d2d] text-white py-2 px-5 mt-2"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="h-[600px] overflow-hidden overflow-y-auto">
            <div className="flex items-center gap-4 my-2">
              <img
                src="https://robohash.org/2"
                alt=""
                className="w-[100px] bg-slate-400 rounded-full"
              />
              <div className=" w-full p-5">
                <h3 className="text-2xl">Title Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, enim exercitationem asperiores officiis aspernatur
                  quas!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col items-center">
          <div className="h-[700px] overflow-hidden overflow-y-auto">
            {newData()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
