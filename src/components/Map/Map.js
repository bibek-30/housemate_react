// import React, { useState, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "mapbox-gl-geocoder";

// import "mapbox-gl/dist/mapbox-gl.css";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// import { useNavigate } from "react-router-dom";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

// function Map() {
//   const navigate = useNavigate();
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [address, setAddress] = useState("");
//   const [map, setMap] = useState(null);

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

//   const locationData = {
//     latitude: latitude,
//     longitude: longitude,
//     address: address,
//   };

//   const handleOkayButtonClick = () => {
//     navigate("/add-room", { state: { locationData: locationData } });
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
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div>
//         <div id="map" style={{ width: "800px", height: "400px" }} />
//         <div className="p-12">
//           <p className="text-lg font-bold">Latitude: {latitude}</p>
//           <p className="text-lg font-bold">Longitude: {longitude}</p>
//           <p className="text-lg font-bold">Address: {address}</p>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleOkayButtonClick}
//           >
//             Add
//           </button>
//         </div>
//       </div>
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
  "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJja3JmamFnaGswMWYzMm9vOXJxa2M1ZmNmIn0.l-nBjlyv1AY-gGSfjlAjDA";

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

    map.on("click", function (e) {
      if (
        e.lngLat.lng < 80.030501 ||
        e.lngLat.lng > 88.193236 ||
        e.lngLat.lat < 26.34772 ||
        e.lngLat.lat > 30.448966
      ) {
        return;
      } else {
        handleMapClick(e);
      }
    });

    return () => map.remove();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div id="map" style={{ width: "800px", height: "400px" }} />
        <div className="p-12">
          <p className="text-lg font-bold">Latitude: {latitude}</p>
          <p className="text-lg font-bold">Longitude: {longitude}</p>
          <p className="text-lg font-bold">Address: {address}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleOkayButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Map;
