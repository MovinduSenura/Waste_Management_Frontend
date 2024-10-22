import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CollectorMapPage.css";
import RouteImg from "../../images/route.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSolidReport } from "react-icons/bi";

export default function CollectorMapPage() {
  const [position, setPosition] = useState(null); // No default position, waits for live location
  const [locationError, setLocationError] = useState(null); // Handle location errors

  const navigate = useNavigate();

  const [routes, setRoutes] = useState([]);
  useEffect(() => {

    const fetchRoutes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/WasteManagement/collectionRoutes");
        setRoutes(response.data)

        console.log("Fetched Route data : ", response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchRoutes();
  }, [])


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

      <div className="bg-white overflow-y-auto max-h-80 rounded-t-3xl">
        <h1 className="mt-5 ml-5">All Locations</h1>

        {routes.map((route, index) => (
          <div key={index} className="mt-3 ml-5 w-[90%] bg-white p-2 flex justify-between space-x-6 shadow-lg rounded-md">
            <img src={RouteImg} />
            <div className="flex justify-between w-full space-x-6 pr-4 pt-2">
              <h1 className="text-left">{route.routeName}</h1>
              <h1>{route.collectionDate}</h1>
              <button onClick={() => navigate("/collectorreportpage")}><BiSolidReport className="size-6 text-emerald-900" /></button>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation */}
      <div className="mt-auto bg-neutral-100 p-2 m-3 mb-6 flex justify-around rounded-full shadow-lg">
        <button onClick={() => navigate("/")}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z"
              fill="#080422"
            />
          </svg>
        </button>
        <button className="bg-black p-3 rounded-full text-white" onClick={() => { navigate('/wastecolladdpage') }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.4277 3C8.8477 3 9.1887 3.33438 9.1887 3.74722C9.1887 4.15907 8.8487 4.49345 8.4277 4.49345L6.7987 4.49444C5.4467 4.4964 4.3467 5.57604 4.3467 6.90279V8.76201C4.3467 9.17386 4.0047 9.50923 3.5847 9.50923C3.1647 9.50923 2.8237 9.17386 2.8237 8.76201V6.90279C2.8237 4.75331 4.6067 3.00294 6.7977 3.00098L8.4267 3H8.4277ZM15.6006 3.00029H17.1936C19.3906 3.00029 21.1766 4.75165 21.1766 6.90603V8.7623C21.1766 9.17415 20.8366 9.50952 20.4156 9.50952C19.9956 9.50952 19.6546 9.17415 19.6546 8.7623V6.90603C19.6546 5.57535 18.5506 4.49277 17.1936 4.49277H15.6006C15.1806 4.49277 14.8396 4.15936 14.8396 3.74751C14.8396 3.33468 15.1806 3.00029 15.6006 3.00029ZM14.7625 6.74266H9.2385C7.9745 6.75541 6.9585 7.76837 6.9695 9.00883V10.2542C6.9725 10.3993 7.0915 10.518 7.2395 10.5229H16.7595C16.9085 10.5189 17.0275 10.4003 17.0325 10.2542V9.00883C17.0335 8.40968 16.7975 7.83407 16.3715 7.40554C15.9485 6.98094 15.3675 6.74266 14.7625 6.74266ZM1.762 12.0412H22.239C22.659 12.0412 23 12.3756 23 12.7885C23 13.2003 22.659 13.5337 22.239 13.5337H21.177V17.0933C21.177 19.2486 19.39 21 17.194 21H15.601C15.18 21 14.839 20.6656 14.839 20.2528C14.839 19.8409 15.18 19.5065 15.601 19.5065H17.194C18.551 19.5065 19.655 18.4249 19.655 17.0933V13.5337H17.032V14.5251C17.042 15.7656 16.027 16.7795 14.762 16.7913H9.238C7.974 16.7795 6.959 15.7656 6.969 14.5251V13.5337H4.346V17.0972C4.346 18.424 5.447 19.5036 6.8 19.5056L8.428 19.5065C8.848 19.5065 9.189 19.8409 9.189 20.2528C9.188 20.6656 8.848 21 8.427 21L6.798 20.999C4.607 20.9971 2.823 19.2467 2.823 17.0972V13.5337H1.762C1.342 13.5337 1 13.2003 1 12.7885C1 12.3756 1.342 12.0412 1.762 12.0412Z"
              fill="white"
            />
          </svg>
        </button>
        <button onClick={() => navigate("/collectormappage")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2505 8.5C11.2855 8.5 10.5005 9.285 10.5005 10.251C10.5005 11.216 11.2855 12 12.2505 12C13.2155 12 14.0005 11.216 14.0005 10.251C14.0005 9.285 13.2155 8.5 12.2505 8.5ZM12.2505 13.5C10.4585 13.5 9.00049 12.043 9.00049 10.251C9.00049 8.458 10.4585 7 12.2505 7C14.0425 7 15.5005 8.458 15.5005 10.251C15.5005 12.043 14.0425 13.5 12.2505 13.5Z"
              fill="black"
            />
            <g opacity="0.2">
              <mask
                id="mask0_1_2338"
                maskUnits="userSpaceOnUse"
                x="4"
                y="2"
                width="17"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 2H20.4995V21.5H4V2Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_2338)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2495 3.5C8.52751 3.5 5.49951 6.557 5.49951 10.313C5.49951 15.092 11.1235 19.748 12.2495 19.996C13.3755 19.747 18.9995 15.091 18.9995 10.313C18.9995 6.557 15.9715 3.5 12.2495 3.5ZM12.2495 21.5C10.4555 21.5 3.99951 15.948 3.99951 10.313C3.99951 5.729 7.70051 2 12.2495 2C16.7985 2 20.4995 5.729 20.4995 10.313C20.4995 15.948 14.0435 21.5 12.2495 21.5Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>


    </div>
  );
}
