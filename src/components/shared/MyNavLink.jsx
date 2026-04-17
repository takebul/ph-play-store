import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          ` pb-1.5 ${className} ${isActive ? "text-purple-500 border-b border-b-purple-500" : ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
