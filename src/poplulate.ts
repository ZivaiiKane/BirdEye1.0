import { mapDom } from "./map";
import L from "leaflet";
import "leaflet-rotatedmarker";

const flightArray = JSON.parse(localStorage.getItem("flights"));

export let planeIcon = L.icon({
  iconUrl: "./src/plane.png",
  iconSize: [30, 30],
  iconAnchor: [22, 94],
});

flightArray.forEach((flight) => {
  if (flight.latitude && flight.longitude)
    L.marker([flight.longitude, flight.latitude], {
      icon: planeIcon,
      rotationAngle: flight.true_track,
    }).addTo(mapDom);
});
