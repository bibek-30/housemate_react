import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Login from "./components/Login/Login";
import AddRooms from "./components/Rooms/AddRooms";
import Landing from "./components/Pages/Landing";
import Registration from "./components/Login/Registration";
import Rooms from "./components/Rooms/Rooms";
import Details from "./components/Rooms/Details";
import Booking from "./components/Rooms/Booking";
import Profile from "./components/Navbar/Profile";
import ProtectedRoute from "./components/protected-route/protected-route";
import Dashboard from "./components/Dashboard/Dashboard";
import User from "./components/Dashboard/User";
import RoomData from "./components/Dashboard/RoomData";
import History from "./components/BookShare/History";
import Map from "./components/Map/Map";
import MapTest from "./components/Test";
import ShareHistory from "./components/BookShare/ShareHistory";
import RoomHistory from "./components/BookShare/RoomHistory";
import Logout from "./components/Login/Logout";
import ChartComponent from "./components/Dashboard/Chart";
import Payments from "./components/Dashboard/Payments";
import FaqList from "./components/Miscelleneous/FAQs";
import CustomerSupport from "./components/Miscelleneous/Support";
import RentalProcess from "./components/Miscelleneous/ListRoom";
import BookingSteps from "./components/Miscelleneous/BookingRooms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />

        <Route path="/dash//*" element={<Dashboard />}>
          <Route path="user" element={<User />} />
          <Route path="rooms" element={<RoomData />} />
          <Route path="payment" element={<Payments />} />
        </Route>

        <Route path="/test" element={<MapTest />} />

        <Route path="/history//*" element={<History />}>
          <Route path="roomshared" element={<ShareHistory />} />
          <Route path="room-history" element={<RoomHistory />} />
        </Route>

        <Route path="/register" element={<Registration />} />
        <Route path="/room/:id" element={<Details />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="payment" element={<Payments />} />

        <Route path="/chart" element={<ChartComponent />} />
        <Route path="/faqs" element={<FaqList />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/listrooms" element={<RentalProcess />} />
        <Route path="/booking/steps" element={<BookingSteps />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/map" element={<Map />} />
          <Route path="/add-room" element={<AddRooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/book-history" element={<BookingHistory />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
