import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../../assets/image/avater/user.png";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HostModal from "../../Modal/HostRequestModal";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const axiosSecure = useAxiosSecure();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalHandlerSurveyor = async () => {
    console.log("I want to be a surveyor");

    try {
      const currentUser = {
        email: user?.email,
        role: "user",
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
  const modalHandlerProUser = async () => {
    console.log("I want to be a Pro User");

    try {
      const currentUser = {
        email: user?.email,
        role: "user",
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
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/" className="btn-ghost mx-4">
              {/* <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              /> */}
              <h2 className="font-bold text-2xl ">Survey Vista</h2>
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <Link to="/allSurveys" className="font-semibold text-sm ">
                  All Surveys
                </Link>
                {/* Become A Host btn */}
                <div className="hidden md:block">
                  {/* {!user && ( */}
                  <button
                    // disabled={!user}
                    onClick={() => setIsModalOpen(true)}
                    className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
                  >
                    Become Surveyor
                  </button>
                  {/* )} */}
                </div>
                {/* Modal */}
                <HostModal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  modalHandlerSurveyor={modalHandlerSurveyor}
                  modalHandlerProUser={modalHandlerProUser}
                />
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={handleLogOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
