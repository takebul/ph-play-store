import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className="shadow">
      <div className="w-11/12 mx-auto flex justify-between gap-4 items-center py-2">
        <img src={logoImg} alt="" className="w-12.5" />
        <ul className="flex justify-between gap-4 items-center font-medium">
          {navItems.map((items, ind) => (
            <MyNavLink key={ind} to={items.path}>
              {items.text}
            </MyNavLink>
          ))}

          {/* <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>

          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
