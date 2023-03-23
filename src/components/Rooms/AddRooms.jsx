import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Navbar/Toast";

import Navbar from "../Navbar/Navbar";

const AddRooms = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const [inputs, setInputs] = useState([""]);
  const [amenities, setAmenities] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
    setAmenities(inputs);
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
    city: "",
    state: "",
    zip: "",
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
    }, 3000);

    const formData = new FormData();
    formData.append("data", amenities);

    formData.append(
      "data",
      JSON.stringify({
        title: authData.title,
        city: authData.city,
        state: authData.state,
        zip: authData.zip,
        available: true,
        price: authData.price,
        desc: authData.desc,
        amenities: amenities,
      })
    );

    formData.append("image", image);
    console.log(formData);

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

      console.log(response);
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
      <div className=" flex items-center justify-center min-h-screen">
        <div className="relative bg-white rounded-lg shadow dark:bg-blue-600">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add Rooms
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>
              <div className="bg-red-100">
                {inputs.map((input, index) => (
                  <input
                    className="border"
                    key={index}
                    value={input}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ))}
                <button type="button" onClick={handleAddInput}>
                  Add
                </button>
                {amenities.length > 0 && (
                  <div>
                    <p>Amenities: {amenities.join(", ")}</p>
                    <button onClick={() => console.log(amenities)}>
                      Submit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full mb-2 md:mr-2 md:mb-0">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <div className="relative">
                    <input
                      name="city"
                      id="city"
                      value={authData.city}
                      onChange={(e) => {
                        setAuthData({
                          ...authData,
                          city: e.target.value,
                        });
                      }}
                      className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  pr-3 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-2 md:mr-2 md:mb-0">
                  <label
                    htmlFor="state"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <div className="relative">
                    <input
                      name="state"
                      id="state"
                      value={authData.state}
                      onChange={(e) => {
                        setAuthData({
                          ...authData,
                          state: e.target.value,
                        });
                      }}
                      className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  pr-3 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:ml-2">
                  <label
                    htmlFor="zip"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Zip
                  </label>
                  <div className="relative">
                    <input
                      name="zip"
                      id="zip"
                      value={authData.zip}
                      onChange={(e) => {
                        setAuthData({
                          ...authData,
                          zip: e.target.value,
                        });
                      }}
                      className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>
              {showToast && <Toast message={error} />}

              <button
                onClick={(e) => {
                  RoomDetails(e);
                }}
                type="submit"
                className="w-full text-black bg-slate-100 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;
