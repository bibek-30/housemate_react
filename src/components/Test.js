// import React, { useState } from "react";

// const Test = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputs, setInputs] = useState([""]);
//   const [conditions, setconditions] = useState([]);

//   function handleButtonClick() {
//     setIsOpen(!isOpen);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // TODO: Handle form submission logic
//     console.log("Submitted data:", conditions);
//   }

//   function handleClose() {
//     setIsOpen(false);
//   }

//   function handleInputChange(event, index) {
//     const values = [...inputs];
//     values[index] = event.target.value;
//     setInputs(values);
//   }

//   function handleAddInput() {
//     setInputs([...inputs, ""]);
//   }

//   function handleAddCondition() {
//     setconditions([...conditions, inputs.join(" ")]);
//   }

//   return (
//     <div className="relative h-screen">
//       {/* Render the button and attach the onClick handler */}
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute top-4 right-4 z-10"
//         onClick={handleButtonClick}
//       >
//         Open Form
//       </button>

//       {/* Render the form conditionally based on the value of isOpen */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md">
//             <div className="mb-4">
//               <label
//                 htmlFor="conditions"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Conditions:
//               </label>
//               {inputs.map((input, index) => (
//                 <input
//                   type="text"
//                   id={`conditions-${index}`}
//                   className="border rounded-md px-4 py-2 w-full mb-2"
//                   key={index}
//                   value={input}
//                   onChange={(event) => handleInputChange(event, index)}
//                 />
//               ))}
//               <button
//                 type="button"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                 onClick={handleAddInput}
//               >
//                 Add
//               </button>
//               <button
//                 type="button"
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
//                 onClick={handleAddCondition}
//               >
//                 Save
//               </button>
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Selected conditions:
//               </label>
//               <ul style={{ listStyle: "disc" }}>
//                 {conditions.map((condition, index) => (
//                   <li key={index}>{condition}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import axios from "axios";

// const Map = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(`127.0.0.1:8000/api/map`, {
//         name,
//         description,
//         price,
//         latitude,
//         longitude,
//       });
//       console.log(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error.response.data);
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Add a New Room</h2>

//       <div className="mb-4">
//         <label className="block font-medium mb-2">Name</label>
//         <input
//           type="text"
//           className="w-full border rounded py-2 px-3"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-2">Description</label>
//         <textarea
//           className="w-full border rounded py-2 px-3"
//           rows="4"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-2">Price</label>
//         <input
//           type="number"
//           className="w-full border rounded py-2 px-3"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-2">Latitude</label>
//         <input
//           type="number"
//           step="0.000001"
//           className="w-full border rounded py-2 px-3"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-2">Longitude</label>
//         <input
//           type="number"
//           step="0.000001"
//           className="w-full border rounded py-2 px-3"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//         />
//       </div>

//       <button
//         type="submit"
//         className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${
//           loading ? "opacity-50 cursor-wait" : ""
//         }`}
//         disabled={loading}
//       >
//         {loading ? "Loading..." : "Add Room"}
//       </button>
//     </form>
//   );
// };

// export default Map;

//marker wala

// export default Map;

// import React, { useState, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// import MapboxDraw from "@mapbox/mapbox-gl-draw";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

// function Map() {
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [address, setAddress] = useState("");
//   const [marker, setMarker] = useState(null);

//   const handleMapClick = (event) => {
//     const { lngLat } = event;
//     setLatitude(lngLat.lat);
//     setLongitude(lngLat.lng);

//     if (!marker) {
//       // Create a new marker if it doesn't exist

//       const newMarker = new mapboxgl.Marker()
//         .setLngLat([longitude, latitude])
//         .addTo(Map);
//       setMarker(newMarker);
//     } else {
//       // Move the existing marker if it exists
//       marker.setLngLat([longitude, latitude]);
//     }
//   };

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [84.1, 28.39],
//       zoom: 8,
//     });

//     const draw = new MapboxDraw();
//     map.addControl(draw, "top-left");

//     map.on("load", function () {
//       map.addSource("single-point", {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [],
//         },
//       });

//       map.addLayer({
//         id: "point",
//         source: "single-point",
//         type: "circle",
//         paint: {
//           "circle-radius": 10,
//           "circle-color": "#007cbf",
//           "circle-stroke-width": 3,
//           "circle-stroke-color": "#fff",
//         },
//       });

//       // Add navigation control (zoom in, zoom out buttons)
//       map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
//     });

//     map.on("click", handleMapClick);

//     return () => map.remove();
//   }, [marker]);

//   useEffect(() => {
//     if (latitude && longitude) {
//       // Use Mapbox's Geocoding API to get the address
//       fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setAddress(data.features[0].place_name);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [latitude, longitude]);

//   return (
//     <div className="p-10">
//       <div id="map" style={{ width: "100%", height: "400px" }} />
//       <div className="p-12">
//         <p>Latitude: {latitude}</p>
//         <p>Longitude: {longitude}</p>
//         <p>Address: {address}</p>
//       </div>
//     </div>
//   );
// }

// export default Map;

// Search;

// import React, { useState, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "mapbox-gl-geocoder";

// import "mapbox-gl/dist/mapbox-gl.css";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// import { colors } from "@mui/material";
// import { red } from "@mui/material/colors";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

// function MapTest() {
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [address, setAddress] = useState("");
//   const [map, setMap] = useState(null);

//   const handleMapClick = (event) => {
//     colors = red;
//     const { lngLat } = event;
//     setLatitude(lngLat.lat);
//     setLongitude(lngLat.lng);

//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${mapboxgl.accessToken}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const { place_name } = data.features[0];
//         setAddress(place_name);
//       });

//     //
//   };

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [84.1, 28.39],
//       zoom: 6,
//     });

//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl: mapboxgl,
//     });

//     map.addControl(geocoder);

//     map.addControl(new mapboxgl.NavigationControl());

//     setMap(map);

//     map.on("click", handleMapClick);

//     return () => map.remove();
//   }, []);

//   return (
//     <div className="p-10">
//       <div id="map" style={{ width: "100%", height: "400px" }} />
//       <div className="p-12">
//         <p>Latitude: {latitude}</p>
//         <p>Longitude: {longitude}</p>
//         <p>Address: {address}</p>
//       </div>
//     </div>
//   );
// }

// export default MapTest;

import React, { useState, useEffect } from "react";
import mapboxgl, { Popup } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

function MapTest(mapProps) {
  const [map, setMap] = useState(null);
  //   const [locations, setLocations] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!mapProps || !mapProps.data) {
        return;
      }

      const { data } = mapProps;
      console.log("data", data);

      const newLocations = data
        .filter((room) => room.latitude >= -90 && room.latitude <= 90)
        .map(({ latitude, longitude, title }) => ({
          longitude: parseFloat(latitude),
          latitude: parseFloat(longitude),
          title,
        }));

      setLocations(newLocations);
      console.log(newLocations);
    }

    fetchData();
  }, [mapProps]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch("http://127.0.0.1:8000/api/get-room");
  //         const data = await response.json();
  //         const newLocations = data
  //           .filter((room) => room.latitude >= -90 && room.latitude <= 90)
  //           .map(({ latitude, longitude, title }) => ({
  //             longitude: parseFloat(latitude),
  //             latitude: parseFloat(longitude),
  //             title,
  //           }));

  //         setLocations(newLocations);
  //         console.log(newLocations);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }

  //     fetchData();
  //   }, []);

  console.log("location", locations);

  useEffect(() => {
    if (map && locations.length > 0) {
      const markers = locations.map((location) => {
        console.log(location.latitude);
        const marker = new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .addTo(map);

        const popup = new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat([location.longitude, location.latitude])
          .setHTML(location.title);

        marker.getElement().addEventListener("mouseenter", () => {
          popup.addTo(map);
        });

        marker.getElement().addEventListener("mouseleave", () => {
          popup.remove();
        });

        return marker;
      });

      return () => {
        markers.forEach((marker) => marker.remove());
      };
    }
  }, [map, locations]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [84.88429477247905, 27.706006181159978],
      zoom: 8,
    });

    setMap(map);

    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "41%",
        height: "540px",
        position: "absolute",
        top: "285px",
        right: "23px",
      }}

      // <div
      //   id="map"
      //   style={{
      //     width: "40%",
      //     height: "400px",
      //     position: "absolute",
      //     top: "750px",
      //     right: "70px",
      //   }}
    />
  );
}

export default MapTest;
