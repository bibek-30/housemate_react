import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faHome,
  faCalendarAlt,
  faCreditCard,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex">
        <div
          className={`h-screen z-10 flex flex-col bg-gray-800 text-gray-200 w-64 ${
            showMenu ? "" : "hidden"
          } md:block`}
        >
          <div className="flex items-center justify-center h-14 bg-gray-900">
            <h1 className="text-white text-2xl font-semibold">Logo</h1>
          </div>
          <ul className="py-4">
            <Link to={"/dash"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                Dashboard
              </li>
            </Link>
            <Link to={"/dash/user"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                Users
              </li>
            </Link>
            <Link to={"/dash/rooms"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                Rooms
              </li>
            </Link>
            <Link to={"/dash/payment"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
                Payment
              </li>
            </Link>
            <Link to={"/dash/settings"}>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                Settings
              </li>
            </Link>
          </ul>
        </div>
        <button
          className={`hamburger absolute top-2 right-2 md:hidden ${
            showMenu ? "hidden" : ""
          }`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="text-gray-900" />
        </button>
        {showMenu && (
          <button
            className="close absolute top-2 right-2 md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-900" />
          </button>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
