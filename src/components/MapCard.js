import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10} />
    </ReactMapGL>
  );
}
