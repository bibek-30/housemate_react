// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Booking from "./Booking";

// function Details() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [roomData, setRoomData] = useState();

//   useEffect(() => {
//     async function fetchRoomData() {
//       const response = await axios.get(
//         `http://127.0.0.1:8000/api/getroom/${id}`
//       );
//       setRoomData(response.data);
//     }
//     fetchRoomData();
//   }, [id]);

//   if (!roomData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="md:flex md:justify-center md:items-center">
//         <div className="md:w-2/3 lg:w-1/2 xl:w-2/5">
//           <div>
//             <h1 className="text-3xl font-bold mb-4">{roomData.title}</h1>
//             <div className="content">
//               <img
//                 src={roomData.image}
//                 alt={roomData.title}
//                 className="rounded-md shadow-lg"
//               />
//             </div>
//             <p className="text-lg mt-4">
//               Location: {roomData.state}, {roomData.city}, {roomData.zip}
//             </p>
//             <div className="flex justify-between pt-3 space-x-2 text-xs dark:text-white">
//               {roomData.amenities.map((amenities) => (
//                 <span key={amenities}>{amenities}</span>
//               ))}
//             </div>
//             <p className="text-2xl font-bold my-4">${roomData.price}</p>
//             <p className="text-lg">{roomData.desc}</p>
//             <div className="flex justify-center mt-6">
//               <Booking roomId={roomData.id} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Booking from "./Booking";
import Navbar from "../Navbar/Navbar";

function Details() {
  const [room, setRoom] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getroom/${id}`)
      .then((response) => {
        setRoom(response.data);
        console.log(response.data);
        console.log(room);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{room.title}</h1>
      <img src={room.image} alt={room.title} />
      <p>{room.desc}</p>
      <p>{room.price}</p>
      <p>
        Location: Province no.: {room.state} , city: {room.city}, zip:{" "}
        {room.zip}
      </p>

      <ul>
        {room.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <Booking />
    </div>
  );
}

export default Details;
