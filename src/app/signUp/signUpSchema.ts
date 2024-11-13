import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required!!"),
  lastName: Yup.string().required("Last Name is Required!!"),
  email: Yup.string().email("Invalid Email!!").required("Email is Required!!"),
  password: Yup.string()
    .min(3, "Password must be at least 3 character!!")
    .required("Password is Required!!"),
  reqPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!!")
    .required("Confirmation Password is Required"),
});
