import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import homeimage from "../assets/images/Homeheader.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

export default function AuthLayout() {
  const navigate = useNavigate();

  // If user is already logged in, redirect to home
  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div
        className="h-120 bg-cover bg-center bg-no-repeat relative
           before:content-['']
           before:absolute
           before:inset-0
           before:bg-black/60
           before:z-10"
        style={{ backgroundImage: `url('${homeimage}')` }}
      >
        {" "}
        <Navbar />

      
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
