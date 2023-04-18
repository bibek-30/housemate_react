import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faAngleDown,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Logout } from "@mui/icons-material";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  const userStr = localStorage.getItem("user");

  const user = JSON.parse(userStr);
  const name = user ? user.name : null;

  // console.log(name);

  return (
    <nav
      className="bg-white border-blue-400 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-600"
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="text-white flex items-center">
          <BsFillHouseFill className="w-8 h-8" />
          <span className="ml-1 text-xl font-bold">HouseMates</span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
          aria-expanded={showMenu ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-blue-100 rounded-lg bg-blue-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-blue-600 dark:border-blue-800">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/rooms"}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/map"}
              >
                Add Rooms
              </Link>
            </li>
            <li>
              <Link
                to={"/register "}
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <FontAwesomeIcon icon={faSignInAlt} /> User Registration
              </Link>
            </li>
            <li className="relative">
              <button
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faAngleDown} className="mr-2" />
                {name}
              </button>
              {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-40 bg-white rounded-md shadow-lg">
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Profile
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
