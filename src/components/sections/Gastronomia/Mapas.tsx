import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

import { FC } from "react";

interface MapasProps {
  coordinates: [number, number];
  title: string;
  zipCode: number;
  direction: string;
  city: string;
}

const Mapas: FC<MapasProps> = ({
  coordinates,
  title,
  zipCode,
  direction,
  city,
}) => {
  console.log(title, coordinates, zipCode, direction, city);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWd1c3Rpbm1vbGluYSIsImEiOiJjbG04NnZtZm0wNzF6M2xtOHNocXVpYnA1In0.HdYeHf_WAbKEAir1Tb4aeA" ||
      "";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates || [-58.3982376, -34.5973132],
      zoom: 13,
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates || [-58.3982376, -34.5973132])
      .addTo(map);

    const popup1 = new mapboxgl.Popup({ offset: 25 });
    const popupContent = document.createElement("div");
    popupContent.innerHTML = `<strong>${title}</strong><p>${direction}, CP${zipCode} ${city}</p><p style="color: blue; text-decoration: underline;">Ver Ruta</p>`;
    popupContent.onclick = () => {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${coordinates?.[1]},${coordinates?.[0]}`,
        "_blank"
      );
    };
    popup1.setDOMContent(popupContent);

    marker1.setPopup(popup1);
    marker1.togglePopup();
    window.scrollTo(0, 0);
  }, [coordinates, title, direction, zipCode, city]);

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
