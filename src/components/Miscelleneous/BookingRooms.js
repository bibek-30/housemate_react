import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const BookingSteps = () => {
  return (
    <div>
      <Navbar />
      <div className="flex md:flex-row justify-around items-center py-8 bg-gray-100">
        <div className="flex flex-col items-center md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">
            Book Your Stay in 4 Easy Steps
          </h2>
          <div className="rounded-full bg-blue-500 w-12 h-12 flex justify-center items-center">
            <span className="text-white text-2xl font-bold">1</span>
          </div>
          <p className="font-bold mt-4">Choose Dates</p>
          <p className="text-gray-500 text-center mt-2">
            Select the dates for your stay
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/4">
          <div className="rounded-full bg-blue-500 w-12 h-12 flex justify-center items-center">
            <span className="text-white text-2xl font-bold">2</span>
          </div>
          <p className="font-bold mt-4">Choose Room</p>
          <p className="text-gray-500 text-center mt-2">
            Select the room that suits your needs
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/4">
          <div className="rounded-full bg-blue-500 w-12 h-12 flex justify-center items-center">
            <span className="text-white text-2xl font-bold">3</span>
          </div>
          <p className="font-bold mt-4">Make Payment</p>
          <p className="text-gray-500 text-center mt-2">
            Pay for your booking securely
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/4">
          <div className="rounded-full bg-blue-500 w-12 h-12 flex justify-center items-center">
            <span className="text-white text-2xl font-bold">4</span>
          </div>
          <p className="font-bold mt-4">Confirmation</p>
          <p className="text-gray-500 text-center mt-2">
            Receive confirmation of your booking
          </p>
        </div>
      </div>
      <div className="rental-process py-8 p-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Renting a Room with Easy Rental System
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <li>
            <h3 className="text-xl font-bold mb-4">
              Search for Available Rooms
            </h3>
            <p className="mb-4">
              Use our search function to find the perfect room for your stay.
              You can filter by location, price, and amenities to narrow down
              your options.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Select Your Room</h3>
            <p className="mb-4">
              Once you've found the room you want, click on the listing to view
              more details. Check the availability calendar to make sure the
              room is open for your desired dates.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Make Your Booking</h3>
            <p className="mb-4">
              Click the "Book Now" button to make your reservation. You'll be
              taken to a secure checkout page where you can enter your payment
              information and confirm your booking.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Confirmation</h3>
            <p className="mb-4">
              Once your payment has been processed, you'll receive a
              confirmation email with all the details of your booking. You can
              also view your booking details in your account dashboard.
            </p>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};
export default BookingSteps;
