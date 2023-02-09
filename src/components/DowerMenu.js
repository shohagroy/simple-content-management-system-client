import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useIdToken } from "react-firebase-hooks/auth";

const DowerMenu = () => {
  const [user] = useIdToken(auth);

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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

export default DowerMenu;
