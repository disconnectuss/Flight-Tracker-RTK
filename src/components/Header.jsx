import React from "react";
import MenuIcon from "../assets/icons/MenuIcon";
import FlightIcon from "../assets/icons/FlightIcon";
import SearhIcon from "../assets/icons/SeachIcon";
import UserIcon from "../assets/icons/UserIcon";
import LicenseIcon from "../assets/icons/LicenseIcon";
import DownIcon from "../assets/icons/DownIcon";

const Header = () => {
  return (
    <div className="header p-5 mt-0 mb-5 bg-transparent flex justify-between items-center">
      <MenuIcon />
      <div className="flex gap-5 items-center">
        <FlightIcon />
        <h1 className="text-green-500 font-semibold font text-6xl">
          Air Nav.Box
        </h1>
      </div>

      <div className="flex gap-3 items-center">
        <SearhIcon />
        <UserIcon />
        <button className="lang flex items-center">
          EN
          <DownIcon />
        </button>
        <LicenseIcon className="" />
      </div>
    </div>
  );
};

export default Header;
