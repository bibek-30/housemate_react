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
        navigate("/");
      }
    } catch (error) {
      // Booking failed
      console.error(error);
      setErrorMessage(error.response.data.error);
      setSuccessMessage("");
    }
  };

  function isDateRangeBooked(startDate, endDate) {
    let bookedRanges;
    for (let i = 0; i < bookedRanges.length; i++) {
      const bookedStart = new Date(bookedRanges[i].startDate);
      const bookedEnd = new Date(bookedRanges[i].endDate);
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (
        (start >= bookedStart && start <= bookedEnd) ||
        (end >= bookedStart && end <= bookedEnd)
      ) {
        return true;
      }
    }
    return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}

      <label htmlFor="start_date">Start date:</label>
      <input
        type="date"
        id="start_date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        min={new Date().toISOString().split("T")[0]} // set minimum date to today
        max={endDate || ""} // set maximum date to end date, or empty string if end date not selected
        required
      />
      <br />
      <label htmlFor="end_date">End date:</label>
      <input
        type="date"
        id="end_date"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        min={startDate || new Date().toISOString().split("T")[0]} // set minimum date to start date, or today if start date not selected
        max={new Date().toISOString().split("T")[0]} // set maximum date to today
        required
        disabled={isDateRangeBooked(startDate, endDate)} // disable the input field if the selected date range is already booked
      />

      <label htmlFor="book_amount">Booking Amount:</label>
      <input
        className="bg-black-50 border border-black text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black p-2.5 dark:bg-white-600 dark:border-black  dark:text-black"
        type="number"
        id="booking_amount"
        value={booking_amount}
        onChange={(event) => set_booking_amount(event.target.value)}
      />
      <br />
      <div>
        <button onClick={() => checkout.show({ amount: 1000 })}>
          Pay with khalti
        </button>
      </div>
      <button
        className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4
      rounded-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Book room
      </button>
    </form>
  );
};

export default Booking;
