import React from "react";
import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";

const AdminMenu = () => {
  return (
    <div>
      <div>
        <MenuItem
          icon={FaUserCog}
          label="Manage Users"
          address="manage-users"
        />
      </div>
      <div>
        <MenuItem
          icon={FaUserCog}
          label="Surveys Status"
          address="manage-users"
        />
      </div>
      <div>
        <MenuItem
          icon={FaUserCog}
          label="Payments"
          address="manage-users"
        />
      </div>
      <MenuItem icon={BsFingerprint} label="Survey History" address="survey-history" />
      
    </div>
  );
};

export default AdminMenu;
