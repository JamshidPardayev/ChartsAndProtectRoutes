import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="container h-[100px] flex justify-between items-center">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-[80px] max-sm:h-[70px]" />
      </Link>
      <div className="flex gap-5 text-[18px] font-medium">
        <NavLink className={"hover:text-blue-700 duration-300"} to={"/"}>
          Home
        </NavLink>
        <NavLink
          className={"hover:text-blue-700 duration-300"}
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(Header);
