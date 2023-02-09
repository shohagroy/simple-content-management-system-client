import React from "react";
import { Outlet } from "react-router-dom";
import DowerMenu from "../components/DowerMenu";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const MainLayout = () => {
  return (
    <div className="relative">
      {/* <div className="absolute top-[10vh]">
        <DowerMenu />
      </div> */}
      <Header />
      <div className=" w-full flex justify-between">
        {/* <div className="w-[400px] bg-primary  hidden md:block">left side</div> */}
        <Outlet />
        {/* <div className="w-[400px] bg-primary hidden md:block">right side</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
