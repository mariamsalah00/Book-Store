import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import homeimage from "../assets/images/Homeheader.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useAuthstore } from "../states/state";

export default function AuthLayout() {
 
  const isAuthinticated = useAuthstore( (state) => state.isAuthinticated);

  // // If user is already logged in, redirect to home
{isAuthinticated && <Navigate to="/" />}

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
