import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ShareHistory = () => {
  const token = localStorage.getItem("token");

  const [errorMessage, setErrorMessage] = useState("");
  const [booking, setBooking] = useState([]);

  const roomId = booking.id;
  console.log(roomId);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/myshare`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "No room has been posted to share.") {
          setErrorMessage(response.data);
        } else {
          setBooking(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const removehandle = () => {
    const res = axios.put("http://127.0.0.1:8000/api/removeShare/${roomId}");
    if (res.data.staus == 200) {
      console.log("done");
    }
  };

  return (
    <div className="w-full right-px">
      <div className="bg-white rounded-lg shadow-lg">
        {/* <h1 className="font-bold text-lg text-gray-600 pl-5">Room History</h1> */}
        {errorMessage ? (
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
                  <span className="sr-only">Edit/Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {booking.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {book.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={removehandle}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Remove
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

export default ShareHistory;
