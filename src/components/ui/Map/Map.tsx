"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [41.2995, 69.2401]; // Toshkent koordinatalari

const MapComponent = () => {
    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%", marginTop: "30px" }}
        >
            {/* OpenStreetMap dan bepul xarita */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marker qo‘shish */}
            <Marker position={position}>
                <Popup>Biz shu yerda joylashganmiz! 📍</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
