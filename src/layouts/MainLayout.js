import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Navigation from "../shared/Header/Navigation";

const MainLayout = () => {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <div className="h-screen w-full flex justify-between">
        {/* <div className="w-[400px] bg-primary  hidden md:block">left side</div> */}
        <Outlet />
        {/* <div className="w-[400px] bg-primary hidden md:block">right side</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
