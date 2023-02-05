import React from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.config";

const PrivatePouter = ({ children }) => {
  const [user, loading] = useIdToken(auth);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <h2 className="text-center  text-2xl font-bold p-4">Loading...</h2>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivatePouter;
