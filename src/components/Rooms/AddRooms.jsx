import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Toast from "../Navbar/Toast";
import Navbar from "../Navbar/Navbar";
import Map from "../Map/Map";

const AddRooms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state.locationData;
  console.log(locationData.address);

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const [inputs, setInputs] = useState([""]);
  const [amenities, setAmenities] = useState([]);
  const [showMap, setShowMap] = useState(false);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
    setAmenities(inputs);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setAmenities(newInputs);
  };

  const [image, setImage] = useState();
  const [error, seterror] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [authData, setAuthData] = useState({
    title: "",
    latitude: "",
    longitude: "",
    address: "",
    available: true,
    price: "",
    desc: "",
    amenities: "",
  });

  const test = (e) => {
    setImage(e.target.files[0]);
  };

  const RoomDetails = async (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      seterror([]);
    }, 5000);

    const formData = new FormData();
    formData.append("data", amenities);

    formData.append(
      "data",
      JSON.stringify({
        title: authData.title,
        latitude: locationData.longitude,
        longitude: locationData.latitude,
        address: locationData.address,
        amenities: amenities,
        available: true,
        price: authData.price,
        desc: authData.desc,
      })
    );

    formData.append("image", image);
    console.log(formData);
    console.log(token);

    const headers = {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/add-room`,
        formData,
        { headers }
      );

      seterror(response.data);

      if (response.data.status === 200) {
        navigate(`/`);
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        seterror(err.respronse.data.message);
      } else {
        seterror("Please try again later.");
      }
    }
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto md:inset-0"
      aria-modal="true"
      aria-hidden="true"
      role="dialog"
    >
      <Navbar />

      <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-200">
        <div className="relative bg-gray-100 dark:bg-white rounded-lg shadow w-3/4">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-black dark:text-black">
              Add Rooms
            </h3>
            <div className="App">
              Set your locations here:
              <button
                className=" text-black bg-slate-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-white-700 dark:focus:ring-white-800"
                onClick={toggleMap}
              >
                Map
              </button>
              {showMap && (
                <div
                  style={{
                    position: "fixed",
                    top: "100px",
                    bottom: "20px",
                    right: "400px",
                    backgroundColor: "#fff",
                    padding: "10px",
                    border: "1px solid #ccc",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
                    zIndex: 9999,
                  }}
                >
                  <button
                    style={{ position: "absolute", top: "5px", right: "5px" }}
                    onClick={toggleMap}
                  >
                    X
                  </button>
                  <Map />
                </div>
              )}
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={authData.title}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      title: e.target.value,
                    });
                  }}
                  className="bg-white border border-gray-300 dark:border-black text-black dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Price per Months
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={authData.price}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      price: e.target.value,
                    });
                  }}
                  className="bg-black-50 border border-white-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Amenities
                </label>
                {inputs.map((input, index) => (
                  <input
                    className="border rounded px-4 py-2 mb-2  border-black ml-2"
                    key={index}
                    value={input}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ))}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleAddInput}
                >
                  Add
                </button>
                {amenities.length > 0 && (
                  <div className="flex items-center mt-4">
                    <p className="font-bold">
                      Amenities: {amenities.join(", ")}
                    </p>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                      onClick={() => console.log(amenities)}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Images
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={test}
                  aria-label="A photo of a beautifully decorated room"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Descriptions
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  value={authData.desc}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      desc: e.target.value,
                    });
                  }}
                  className="bg-black-50 border border-black text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>
              {showToast && <Toast message={error} />}

              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => {
                    RoomDetails(e);
                  }}
                  type="submit"
                  className="w-1/6 text-black bg-slate-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;
