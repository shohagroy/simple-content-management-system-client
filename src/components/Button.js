import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-2 hover:text-white text-primary px-4 border border-primary duration-300 hover:bg-primary rounded-lg m-2">
      {children}
    </button>
  );
};

export default Button;
