import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useStore } from "../../zustand/store";

const Header = () => {
  const { wishlist } = useStore();

  return (
    <div className="container h-[100px] flex justify-between items-center">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-[80px] max-sm:h-[70px]" />
      </Link>

      <div className="flex gap-5 text-[18px] max-sm:text-[16px] font-medium">
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

      <Link to={"/wishlist"}>
        <div className="hover:text-blue-700 duration-300">
          <Badge count={wishlist.length} size="default">
            <HeartOutlined className="text-[22px]" />
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Header);
