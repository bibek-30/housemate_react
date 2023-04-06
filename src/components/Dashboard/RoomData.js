// import React, { useState } from "react";

// function RoomData() {
//   const [inputs, setInputs] = useState([""]);
//   const [amenities, setAmenities] = useState([]);

//   const handleAddInput = () => {
//     setInputs([...inputs, ""]);
//     setAmenities(inputs);
//   };

//   const handleInputChange = (event, index) => {
//     const newInputs = [...inputs];
//     newInputs[index] = event.target.value;
//     setInputs(newInputs);
//     setAmenities(newInputs);
//   };

//   return (
//     <div className="bg-red-100">
//       {inputs.map((input, index) => (
//         <input
//           className="border"
//           key={index}
//           value={input}
//           onChange={(event) => handleInputChange(event, index)}
//         />
//       ))}
//       <button type="button" onClick={handleAddInput}>
//         Add
//       </button>
//       {amenities.length > 0 && (
//         <div>
//           <p>Amenities: {amenities.join(", ")}</p>
//           <button onClick={() => console.log(amenities)}>Submit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RoomData;

import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

const RoomData = () => {
  let sn = 1;

  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://127.0.0.1:8000/api/get-room`);
      console.log(response);
      setRoomData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  SN
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Room Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Price per Months
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roomData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {sn++}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.city}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    <img
                      src={item.image}
                      alt="item"
                      className="small-img w-12"
                    />
                  </td>

                  <td className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                    <button style={{ marginRight: "10px" }}>Edit</button>
                    <button style={{ marginLeft: "10px" }}>Block</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
