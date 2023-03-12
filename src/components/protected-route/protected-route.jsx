import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login/Login";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // axios.post('verify/tokren', {token:localStorage.getItem('token')}) -> make this api
    if (localStorage.getItem("token")) setIsLoggedIn(true);
  }, []);
  return isLoggedIn ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
