import React from "react";
import { Link } from "react-router-dom";

const HistoryNav = () => {
  return (
    <div>
      <Link to={"/test/book"} className="font-bold text-lg text-gray-600 pl-5">
        Booking History
      </Link>
      <Link
        to={"/book-history"}
        className="font-bold text-lg text-gray-600 pl-5"
      >
        Shared Room
      </Link>
    </div>
  );
};

export default HistoryNav;
