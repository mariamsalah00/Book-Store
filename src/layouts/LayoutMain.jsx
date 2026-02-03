import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import homeimage from '../assets/images/Homeheader.png'


export default function LayoutMain() {
     const navigate = useNavigate();
     // Protection For Route
     useEffect(() => {
         let token = localStorage.getItem("token") || sessionStorage.getItem("token");
         if (!token) {
             navigate("/login");
         }
     }, []);

  return (
      <>
          <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${homeimage}')` }}>
              {" "}
              <Navbar />
          </div>
  
          <Outlet />
          <Footer />
      </>
  );
}
