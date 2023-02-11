import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.PNG";
import { AiOutlineBars, AiOutlineMessage } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";

import { useIdToken } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import Button from "../../components/Button";
import { GoHome } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useIdToken(auth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navMenu = (
    <div className="flex justify-center items-center">
      <button className="relative mx-2">
        <MdNotificationsActive
          size={35}
          className="p-1 bg-gray-100 rounded-md"
        />
        <div className="absolute -top-3 w-6 h-6 rounded-full text-xs -right-3 bg-red-600 text-white font-bold">
          <p className="w-full h-full flex justify-center items-center">12</p>
        </div>
      </button>

      <button className="relative mx-2">
        <AiOutlineMessage size={35} className="p-1 bg-gray-100 rounded-md" />
        <div className="absolute -top-3 w-6 h-6 rounded-full text-xs -right-3 bg-primary 0 text-white font-bold">
          <p className="w-full h-full flex justify-center items-center">12</p>
        </div>
      </button>

      <div className="drawer-content ml-4 ">
        <AiOutlineBars
          onClick={() => setToggleMenu(!toggleMenu)}
          className="p-1 bg-gray-100 rounded-md cursor-pointer"
          size={35}
        />
      </div>
    </div>
  );

  return (
    <div className=" relative ">
      <header className="p-1 md:p-4 border-b bg-white text-primary">
        <div className=" flex items-center justify-between h-16 mx-auto">
          <Link to="/">
            <img className="w-[120px] md:w-full" src={logo} alt="" />
          </Link>

          <div className="hidden md:block">
            <div className="form-control w-full">
              <div className="input-group w-full">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input w-[800px] focus:outline-none text-black input-bordered"
                />
                <button className="btn btn-primary btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {user ? (
            navMenu
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </header>

      {/* toggle menu */}
      <div
        className={` top-[8vh] z-50 shadow-lg right-0  ${
          toggleMenu ? "absolute" : "hidden"
        }`}
      >
        <ul
          onClick={() => setToggleMenu(!toggleMenu)}
          className="menu p-4 w-80 rounded-md bg-base-100 text-base-content"
        >
          <p className="w-full p-2 text-center my-2">
            Hello, {user?.displayName}
          </p>
          <li className="my-1">
            <Link to="/">
              <GoHome /> <span>Home</span>
            </Link>
          </li>

          <li className="my-1">
            <Link to="/dashbord">
              <AiOutlineDashboard /> <span>Dashbord</span>
            </Link>
          </li>

          <li className="my-1">
            <Link to="/">
              <CgProfile /> <span>Profile</span>
            </Link>
          </li>

          <li className="my-1">
            <button onClick={() => signOut(auth)}>
              <AiOutlineLogout /> <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
