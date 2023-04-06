import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import KhaltiCheckout from "khalti-checkout-web";
import config from "../utils/KhaltiConfig";

const Booking = ({ roomId }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [booking_amount, set_booking_amount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  let checkout = new KhaltiCheckout(config);

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/book-room/${roomId}`,
        {
          start_date: startDate,
          end_date: endDate,
          booking_amount: booking_amount ? booking_amount : 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        setSuccessMessage("Room booked successfully!");
        setErrorMessage("");
        setStartDate("");
        setEndDate("");
        setShowBooking(false);
        navigate("/profile");
      }
    } catch (error) {
      // Booking failed
      console.error(error);
      setErrorMessage(error.response.data.error);
      setSuccessMessage("");
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={() => setShowBooking(true)}
      >
        Book Room
      </button>
      {showBooking && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg pl-28 pr-28 pt-10 pb-10 mx-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-green-500 text-sm">{successMessage}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="start_date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Start date:
                </label>
                <input
                  type="date"
                  id="start_date"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  required
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="end_date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  End date:
                </label>
                <input
                  type="date"
                  id="end_date"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                  required
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                />
              </div>
              {/* <div className="mb-4">
                <label
                  htmlFor="book_amount"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Booking Amount:
                </label>
                <input
                  className="bg-black-50 border border-black text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black p-2.5 dark:bg-white-600 dark:border-black dark:text-black"
                  type="number"
                  id="booking_amount"
                  value={booking_amount}
                  onChange={(event) => set_booking_amount(event.target.value)}
                />
              </div> */}
              <div className="mb-4" style={{ textAlign: "center" }}>
                <button
                  className="bg-purple-800 text-white font-bold focus:outline-none py-2 px-2 focus:shadow-outline rounded"
                  onClick={() => checkout.show({ amount: 1000 })}
                >
                  Pay with khalti
                </button>
              </div>

              <div className="mb-4 flex justify-between items-center gap-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  style={{ fontSize: "1.2rem", width: "8rem", height: "3rem" }}
                >
                  Okay
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setShowBooking(false)}
                  style={{ fontSize: "1.2rem", width: "8rem", height: "3rem" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
