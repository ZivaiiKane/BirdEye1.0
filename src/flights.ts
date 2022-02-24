import { fromFetch } from "rxjs/fetch";

interface Flight {
  icao24: string;
  callsign: string;
  origin_country: string;
  time_position: number;
  last_contact: number;
  longitude: number;
  latitude: number;
  on_ground: boolean;
  true_track: number;
}

let flightsArray: Flight[] = [];

let createObject = (data: any[]): Flight => {
  const flight: Flight = {
    icao24: data[0],
    callsign: data[1],
    origin_country: data[2],
    time_position: data[3],
    last_contact: data[4],
    longitude: data[5],
    latitude: data[6],
    on_ground: data[8],
    true_track: data[10],
  };

  return flight;
};

const data$ = fromFetch("https://opensky-network.org/api/states/all", {
  selector: (response) => response.json(),
});

data$.subscribe((result) => {
  if (!result || !result.states) {
    flightsArray = [];
    return;
  }

  flightsArray = result.states
    .slice(0, 100)
    .map((data: (number | string | boolean)[]) => createObject(data));

  console.log(flightsArray);

  localStorage.setItem("flights", JSON.stringify(flightsArray));
});

export { flightsArray, Flight };
