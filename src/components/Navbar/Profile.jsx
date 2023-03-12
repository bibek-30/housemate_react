// import React from "react";

// const Profile = () => {
//   return (
//     <>
//       <div className="container mx-auto my-5 p-5">
//         <div className="md:flex no-wrap md:-mx-2 ">
//           <div className="w-full md:w-3/12 md:mx-2">
//             <div className="bg-white p-3 border-t-4 border-green-400">
//               <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
//                 Jane Doe
//               </h1>
//               {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">
//                 Owner at Her Company Inc.+
//               </h3>
//               <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
//                 non deserunt
//               </p> */}
//               {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
//                 <li className="flex items-center py-3">
//                   <span>Status</span>
//                   <span className="ml-auto">
//                     <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
//                       Active
//                     </span>
//                   </span>
//                 </li> */}
//               {/* <li className="flex items-center py-3">
//                   <span>Member since</span>
//                   <span className="ml-auto">Nov 07, 2016</span>
//                 </li> */}
//               {/* </ul> */}
//             </div>
//           </div>
//           <div className="w-full md:w-9/12 mx-2 h-64">
//             <div className="bg-white p-3 shadow-sm rounded-sm">
//               <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
//                 <span className="tracking-wide">About</span>
//               </div>
//               <div className="text-gray-700">
//                 <div className="md:grid-cols-2 text-sm">
//                   <div className="grid grid-cols-2">
//                     <div className="px-4 py-2 font-semibold">Name</div>
//                     <div className="px-4 py-2">Jane</div>
//                   </div>

//                   <div className="grid grid-cols-2">
//                     <div className="px-4 py-2 font-semibold">Gender</div>
//                     <div className="px-4 py-2">Female</div>
//                   </div>
//                   <div className="grid grid-cols-2">
//                     <div className="px-4 py-2 font-semibold">Contact No.</div>
//                     <div className="px-4 py-2">+11 998001001</div>
//                   </div>

//                   <div className="grid grid-cols-2">
//                     <div className="px-4 py-2 font-semibold">Email.</div>
//                     <div className="px-4 py-2">
//                       <a className="text-blue-800">jane@example.com</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
//                 Show Full Information
//               </button> */}
//             </div>

//             <div className="my-4"></div>

//             <div className="bg-white p-3 shadow-sm rounded-sm">
//               <div className="grid grid-cols-2">
//                 <div>
//                   <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
//                     <span className="tracking-wide">Booking</span>
//                   </div>
//                   <ul className="list-inside space-y-2">
//                     <li>
//                       <div className="text-teal-600">
//                         Rooms in Itahari <span>(Itahari-8, Sunsari)</span>
//                       </div>
//                       <div className="text-gray-500 text-xs">
//                         March 2020 - Now
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       ;
//     </>
//   );
// };

// export default Profile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";

const Profile = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [userData, setUserData] = useState({});
  const [bookingData, setBookingData] = useState([]);

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
        console.log(response);
        setBookingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((response) => setBookingData(response.data))
    // .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {userData.name}
              </h1>
              {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt{" "}
              </p>{" "} */}
              {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {userData.jobTitle}
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {userData.bio}
              </p> */}
              {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      {userData.status}
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{userData.memberSince}</span>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{userData.name}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{userData.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{userData.mobile_number}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{userData.email}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900  mb-3">
                      <span className="tracking-wide">Booking</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      {bookingData.map((booking) => (
                        <li key={booking.id}>
                          <div className="text-teal-600">
                            {booking.room_title}{" "}
                            <span>({booking.location})</span>
                          </div>
                          <div className="text-gray-500 text-xs">
                            {booking.start_date}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
