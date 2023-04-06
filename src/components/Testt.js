import React, { useState, useEffect } from "react";
import mapboxgl, { Popup } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmliZWtzdGhhLTczNSIsImEiOiJjbGZ6MGx5cTEwbXMyM3JtbXpoMWxzcGtuIn0.cQM8sr3Z_s7fmObgQOxukw";

function MapTestt(props) {
  const [map, setMap] = useState(null);
  //   const [locations, setLocations] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!props.mapProps || !props.mapProps.data) {
        return;
      }

      const { data } = props.mapProps;
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
  }, [props.mapProps]);

  console.log("location", locations);

  useEffect(() => {
    if (map && locations.length > 0) {
      const markers = locations.map((location) => {
        const long = location.longitude;
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
      center: [84.88429477247905, 27.706006181159978], // Default center
      zoom: 6,
    });

    setMap(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (map && locations.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach((location) =>
        bounds.extend([location.longitude, location.latitude])
      );

      map.fitBounds(bounds, { padding: 50, maxZoom: 14 });
    }
  }, [map, locations]);

  return (
    <div
      id="map"
      style={{
        width: "40%",
        height: "400px",
        position: "absolute",
        top: "750px",
        right: "70px",
      }}
    />
  );
}

export default MapTestt;
