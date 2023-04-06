import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Booking from "./Booking";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faWallet } from "@fortawesome/free-solid-svg-icons";
import MapTestt from "../Testt";

function Details() {
  const [room, setRoom] = useState();
  const { id } = useParams();
  const [mapProps, setMapProps] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getroom/${id}`)
      .then((response) => {
        setRoom(response.data);
        setMapProps({
          data: [
            {
              latitude: response.data.latitude,
              longitude: response.data.longitude,
              title: response.data.title,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log("props", mapProps);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="flex flex-wrap gap-0 items-start justify-center ">
            <img
              src={room.image}
              alt={room.title}
              className="border border-gray-400 rounded-lg w-1/2 m-10"
            />
          </div>
          <h1 className="text-3xl font-bold pl-16">{room.title}</h1>
          <div>
            <div className="mb-18">
              <MapTestt mapProps={mapProps} />
            </div>
            <div>
              <div className="w-1/2 pl-16 pt-6">
                <p className="text-black">
                  <FontAwesomeIcon icon={faWallet} />
                  Price per month: Rs{" "}
                  <span className=" font-bold">{room.price}</span>
                </p>
                <FontAwesomeIcon icon={faMapMarker} /> {room.address}
              </div>
              <div className="w-1/2 pl-16 pt-6">
                <h1 className="text-xl font-bold text-gray-600">
                  Descriptions
                </h1>
                <p className="text-black ">{room.desc}</p>
              </div>
              <div className="w-1/2 pl-16 pt-6">
                <h1 className="text-xl font-bold text-gray-600">Features</h1>
                <div>
                  <ul className="flex flex-wrap list-none ml-4 gap-x-4">
                    {room.amenities.map((amenity, index) => (
                      <li
                        key={index}
                        className="bg-blue-400 p-2 my-1 rounded-md w-1/2 sm:w-1/3 md:w-1/4"
                      >
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Booking roomId={room.id} />
        </div>
      </div>
    </>
  );
}

export default Details;
