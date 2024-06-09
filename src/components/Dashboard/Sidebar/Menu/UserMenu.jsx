import React from "react";
import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";

const UserMenu = () => {
  return (
    <div>
      <MenuItem icon={BsFingerprint} label="My Survey" address="my-bookings" />

      <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
        <GrUserAdmin className="w-5 h-5" />
        <span className="mx-4 font-medium">Become A Pro User</span>
      </div>
      {/* <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
        <GrUserAdmin className="w-5 h-5" />
        <span className="mx-4 font-medium">Become A Surveyor</span>
      </div> */}
    </div>
  );
};

export default UserMenu;
