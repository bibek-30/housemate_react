import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Context() {
//   const navigate = useNavigate();

//   const getToken = () => {
//     const tokenString = localStorage.getItem("token");
//     const userToken = JSON.parse(tokenString);
//     return userToken;
//   };

//   const getUser = () => {
//     const userString = localStorage.getItem("user");
//     const userDetails = JSON.parse(userString);
//     return userDetails;
//   };

//   const [token, setToken] = useState(getToken());
//   const [user, setUser] = useState(getUser());

//   const saveToken = (user, token) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", user);

//     setToken(token);
//     setUser(user);
//   };

//   const axios = axios.create({
//     baseURL: "http://127.0.0.1:8000/api",
//     //   withCredentials: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return {
//     setToken: saveToken,
//     token,
//     user,
//     getToken,
//   };
// }
