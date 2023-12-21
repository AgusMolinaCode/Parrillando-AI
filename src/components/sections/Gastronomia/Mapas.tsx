"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const Mapas = () => {
  
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWd1c3Rpbm1vbGluYSIsImEiOiJjbG04NnZtZm0wNzF6M2xtOHNocXVpYnA1In0.HdYeHf_WAbKEAir1Tb4aeA" ||
      "";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-58.3982376, -34.5973132],
      zoom: 16,
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([-58.3982376, -34.5973132])
      .addTo(map);

    const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<strong>Sonsiras Sanas</strong><p>Marcelo Torcuato de Alvear 2142, C1122 CABA</p>"
    );

    marker1.setPopup(popup1);
    marker1.togglePopup();
    window.scrollTo(0, 0);
    onclick = () => {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=Sonsiras Sanas&destination_place_id=ChIJtW9Jn7rKvJUR4Q0iJy8B0Kc",
        "_blank"
      );
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        aria-hidden="true"
        className="px-2 h-[600px] w-[800px] border border-black rounded-3xl cursor-pointer"
      />
    </div>
  );
};

export default Mapas;
