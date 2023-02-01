import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBord = () => {
  return (
    <div className="flex w-full">
      <div className="hidden md:block w-[300px] bg-primary">
        <div>
          <button className="w-full p-2 bg-yellow-400 my-2">
            <Link to="/dashbord/add-new-blog">Add New BLog</Link>
          </button>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBord;
