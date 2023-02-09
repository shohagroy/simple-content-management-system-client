import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { MdPostAdd } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const DashBordLayout = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const menu = [
    {
      id: 0,
      path: "/dashbord",
      name: "Dashbord",
      icon: <MdSpaceDashboard />,
    },
    {
      id: 1,
      path: "/posted-report",
      name: "Posted Report",
      icon: <TbReport />,
    },
    {
      id: 2,
      path: "/dashbord/create-new-blog",
      name: "Create Post",
      icon: <MdPostAdd />,
    },
    {
      id: 3,
      pathh: "setting",
      name: "Setting",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="hidden md:block w-[300px] bg-white p-3">
        {menu.map((menu) => (
          <Link
            key={menu.name}
            onClick={() => setActiveMenu(menu.id)}
            to={`${menu.path}`}
            className={`flex  p-3 mt-1 items-center   rounded-md  font-bold ${
              menu.id === activeMenu && "bg-primary text-white"
            }`}
          >
            {menu.icon} <span className="mx-2 ">{menu.name}</span>
          </Link>
        ))}
      </div>
      <div className="w-full bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBordLayout;
