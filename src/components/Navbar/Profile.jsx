import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";

const Profile = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/1`)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`http://127.0.0.1:8000/api/user-book`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data === "No booking made yet.") {
          setErrorMessage(response.data);
        } else {
          setBooking(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://127.0.0.1:8000/api/user-book`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data === "No booking made yet.") {
          setErrorMessage(response.data);
        } else {
          setBooking(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
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
                <p className="text-gray-600 text-sm mb-1">
                  Full Stack Developer
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Bay Area, San Francisco, CA
                </p>
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                    Follow
                  </button>
                  <button className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
                    Message
                  </button>
                </div>
              </div>
            </div>
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
            <div className="pb-16"></div>
            <div className="w-full right-px">
              <div className="bg-white rounded-lg shadow-lg">
                <h1 className="font-bold text-lg text-gray-600 pl-5">
                  Booking History
                </h1>
                {errorMessage ? (
                  <p>{errorMessage}</p>
                ) : (
                  <div className="p-6">
                    {booking.map((book) => (
                      <div className="flex flex-wrap mb-4" key={book.id}>
                        <div className="w-full">
                          <div className="flex">
                            <div>
                              <h2 className="text-lg font-bold mb-2 text-gray-800">
                                {book.room_title} ({book.location})
                              </h2>
                              <p className="text-gray-600 text-sm">
                                ({book.start_date}) - {book.end_date}
                              </p>
                            </div>
                            <div className="pl-80">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
                                Share Room
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// <div className="bg-white rounded-lg shadow-lg">
//                 <h1 className="font-bold text-lg text-gray-600 pl-5">
//                   Booking History
//                 </h1>
//                 {errorMessage ? (
//                   <p>{errorMessage}</p>
//                 ) : (
//                   <div className="p-6">
//                     {booking.map((book) => (
//                       <div className="flex flex-wrap mb-4" key={book.id}>
//                         <div className="w-full">
//                           <div className="flex">
//                             <div>
//                               <h2 className="text-lg font-bold mb-2 text-gray-800">
//                                 {book.room_title} ({book.location})
//                               </h2>
//                               <p className="text-gray-600 text-sm">
//                                 ({book.start_date}) - ({book.end_date})
//                               </p>
//                             </div>
//                             <div className="pl-80">
//                               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
//                                 Share Room
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
