"use client";
import React from "react";

interface ILogin {
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  ref?: any;
}

const Login: React.FC<ILogin> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  ref,
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="p-2 mt-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Login;
