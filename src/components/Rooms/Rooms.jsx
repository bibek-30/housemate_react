import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MapTest from "../Test";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const Search = () => {
  const [roomData, setRoomData] = useState([]);

  const [authData, setAuthData] = useState({
    city: "",
  });
  const [mapProps, setMapProps] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:8000/api/get-room");
      setRoomData(res.data);
      setMapProps({
        data: res.data.map((room) => ({
          latitude: room.latitude,
          longitude: room.longitude,
          title: room.title,
        })),
      });
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      address: authData.city,
    };
    const response = await axios.post(`http://127.0.0.1:8000/api/feed`, data);
    console.log(response.data);
    setRoomData(response.data);
    setMapProps({
      data: response.data.map((room) => ({
        latitude: room.latitude,
        longitude: room.longitude,
        title: room.title,
      })),
    });
  };
  console.log("mapProps", mapProps);

  const handleMapProps = () => {
    if (roomData.length) {
      return {
        data: roomData.map((room) => ({
          latitude: room.latitude,
          longitude: room.longitude,
          title: room.title,
        })),
      };
    }
    if (authData.city) {
      return {
        data: [],
      };
    }
    return mapProps;
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("http://127.0.0.1:8000/api/get-room");
  //     setRoomData(res.data);
  //   }
  //   fetchData();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     address: authData.city,
  //   };

  //   const response = await axios.post(`http://127.0.0.1:8000/api/feed`, data);
  //   console.log(response.data);
  //   setRoomData(response.data);
  // };
  return (
    <div>
      <Navbar />
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
        <div className="flex">
          <div className="w-7/12 overflow-auto scrollbar-none hover:scrollbar-thin">
            <section className="py-6 sm:py-12 dark:bg-white dark:text-white">
              {/* <section className="py-6 sm:py-12 dark:bg-white dark:text-white"> */}
              <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold text-black">
                    Rooms for rent
                  </h2>
                  <p className="font-serif text-sm dark:text-black">
                    Find and rent your perfect room.
                  </p>
                </div>
                <div
                  style={{
                    minHeight: "540px",
                  }}
                >
                  <div
                    className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2"
                    style={{
                      overflowY: "scroll",
                      maxHeight: "540px",
                    }}
                  >
                    {roomData.map((room) => (
                      <article
                        className="flex flex-col dark:bg-blue-600"
                        key={room.id}
                      >
                        <Link
                          to={`/room/${room.id}`}
                          aria-label={room.title}
                          className="room-image block w-full h-52 dark:bg-white"
                        >
                          <img
                            alt={room.title}
                            className="object-cover w-full h-full transition-transform duration-300 ease-out transform-gpu hover:scale-105"
                            src={room.image}
                          />
                        </Link>
                        <div className="flex flex-col flex-1 p-4">
                          <Link
                            to={`/room/${room.id}`}
                            className="text-xs tracking-wider uppercase hover:none dark:text-white"
                          >
                            {room.address}
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                              {room.title}
                            </h3>
                          </Link>

                          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-white">
                            <span>Rs {room.price}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <MapTest {...handleMapProps()} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
