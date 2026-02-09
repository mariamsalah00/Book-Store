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

export const forgetPasswordValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
});

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 characters"),
  confirm: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export const addCodeValidationSchema = Yup.object({
  code: Yup.string()
    .trim()
    .length(6, "Code must be 6 digits")
    .required("OTP is required"),
});
