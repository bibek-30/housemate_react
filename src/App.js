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
import BookingHistory from "./components/Rooms/BookingHistory";
import History from "./components/BookShare/History";
import Map from "./components/Map/Map";
import MapTest from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />

        <Route path="/dash//*" element={<Dashboard />}>
          <Route path="user" element={<User />} />
          <Route path="rooms" element={<RoomData />} />
        </Route>

        <Route path="/test" element={<MapTest />} />

        {/* <Route path="/test//*" element={<History />}>
          <Route to="book" element={<BookingHistory />} />
        </Route> */}

        <Route path="/register" element={<Registration />} />
        {/* <Route path="/test" element={<History />} /> */}

        <Route element={<ProtectedRoute />}>
          <Route path="/map" element={<Map />} />
          <Route path="/add-room" element={<AddRooms />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<Details />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/book-history" element={<BookingHistory />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
