import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CollectorMapPage.css";

export default function CollectorMapPage() {
  const [position, setPosition] = useState(null); // No default position, waits for live location
  const [locationError, setLocationError] = useState(null); // Handle location errors

  // Get user's live location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Set live location
        },
        (error) => {
          setLocationError("Unable to retrieve your location.");
          console.error("Error retrieving location: ", error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="map-container">
      {/* Show map only when position is available */}
      {position ? (
        <div className="map-section">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            className="map-element"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div className="map-section">
          {/* Display a loading message or error while waiting for location */}
          {locationError ? (
            <p>{locationError}</p>
          ) : (
            <p className="text-center text-gray-500 text-lg font-semibold mt-10 animate-pulse">
              Fetching your location...
            </p>
          )}
        </div>
      )}

      <div className="bg-white rounded-t-3xl z-20">
        <h1>CollectorMapPage</h1>
        <h1>CollectorMapPage</h1>
        <h1>CollectorMapPage</h1>
        <h1>CollectorMapPage</h1>
      </div>

    </div>
  );
}
