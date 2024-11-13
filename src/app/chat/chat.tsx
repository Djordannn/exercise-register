"use client";
import React from "react";

interface IChat {
  type: string;
  label?: string;
  onChange?: () => void;
}

const InputChat: React.FC<IChat> = ({ type, label, onChange }) => {
  return (
    <div>
      <div className="bg-[#eeee]">
        <label htmlFor="">{label}</label>
        <textarea
          type={type}
          onChange={onChange}
          className="border-2 border-black w-full p-3 h-[100px]"
        />
      </div>
    </div>
  );
};

export default InputChat;
