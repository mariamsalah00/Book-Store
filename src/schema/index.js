import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signupValidationSchema = Yup.object({
  first_name: Yup.string().required("First name required"),
  last_name: Yup.string().required("Last name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password required"),
  terms: Yup.boolean().oneOf([true], "You must accept terms"),
});
