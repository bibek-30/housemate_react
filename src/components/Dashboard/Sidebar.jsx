import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faCalendarAlt,
  faCreditCard,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Sidebar = () => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="flex">
        <div className=" h-screen z-10 flex flex-col bg-gray-800 text-gray-200 w-64">
          <div className="flex items-center justify-center h-14 bg-gray-900">
            <h1 className="text-white text-2xl font-semibold">Logo</h1>
          </div>
          <ul className="py-4">
            <Link to={"/dash"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon="fa-user" className="mr-3" />
                Dashboard
              </li>
            </Link>
            <Link to={"/user"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                {/* <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> */}
                Users
              </li>
            </Link>

            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
              {/* <FontAwesomeIcon icon={faTrash} className="mr-3" /> */}
              Booking
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
              {/* <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" /> */}
              Payments
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
              {/* <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" /> */}
              Setting
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
