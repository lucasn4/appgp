import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import customIcon from './CustomIcon'; // Importa el icono personalizado

const ZoomButtons = () => {
  const map = useMap();

  const zoomIn = () => {
    map.zoomIn();
  };

  const zoomOut = () => {
    map.zoomOut();
  };

  return (
    <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
      <button onClick={zoomIn} style={{ padding: "10px", margin: "5px", cursor: "pointer" }}>+</button>
      <button onClick={zoomOut} style={{ padding: "10px", margin: "5px", cursor: "pointer" }}>-</button>
    </div>
  );
};

const MapComponent = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={[-26.800203054012485, -65.2952676032862]} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-26.800203054012485, -65.2952676032862]}icon={customIcon}>
        <Popup maxWidth={1000} minWidth={750}>
          <div style={{ textAlign: "center" , backgroundColor:"#003366", color:"#ffcc00"}}>
            <h2 style={{ fontSize: "80px" }}>Sucursal Yerba Buena<br /></h2>  
            <p style={{ fontSize: "40px" }}>Dirección: Av. Peron 1900</p>
            <img src='../public/sucursal yerba buena gp.png' alt="Sucursal Yerba Buena" style={{ width: "100%" }} />
            </div>
          </Popup>
        </Marker>
        <Marker position={[-26.84348495592563, -65.19597891807754]}icon={customIcon}>
          <Popup>
            A pretty CSS popup.<br />Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[-26.758624051225258, -65.24379700785597]}icon={customIcon}>
        <Popup maxWidth={1000} minWidth={750}>
          <div style={{ textAlign: "center" , backgroundColor:"#003366", color:"#ffcc00"}}>
            <h2 style={{ fontSize: "80px" }}>Sucursal Tafi Viejo<br /></h2>  
            <p style={{ fontSize: "40px" }}>Dirección: Av. Peron 1900</p>
            <img src='../public/sucursal yerba buena gp.png' alt="Sucursal Yerba Buena" style={{ width: "100%" }} />
            </div>
          </Popup>
        </Marker>
        <Marker position={[-26.845421335177825, -65.21152224465153]}icon={customIcon}>
          <Popup maxWidth={400} minWidth={300}>
            A pretty CSS popup.<br />Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[-27.369963265834112, -65.59136336934453]}icon={customIcon}>
          <Popup maxWidth={400} minWidth={300}>
            A pretty CSS popup.<br />Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

