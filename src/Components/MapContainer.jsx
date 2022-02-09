import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "80%",
  };

  const defaultCenter = {
    lat: 48.8528,
    lng: 2.3883,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDEaeUiFD9oAnB1LNDiK-GWyDq6zS9HWS4">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
