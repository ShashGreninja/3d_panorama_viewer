"use client";
import { useEffect } from "react";

interface StreetViewProps {
  lat: number;
  lng: number;
}

export default function StreetView({ lat, lng }: StreetViewProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && document.getElementById("street-view")) {
        new window.google.maps.StreetViewPanorama(
          document.getElementById("street-view") as HTMLElement,
          {
            position: { lat, lng },
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
          }
        );
        clearInterval(interval);
      }
    }, 500); // check every 0.5s until script is ready

    return () => clearInterval(interval);
  }, [lat, lng]);

  return <div id="street-view" style={{ width: "100%", height: "500px" }} />;
}
