import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's styles are applied
import Logo from "../../images/adminLogo.png";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
import Icon4 from "../../images/icon4.svg";
import Icon5 from "../../images/icon5.svg";
import Icon6 from "../../images/icon6.svg";
import Icon7 from "../../images/icon7.svg";
import Icon8 from "../../images/icon8.svg";
import Icon9 from "../../images/icon9.svg";
import Icon10 from "../../images/icon10.svg";
import Logout from "../../images/logout.svg";

export default function dashboard() {
  
  const navigate = useNavigate();
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
            <img src={Icon2} alt="Icon2" className="icon" />
            <p>Waste Management</p>
          </div>
          <div className="button">
            <img src={Icon3} alt="Icon3" className="icon" />
            <p>Waste Collection</p>
          </div>
          <div className="button">
            <img src={Icon4} alt="Icon4" className="icon" />
            <p>Scheduling</p>
          </div>
          <div className="button">
            <img src={Icon5} alt="Icon5" className="icon" />
            <p>Quick Schedules</p>
          </div>
          <div className="button">
            <img src={Icon6} alt="Icon6" className="icon" />
            <p>Vehicles</p>
          </div>
          <div className="button">
            <img src={Icon7} alt="Icon7" className="icon" />
            <p>Analysis</p>
          </div>
          <div className="button">
            <img src={Icon8} alt="Icon8" className="icon" />
            <p>User Management</p>
          </div>
          <div className="button">
            <img src={Icon9} alt="Icon9" className="icon" />
            <p>Settings</p>
          </div>
          <div className="button">
            <img src={Icon10} alt="Icon10" className="icon" />
            <p>Tools</p>
          </div>
        </div>
        <div className="logoutbtndiv">
          <img src={Logout} alt="Icon1" className="icon" />
          <p>Logout</p>
        </div>
      </div>
      <div className="div3">
        <div className="topcards">
          <div className="detailcardBtns">
            <button className="detailBtn" onClick={() => {navigate('/collectoraddpage')}}>Collectin Routes</button>
            <button className="detailBtn" onClick={() => {navigate('/scheduleaddpage')}}>Collectin Schedule</button>
            <button className="detailBtn" onClick={() => {navigate('/collections')}}>View Waste Collection</button>
            <button className="detailBtn" onClick={() => {navigate('/feedbacks')}}>View Feedbacks</button>
          </div>
          <div className="chartdiv">
            <p>Garbage Bins</p>
            <div class="pie-chart"></div>
          </div>
        </div>
        <div className="mapContainer">
          <p className="mb-0">Garbage Level Monitoring</p>
          <MapContainer
            center={[6.9147, 79.9725]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[6.9147, 79.9725]}>
            <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
