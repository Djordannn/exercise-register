"use client";

import FormInput from "@/components/formInput/index";
import React, { useState, useRef, useEffect } from "react";
import { callAPI } from "@/config/axios";
import { Formik, Form, FormikProps } from "formik";
import { SignUpSchema } from "./signUpSchema";
import { validateYupSchema } from "../../../node_modules/formik/dist/Formik";
interface ISignInPageProps {}

interface ISignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  reqPassword: string;
}

const SignUp: React.FC<ISignInPageProps> = (props) => {
  const onSignUp = async (formValue: ISignUpValues) => {
    try {
      const res = await callAPI.post("/users", {
        name: `${formValue.firstName} ${formValue.lastName}`,
        email: formValue.email,
        password: formValue.password,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[8%] py-24 bg-slate-400 h-[90vh] flex items-center justify-center text-white">
      <div className="w-[40%] p-6 bg-slate-800 mx-auto">
        <h1 className="py-4 text-3xl">SignUp</h1>
        <div className="flex flex-col gap-4">
          <Formik
            validationSchema={SignUpSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              reqPassword: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log("Value from input formik :", values);
              onSignUp(values);
              resetForm();
            }}
          >
            {(props: FormikProps<ISignUpValues>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <FormInput
                        id="firstName"
                        type="text"
                        label="First name"
                        onChange={handleChange}
                        value={values.firstName}
                      />
                      <FormInput
                        id="lastName"
                        type="text"
                        label="Last name"
                        onChange={handleChange}
                        value={values.lastName}
                      />
                    </div>
                    <FormInput
                      id="email"
                      type="text"
                      label="Email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <FormInput
                      id="password"
                      type="password"
                      label="Password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <FormInput
                      id="reqPassword"
                      type="password"
                      label="Confirmation Password"
                      onChange={handleChange}
                      value={values.reqPassword}
                    />
                    <div className="mt-4">
                      <button type="submit" className="bg-slate-400 py-1 px-4">
                        SignUp
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
