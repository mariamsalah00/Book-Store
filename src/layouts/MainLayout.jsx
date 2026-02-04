import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import homeimage from "../assets/images/Homeheader.png";

export default function MainLayout() {
  const navigate = useNavigate();

  // Protection For Route - only authenticated users can access
  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative
         before:content-['']
         before:absolute
         before:inset-0
         before:bg-black/60
         before:z-10"
        style={{ backgroundImage: `url('${homeimage}')` }}
      >
        {" "}
        <Navbar />

          {/* here you can add your content */}
      </div>

      <Outlet />
      <Footer />
    </>
  );
}
