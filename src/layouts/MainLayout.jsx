import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Outlet,Navigate } from "react-router-dom";
import homeimage from "../assets/images/Homeheader.png";
import { useAuthstore } from "../states/state";

export default function MainLayout() {
  const isAuthinticated = useAuthstore((state) => state.isAuthinticated);

  if (isAuthinticated) {
    return <Navigate to="/login" replace/>;
  }

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
