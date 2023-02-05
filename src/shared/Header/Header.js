import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.PNG";
import { FaUserCircle } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { useIdToken } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [user, loading, error] = useIdToken(auth);

  console.log(user, loading, error);

  return (
    <div className=" relative ">
      <header className="p-4 border-b bg-white text-primary">
        <div className="container flex items-center justify-between h-16 mx-auto">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <div className="">
            <div className="form-control w-full hidden md:block">
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
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                className="flex  items-center  -mb-1 border-b-2 border-transparent"
                to="/"
              >
                <ImHome
                  className="border-2 border-black p-1 rounded-full"
                  size={40}
                />
              </Link>
            </li>
            <li className="flex">
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center px-2 -mb-1 border-b-2 border-transparent"
                to="/"
              >
                <FaUserCircle
                  className="border-2 border-black p-1 rounded-full"
                  size={40}
                />
              </button>
            </li>
          </ul>

          <div className="flex items-center justify-end p-4 md:hidden">
            <Link className="flex  items-center mr-2" to="/">
              <ImHome className="p-2" size={40} />
            </Link>

            <button onClick={() => setToggle(!toggle)} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* user modal  */}
      {openProfile && (
        <div className="w-[350px] z-50  absolute right-20 top-[100%]  bg-white p-3 rounded-xl shadow-2xl">
          {user ? (
            <div>
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="py-3 hover:bg-gray-100 duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
              >
                {user.displayName}
              </div>

              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="my-5 text-xl"
              >
                <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                  <Link
                    to="/profile/update"
                    className="flex justify-between items-center w-full"
                  >
                    <AiOutlineUser
                      size={40}
                      className="p-2 rounded-full bg-gray-200 mr-2 "
                    />
                    <p className="">
                      <span>Update Profile</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                  <Link
                    to="/dashbord"
                    className="flex justify-between items-center w-full"
                  >
                    <FaBloggerB
                      size={40}
                      className="p-2 rounded-full bg-gray-200 mr-2 "
                    />
                    <p className="">
                      <span>Dashbord</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>

                <div
                  onClick={() => setOpenProfile(!openProfile)}
                  className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center"
                >
                  <Link
                    to="/"
                    className="flex justify-between items-center w-full"
                  >
                    <p className="">
                      <i className="fa-solid p-2 rounded-full bg-gray-200 mr-2 fa-gear"></i>
                      <span>Change Password</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                  <button
                    onClick={() => signOut(auth)}
                    className="flex  items-center w-full"
                  >
                    <FiLogOut
                      size={40}
                      className="rounded-full bg-gray-200 mr-2 p-2"
                    />

                    <p className="ml-4">Log Out</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-10">
              <Link
                to="/login"
                onClick={() => setOpenProfile(!openProfile)}
                className="py-3 border text-xl font-bold border-primary my-2 hover:bg-primary hover:text-white duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setOpenProfile(!openProfile)}
                className="py-3  border text-xl font-bold border-primary my-2 hover:bg-primary hover:text-white duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      )}

      {/* toggle menu  */}
      <div
        className={`${
          toggle ? "absolute" : "hidden"
        } top-[100%]  left-0  h-[100vh] w-full bg-white z-50`}
      >
        <div className="m-8 md:hidden">
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

          <div className=" bg-white p-3 my-10 ">
            {user ? (
              <div>
                <div
                  onClick={() => setOpenProfile(!openProfile)}
                  className="py-3 hover:bg-gray-100 duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
                >
                  {user.displayName}
                </div>

                <div
                  onClick={() => setOpenProfile(!openProfile)}
                  className="my-5 text-xl"
                >
                  <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                    <Link
                      to="/profile/update"
                      className="flex justify-between items-center w-full"
                    >
                      <AiOutlineUser
                        size={40}
                        className="p-2 rounded-full bg-gray-200 mr-2 "
                      />
                      <p className="">
                        <span>Update Profile</span>
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                    <Link
                      to="/dashbord"
                      className="flex justify-between items-center w-full"
                    >
                      <FaBloggerB
                        size={40}
                        className="p-2 rounded-full bg-gray-200 mr-2 "
                      />
                      <p className="">
                        <span>Dashbord</span>
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div
                    onClick={() => setOpenProfile(!openProfile)}
                    className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center"
                  >
                    <Link
                      to="/"
                      className="flex justify-between items-center w-full"
                    >
                      <p className="">
                        <i className="fa-solid p-2 rounded-full bg-gray-200 mr-2 fa-gear"></i>
                        <span>Change Password</span>
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="p-3 hover:bg-gray-100 duration-300 rounded-lg bg-  flex items-center">
                    <button className="">
                      <p className="">
                        <i className="fa-solid p-2 rounded-full bg-gray-200 mr-2 fa-right-from-bracket"></i>
                        <span>Log Out</span>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-10">
                <Link
                  to="/login"
                  onClick={() => setOpenProfile(!openProfile)}
                  className="py-3 border text-xl font-bold border-primary my-2 hover:bg-primary hover:text-white duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpenProfile(!openProfile)}
                  className="py-3  border text-xl font-bold border-primary my-2 hover:bg-primary hover:text-white duration-300 rounded-lg bg-white flex shadow-lg justify-center items-center"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
