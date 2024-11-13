"use client";
import React, { useState } from "react";
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";

interface IFormInput {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
  value?: string;
}

const FormInput: React.FC<IFormInput> = ({
  id,
  type,
  label,
  placeholder,
  onChange,
  ref,
  value,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  if (type === "password") {
    let icon;
    let activeType;
    if (visible) {
      icon = <TbEye style={{ margin: "auto" }} />;
      activeType = "text";
    } else {
      icon = <TbEyeClosed style={{ margin: "auto" }} />;
      activeType = "password";
    }
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-semibold">
          {label}
        </label>
        <div className="relative">
          <input
            type={activeType}
            id={id}
            name={id}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="w-[100%] text-black border-gray-300 px-3 py-1 rounded-lg shadowm-md"
          />
          <button
            type="button"
            className="absolute right-1 text-black top-1 w-14 p-1 rounded-lg"
            onClick={() => setVisible(!visible)}
          >
            {icon}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="" className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        className="w-[100%] text-black border-gray-300 px-3 py-1 rounded-lg shadowm-md"
        value={value}
      />
    </div>
  );
};

export default FormInput;
