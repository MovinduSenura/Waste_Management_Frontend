import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's styles are applied
import Logo from "../images/adminLogo.png";
import Icon1 from "../images/icon1.svg";

export default function dashboard() {
  return (
    <div className="div1">
      <div className="div2">
        <div className="logoDiv">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="buttonContainer">
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="button">
            <img src={Icon1} alt="Icon1" className="icon" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="logoutbtndiv">
          <img src={Icon1} alt="Icon1" className="icon" />
          <p>Logout</p>
        </div>
      </div>
      <div className="div3">
        <div className="topcards">
          <div className="detailcardBtns">
            <button className="detailBtn">Schedule new route</button>
            <button className="detailBtn">View all schedules</button>
            <button className="detailBtn">View all schedules</button>
            <button className="detailBtn">View all schedules</button>
          </div>
          <div className="chartdiv">
            <p>Chart Text here</p>
            <div class="pie-chart"></div>
          </div>
        </div>
        <div className="mapContainer">
          <p className="mb-0">Garbage Level Monitoring</p>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
