import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { signupValidationSchema } from "../schema";
import { useAuthstore } from "../store/state";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  // is more clean
  const { signup, error, isLoading, clearError } = useAuthstore();

  // make it simple call the api centrelaize once
  // use states => { signup, error, isLoading, clearError } instead of handle it with useState and try catch blocks
  const handleSubmit = async (values) => {
    clearError();
    const result = await signup(values);
    if (result.success) {
      toast.success("Registration successful!");
      navigate("/");
    } else {
      toast.error("Registration failed");
    }
  };

  // const handleSubmit = async (values) => {
  //   setApiError("");

  //   const payload = {
  //     first_name: values.first_name,
  //     last_name: values.last_name,
  //     email: values.email,
  //     password: values.password,
  //     password_confirmation: values.password_confirmation,
  //   };

  //   try {
  //     const res = await axios.post(
  //       "https://bookstore.eraasoft.pro/api/register",
  //       payload,
  //     );
  //     let token = res.data.token;
  //     sessionStorage.setItem("token", token);
  //     toast.success("Registration successful!");
  //     console.log(res.data);
  //     navigate("/login");
  //   } catch (error) {
  //     toast.error("Registration failed");
  //     setApiError(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" p-8 rounded-xl  w-full max-w-md">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            terms: false,
          }}
          validationSchema={signupValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* API Error */}
            {error && (
              <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* First + Last Name */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <Field
                  name="first_name"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <Field
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Field
                  name="password_confirmation"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                name="password_confirmation"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Terms */}
            <label className="flex items-center text-sm">
              <Field type="checkbox" name="terms" className="mr-2" />
              Agree with{" "}
              <span className="text-pink-600 ml-1">Terms & Conditions</span>
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-red-500 text-xs"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        </Formik>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-semibold">
            Login
          </Link>
        </p>
        {/* Divider */}{" "}
        <div className="flex items-center my-6">
          {" "}
          <div className="flex-1 border-t border-gray-300"></div>{" "}
          <span className="px-4 text-gray-500 text-sm">or</span>{" "}
          <div className="flex-1 border-t border-gray-300"></div>{" "}
        </div>{" "}
        {/* Social Login Buttons */}{" "}
        <div className="space-y-4">
          {" "}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition-colors">
            {" "}
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />{" "}
            <span className="text-gray-700 font-semibold">
              Sign up with Google
            </span>{" "}
          </button>{" "}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition-colors">
            {" "}
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />{" "}
            <span className="text-gray-700 font-semibold">
              Sign up with Facebook
            </span>{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Signup;
