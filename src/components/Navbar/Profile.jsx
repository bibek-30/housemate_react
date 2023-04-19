import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "./Navbar";
import History from "../BookShare/History";

const Profile = () => {
  const token = localStorage.getItem("token");
  // const { id } = useParams();
  const myObj = JSON.parse(localStorage.getItem("user"));
  const id = myObj["id"];

  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        {/* Profile */}
        <div className="flex flex-wrap justify-center mb-4 p-11">
          <div className="w-full lg:w-1/3 pr-8">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="py-4 px-6 text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-full w-32 mx-auto mb-4"
                />
                <p className="text-gray-600  mb-4 text-lg font-bold">
                  {userData.name}
                </p>
                <p className="text-gray-600 text-sm mb-1">{userData.email}</p>

                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                    Message
                  </button>
                  {/* <button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
                    Message
                  </button> */}
                </div>
              </div>
            </div>
            <div className="pb-16"></div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg">
              <h1 className="font-bold text-lg text-gray-600 pl-5">About</h1>

              <div className="p-6">
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/3">
                    <p className="text-gray-600">Name</p>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-gray-800">{userData.name}</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/3">
                    <p className="text-gray-600">Gender</p>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-gray-800">{userData.gender}</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/3">
                    <p className="text-gray-600">Mobile Number</p>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-gray-800">{userData.mobile_number}</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/3">
                    <p className="text-gray-600">Email</p>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-gray-800">{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-10"></div>
            <div className="w-full right-px">
              <div className="bg-white rounded-lg shadow-lg">
                <History />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Profile;
