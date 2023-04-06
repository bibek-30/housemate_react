import React from "react";
import HistoryNav from "./HistoryNav";
import { Routes, Route } from "react-router-dom";
import BookingHistory from "../Rooms/BookingHistory";

const History = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <HistoryNav />
      </div>
      <div className="w-4/5 pr-14 dashboard-content">
        <Routes>
          <Route to="/book" element={<BookingHistory />} />
          <Route to="/share" element={<BookingHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default History;
