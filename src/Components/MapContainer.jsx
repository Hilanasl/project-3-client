import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import apiHandler from "../api/apiHandler";

const MapContainer = ({ id }) => {
  const mapStyles = {
    height: "100vh",
    width: "60%",
  };

  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    // apiHandler.get(`/trips/${id}`).then((trip) => {
    //   setCurrentPosition((state) => {
    //     state.lat = trip.data.days[0].activities[0]?.coords?.coordinates[0];
    //     state.lng = trip.data.days[0].activities[0]?.coords?.coordinates[1];
    //     return state;
    //   });
    // });
  });

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat ? (
          <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
