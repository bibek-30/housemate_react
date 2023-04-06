import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import ShareRoom from "../Rooms/ShareRoom";
import HistoryNav from "../BookShare/HistoryNav";

const BookingHistory = () => {
  const token = localStorage.getItem("token");

  const [errorMessage, setErrorMessage] = useState("");
  const [booking, setBooking] = useState([]);

  useEffect(() => {
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
    <div className="w-full right-px">
      <HistoryNav />
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
                        ({book.start_date}) - ({book.end_date})
                      </p>
                      <ShareRoom />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
