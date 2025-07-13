import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </div>
  );
};

export default React.memo(Header);
