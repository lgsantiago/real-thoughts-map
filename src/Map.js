// src/Map.js
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";

const Map = ({ address }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const [center, setCenter] = useState({
    lat: 25.761681,
    lng: -80.191788,
  });

  const [zoom, setZoom] = useState(10);

  const geocodeAddress = async (address) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          },
        }
      );

      const location = response.data.results[0]?.geometry.location;
      setCenter(location);
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  useEffect(() => {
    if (address) {
      geocodeAddress(address);
      setZoom(15);
    }
    console.table({ address, center, zoom });
  }, [address]);

  return (
    <div className="MapContainer">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={zoom} center={center}>
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
