import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Dodaj znaczniki z lokalizacjami paczkomatów
    // Możesz użyć funkcji L.marker() do dodania znaczników na mapie

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container"></div>;
};

export default Map;
