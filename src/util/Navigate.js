import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.path?.pathname || "/";
  return navigate(path, { location: true });
};

export default Navigation;
