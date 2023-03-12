import React from "react";
import Sidebar from "./Sidebar";
import Count from "./Count";

const Dashboard = () => {
  return (
    <>
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div>
        <Count />
      </div>
    </>
  );
};

export default Dashboard;
