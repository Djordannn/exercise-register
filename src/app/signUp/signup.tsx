"use client";
import React from "react";

interface ISignup {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
}

const SignUp: React.FC<ISignup> = ({
  type,
  label,
  placeholder,
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
          placeholder={placeholder}
          onChange={onChange}
          className="p-2 mt-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;
