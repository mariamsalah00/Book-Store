import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

// make your schema in separate file and import it here
// make your code clean
import { loginValidationSchema } from "../schema";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  // const validationSchema = Yup.object({
  //     email: Yup.string().email("Email is invalid").required("Email is required"),
  //     password: Yup.string().required("Password is required"),
  // });

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setApiError("");
    let url = "https://bookstore.eraasoft.pro/api/login";
    try {
      const res = await axios.post(url, values);
      console.log("Login successful:", res.data);
      let token = res.data.token;
      values.remember
        ? localStorage.setItem("token", token)
        : sessionStorage.setItem("token", token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      if (error.response?.data?.message) {
        setApiError(error.response.data.message);
      } else {
        setApiError("Invalid email or password");
      }
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" p-8 rounded-xl  w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#D9176C] mb-8">
          Welcome Back!
        </h2>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          <Form className="space-y-6">
            {apiError && (
              <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg">
                {apiError.includes("email")
                  ? "Email is invalid or not registered"
                  : apiError}
              </div>
            )}

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
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative flex items-center justify-between">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Remember & Forget */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <Field
                  type="checkbox"
                  name="remember"
                  className="w-4 h-4 text-[#D9176C] rounded"
                />
                <span className="mr-2 text-sm text-gray-700">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#D9176C] hover:underline"
              >
                Forget password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#D9176C] hover:bg-[#B01258] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Log in
            </button>
          </Form>
        </Formik>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#D9176C] font-semibold hover:underline"
          >
            Signup
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
              Login with Google
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
              Login with Facebook
            </span>{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
