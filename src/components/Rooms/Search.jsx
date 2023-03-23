import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [roomData, setRoomData] = useState([]);

  const [authData, setAuthData] = useState({
    city: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      city: authData.city,
    };

    const response = await axios.post(`http://127.0.0.1:8000/api/feed`, data);
    console.log(response.data);
    setRoomData(response.data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-1/4 py-2 px-4 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          value={authData.city}
          onChange={(e) => {
            setAuthData({
              ...authData,
              city: e.target.value,
            });
          }}
        />
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
