import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import HostModal from "../../../../components/Modal/HostRequestModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";
import toast from "react-hot-toast";

const UserMenu = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role] = useRole();
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalHandler = async () => {
    console.log("I want to be a host");
    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation");
      } else {
        toast.success("Please!, Wait for admin approval👊");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };
  return (
    <div>
      <MenuItem
        icon={BsFingerprint}
        label="Responses"
        address="survey-history"
      />

      <MenuItem
        icon={BsFingerprint}
        label="Become A Pro User"
        address="payment"
      />
      {role === "surveyor" && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Surveyor</span>
        </div>
      )}
      {/* Modal */}
      <HostModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </div>
  );
};

export default UserMenu;
