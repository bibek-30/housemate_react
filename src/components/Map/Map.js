// import React, { useState, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "mapbox-gl-geocoder";

// import "mapbox-gl/dist/mapbox-gl.css";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// import AddRooms from "../Rooms/AddRooms";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

// function Map() {
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [address, setAddress] = useState("");
//   const [map, setMap] = useState(null);
//   const [showMap, setShowMap] = useState(false);

//   const handleMapClick = (event) => {
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
//   };

//   const handleSelectLocationClick = () => {
//     const locationData = {
//       latitude: latitude,
//       longitude: longitude,
//       address: address,
//     };
//     setShowMap(false);
//     // Pass the location data to the AddRoom component via props
//     <AddRooms locationData={locationData} />;
//   };

//   useEffect(() => {
//     if (showMap) {
//       const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [84.1, 28.39],
//         zoom: 6,
//       });

//       const geocoder = new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//       });

//       map.addControl(geocoder);

//       map.addControl(new mapboxgl.NavigationControl());

//       setMap(map);

//       map.on("click", handleMapClick);

//       return () => map.remove();
//     }
//   }, [showMap]);

//   return (
//     <div>
//       {!showMap && (
//         <button
//           onClick={() => setShowMap(true)}
//           className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Select Location
//         </button>
//       )}
//       {showMap && (
//         <div>
//           <div id="map" style={{ width: "100%", height: "400px" }} />
//           <div className="p-12">
//             <p>Latitude: {latitude}</p>
//             <p>Longitude: {longitude}</p>
//             <p>Address: {address}</p>
//             <button
//               onClick={() => setShowMap(false)}
//               className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Close{" "}
//             </button>
//             <br></br>

//             <button
//               onClick={handleSelectLocationClick}
//               className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Okay{" "}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Map;

import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useNavigate } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

function Map() {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [map, setMap] = useState(null);

  const handleMapClick = (event) => {
    const { lngLat } = event;
    setLatitude(lngLat.lat);
    setLongitude(lngLat.lng);

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { place_name } = data.features[0];
        setAddress(place_name);
      });
  };

  const locationData = {
    latitude: latitude,
    longitude: longitude,
    address: address,
  };

  const handleOkayButtonClick = () => {
    navigate("/add-room", { state: { locationData: locationData } });
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [84.1, 28.39],
      zoom: 6,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    map.addControl(new mapboxgl.NavigationControl());

    setMap(map);

    map.on("click", handleMapClick);

    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }} />
      <div className="p-12">
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Address: {address}</p>
        <button onClick={handleOkayButtonClick}>Add</button>
      </div>
    </div>
  );
}

export default Map;
