"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = useMemo(
    () => ({ lat: -37.638958576127926, lng: 144.93283149703416 }),
    []
  );
  if (!isLoaded) return <div>Loading....</div>;

  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100%", height: "400px", margin: "auto" }}
    >
      <MarkerF position={center} title="In One Imaging" />
    </GoogleMap>
  );
};

export default Map;
