// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const RoomHistory = () => {
//   const token = localStorage.getItem("token");

//   const [errorMessage, setErrorMessage] = useState("");
//   const [rooms, setrooms] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://127.0.0.1:8000/api/user-room`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if (response.data === "No room added by the user.") {
//           setErrorMessage(response.data);
//         } else {
//           setrooms(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="w-full right-px">
//       <div className="bg-white rounded-lg shadow-lg">
//         {/* <h1 className="font-bold text-lg text-gray-600 pl-5">Room History</h1> */}
//         {errorMessage ? (
//           <p className="bg-red-100 text-red-800 border border-red-500 py-2 px-4 rounded">
//             {errorMessage}
//           </p>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Title
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Address
//                 </th>
//                 <th scope="col" className="relative px-6 py-3">
//                   <span className="sr-only">Edit/Delete</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {rooms.map((book) => (
//                 <tr key={book.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {book.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {book.address}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button className="text-indigo-600 hover:text-indigo-900">
//                       Edit
//                     </button>
//                     <button className="ml-4 text-red-600 hover:text-red-900">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomHistory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RoomHistory = () => {
//   const token = localStorage.getItem("token");

//   const [errorMessage, setErrorMessage] = useState("");
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://127.0.0.1:8000/api/user-room`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.data === "") {
//           setErrorMessage(response.data);
//         } else {
//           setRooms(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this room?"
//     );
//     if (confirmDelete) {
//       try {
//         await delete `http://127.0.0.1:8000/api/room/delete/${id}`;
//         setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="w-full right-px">
//       <div className="bg-white rounded-lg shadow-lg">
//         {errorMessage ? (
//           <p className="bg-red-100 text-red-800 border border-red-500 py-2 px-4 rounded">
//             {errorMessage}
//           </p>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Title
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Address
//                 </th>
//                 <th scope="col" className="relative px-6 py-3">
//                   Actions
//                   <span className="sr-only">Edit/Delete</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {rooms.map((book) => (
//                 <tr key={book.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {book.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {book.address}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       className="text-indigo-600 hover:text-indigo-900"
//                       onClick={() => console.log("Edit button clicked")}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="ml-4 text-red-600 hover:text-red-900"
//                       onClick={() => handleDelete(book.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomHistory;

import React, { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./EditRoom";

const RoomHistory = () => {
  const token = localStorage.getItem("token");

  const [errorMessage, setErrorMessage] = useState("");
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user-room`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "") {
          setErrorMessage(response.data);
        } else {
          setRooms(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/room/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (room) => {
    setEditingRoom(room);
  };

  const handleSave = async (updatedRoom) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/room/edit/${updatedRoom.id}`,
        {
          title: updatedRoom.title,
          price: updatedRoom.price,
          image: updatedRoom.image,
          desc: updatedRoom.desc,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === response.data.id ? response.data : room
        )
      );
      setEditingRoom(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingRoom(null);
  };

  return (
    <div className="w-full right-px">
      <div className="bg-white rounded-lg shadow-lg">
        {editingRoom ? (
          <EditForm
            room={editingRoom}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : errorMessage ? (
          <p className="bg-red-100 text-red-800 border border-red-500 py-2 px-4 rounded">
            {errorMessage}
          </p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th scope="col" className="relative px-6 py-3">
                  Actions
                  <span className="sr-only">Edit/Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.id} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {room.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {room.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => handleEdit(room)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 ml-4"
                      onClick={() => handleDelete(room.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RoomHistory;
