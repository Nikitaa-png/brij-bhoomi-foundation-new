import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">
      <Navbar />
      <div className="relative z-20 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
