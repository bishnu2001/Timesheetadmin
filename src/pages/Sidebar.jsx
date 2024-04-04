import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Createuser from "../components/CreateUser/RegisterUser";
import { Link } from "react-router-dom";
import {
  HiUser,
  HiTruck,
  HiUserGroup,
  HiClipboardCheck,
  HiCog,
} from "react-icons/hi";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [vendorDropdown, setVendorDropdown] = useState(false);
  const [vehicleDropdown, setVehicleDropdown] = useState(false);

  const toggleVendorMenu = () => {
    setVendorDropdown(!vendorDropdown);
  };
  const toggleVehicleMenu = () => {
    setVehicleDropdown(!vehicleDropdown);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div>
      <div className="flex flex-col">
        <aside
          className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-slate-800 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start mt-20"
          id="sidenav-main"
        >
          {/* logo */}
          {/* <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <a
              className="transition-colors duration-200 ease-in-out"
              href="https://www.loopple.com"
            >
              <img alt="logo" src={Logo} className="inline bg-slate-700 h-11" />
            </a>
          </div> */}

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>
          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
              <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                    src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                    alt="avatar image"
                  />
                </div>
              </div>
              <div className="mr-1">
                <a
                  href="javascript:void(0)"
                  className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium text-white hover:text-gray-300"
                >
                  Suvendu Nayak
                </a>
                <span className="text-secondary-dark text-gray-400 font-medium block text-[0.85rem]">
                  Weighbridge admin
                </span>
              </div>
            </div>
            <a
              className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
              href="javascript:void(0)"
            >
              <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>
          <div className="relative">
            {/* add overflow-y-scroll */}
            <div className="flex flex-col w-full font-medium mt-4">
              {/* <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700">
                  <Link
                    to={`/register`}
                    className="flex items-center flex-grow text-[1.15rem] text-white hover:text-gray-300"
                  >
                    User Account
                  </Link>
                </span>
              </div> */}
              <div>
                <div>
                  <div className="relative">
                    {/* toggle side bar */}
                    <span
                      className="select-none flex items-center px-4  py-[.4rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700"
                      onClick={toggleDropdown}
                    >
                      <HiUser className="w-6 h-6 mr-2 text-white" />
                      <Link
                        to={`/home`}
                        className="flex items-center flex-grow text-[1.15rem] text-white hover:text-gray-300 text-lg"
                      >
                        Manage User Account
                      </Link>
                    </span>
                    {showDropdown && (
                      <div className="absolute left-full top-0 mt-0 bg-gray-700 border border-gray-500 rounded-[0.95rem] shadow-md w-[200px]">
                        <div className="py-2 px-4 border-b border-gray-500">
                          <span>
                            <Link
                              to={`/register`}
                              className="block text-white hover:text-gray-300"
                              onClick={toggleDropdown}
                            >
                              Create User
                            </Link>
                          </span>
                        </div>
                        <div className="py-2 px-4 border-b border-gray-500">
                          <Link
                            to={`/alluser`}
                            className="block text-white hover:text-gray-300"
                            onClick={toggleDropdown}
                          >
                            Maintain Users
                          </Link>
                        </div>
                        <div className="py-2 px-4 border-b border-gray-500">
                          <Link
                            to={`/alluser`}
                            className="block text-white hover:text-gray-300"
                            onClick={toggleDropdown}
                          >
                            All Users
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative">
                <span
                  className="select-none flex items-center px-4  py-[.4rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700"
                  onClick={toggleVehicleMenu}
                >
                  <HiTruck className="w-6 h-6 mr-2 text-white" />
                  <Link
                    to={`/home`}
                    className="flex items-center flex-grow text-[1.15rem] text-white hover:text-gray-300"
                  >
                    Vehicle Master
                  </Link>
                </span>
                {vehicleDropdown && (
                  <div className="absolute left-full top-0 mt-[.4rem] bg-gray-700 border border-gray-500 rounded-[.95rem] shadow-md w-[200px]">
                    <div className="py-2 px-4 border-b border-gray-500">
                      <Link
                        to="/vehicle"
                        className="block text-white hover:text-gray-300"
                        onClick={toggleVehicleMenu}
                      >
                        Vehicle Registration
                      </Link>
                    </div>
                    <div className="py-2 px-4 border-b border-gray-500">
                      <Link
                        to="/allvehicle"
                        className="block text-white hover:text-gray-300"
                        onClick={toggleVehicleMenu}
                      >
                        All Vehicle
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <span
                  className="select-none flex items-center px-4  py-[.4rem] text-[1.15rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700 text-white hover:text-gray-300"
                  onClick={toggleVendorMenu}
                >
                  <HiUserGroup className="w-6 h-6 mr-2" />
                  <Link to={`/supplier`}>Supplier Management</Link>
                </span>
              </div>
              <div className="relative">
                <span
                  className="select-none flex items-center px-4 py-[.4rem] text-[1.15rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700 text-white hover:text-gray-300"
                  onClick={toggleVendorMenu}
                >
                  <HiUserGroup className="w-6 h-6 mr-2" />
                  <Link to={`/customer`}>Customer Management</Link>
                </span>
              </div>
              <div className="relative">
                <span
                  className="select-none flex items-center px-4  py-[.4rem] text-[1.15rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700 text-white hover:text-gray-300"
                  onClick={toggleVendorMenu}
                >
                  <HiUserGroup className="w-6 h-6 mr-2" />
                  <Link to={`/camera`}>Camera Master</Link>
                </span>
              </div>
              <div className="relative">
                <span
                  className="select-none flex items-center px-4 py-[.4rem] text-[1.15rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700 text-white hover:text-gray-300"
                  onClick={toggleVendorMenu}
                >
                  <HiUserGroup className="w-6 h-6 mr-2" />
                  <Link to={`/quality`}>Quality Master</Link>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4  py-[.4rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700">
                  <HiClipboardCheck className="w-6 h-6 mr-2 text-white" />
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem]  text-white hover:text-gray-300"
                  >
                    Material Master
                  </a>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4  py-[.4rem] cursor-pointer my-[.4rem] rounded-[.95rem] border border-gray-500 bg-gray-700">
                  <HiClipboardCheck className="w-6 h-6 mr-2 text-white" />
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] text-white hover:text-gray-300"
                  >
                    Schedule Calibration
                  </a>
                </span>
              </div>
              {/* <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Password Management
                  </a>
                </span>
              </div> */}
              {/* add new div  here for custom field if any */}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
