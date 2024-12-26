import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

const HostModal = ({ closeModal, isOpen, modalHandler }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className=" relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  type="button"
                  className=" absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-red-100 p-2 text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  <IoClose className="w-5 h-5" />
                </button>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Become Premium Member
                </DialogTitle>
                <div className="flex items-center justify-center">
                  {/* pro user */}
                  <div>
                    <div className="mt-2">
                      <h3 className="font-bold text-black">Pro User</h3>
                      <p className="text-sm text-gray-500">User Comment Now</p>
                    </div>

                    <div className="flex mt-2 justify-around">
                      <button
                        type="button"
                        onClick={modalHandler}
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Continue
                      </button>
                      
                    </div>
                  </div>

                  <div className="border-l border-gray-400 h-24 mx-5"></div>

                  {/* surveyor */}
                  <div>
                    <div className="mt-2">
                      <h3 className="font-bold text-black">Surveyor</h3>
                      <p className="text-sm text-gray-500">Can create survey</p>
                      <p className="text-sm text-gray-500">
                        Surveyor Dashboard
                      </p>
                    </div>

                    <div className="flex mt-2 justify-around">
                      <button
                        type="button"
                        onClick={modalHandler}
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Continue
                      </button>
                      
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

HostModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  modalHandler: PropTypes.func,
};

export default HostModal;
