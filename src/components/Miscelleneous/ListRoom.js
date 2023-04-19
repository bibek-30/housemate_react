import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const RentalProcess = () => {
  return (
    <div>
      <Navbar />
      <div className="rental-process">
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
            <div className="w-full h-80 bg-gray-200 mb-4"></div>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Select Your Room</h3>
            <p className="mb-4">
              Once you've found the room you want, click on the listing to view
              more details. Check the availability calendar to make sure the
              room is open for your desired dates.
            </p>
            <div className="w-full h-80 bg-gray-200 mb-4"></div>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Complete Your Booking</h3>
            <p className="mb-4">
              Fill out the booking form with your personal and payment
              information. Double-check the details to ensure everything is
              correct before submitting your reservation.
            </p>
            <div className="w-full h-80 bg-gray-200 mb-4"></div>
          </li>
          <li>
            <h3 className="text-xl font-bold mb-4">Enjoy Your Stay!</h3>
            <p className="mb-4">
              Once your reservation is confirmed, pack your bags and get ready
              for your trip! We'll send you a confirmation email with all the
              details of your booking, including check-in instructions and
              contact information for your host.
            </p>
            <div className="w-full h-80 bg-gray-200 mb-4"></div>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default RentalProcess;
