import React from "react";
import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

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
      
    </div>
  );
};

export default AdminMenu;
