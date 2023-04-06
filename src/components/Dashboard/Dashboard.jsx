import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Count from "./Count";
import User from "./User";
import RoomData from "./RoomData";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 pr-14 dashboard-content">
          <Routes>
            <Route path="/" element={<Count />} />
            <Route path="/user" element={<User />} />
            <Route path="/rooms" element={<RoomData />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
