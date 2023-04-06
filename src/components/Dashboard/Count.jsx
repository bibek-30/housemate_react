import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBed,
  faCalendarAlt,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

const Count = () => {
  return (
    <section className="p-6 my-6 bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-1 bg-blue-700 dark:bg-blue-900">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-white">
            <FontAwesomeIcon
              icon={faUser}
              className="h-9 w-9 text-white dark:text-gray-800"
            />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">200</p>
            <p className="capitalize">Users</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-700 dark:bg-blue-900">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-white">
            <FontAwesomeIcon
              icon={faBed}
              className="h-9 w-9 text-white dark:text-gray-800"
            />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">7500</p>
            <p className="capitalize">Rooms</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-700 dark:bg-blue-900">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-white">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="h-9 w-9 text-white dark:text-gray-800"
            />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">4.9</p>
            <p className="capitalize">Bookings</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-700 dark:bg-blue-900">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-white">
            <FontAwesomeIcon
              icon={faCoins}
              className="h-9 w-9 text-white dark:text-gray-800"
            />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">300K</p>
            <p className="capitalize">Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
