import "../dist/output.css";
import { map } from "./map";
import { flightsArray } from "./flights";
import { planeIcon } from "./poplulate";

map;
flightsArray;
planeIcon;

const flightArray = JSON.parse(localStorage.getItem("flights"));

console.log(flightArray);

const flightContainer = document.querySelector("#container");

let cardHtml = ``;

if (flightArray) {
  flightArray.forEach((flight) => {
    cardHtml += `
        <div class="flight-card items-center flex flex-wrap pr-4 text-gray-400] my-4">
        <div
        class="flight-img -ml-[18px] self-center flex-grow-0 flex-shrink-0 basis-auto relative"
        >
        <a href="" class="flex items-center">
            <picture
            class="h-8 w-8 border-[3px] border-gray-300 bg-gray-300 rounded-full relative"
            >
            <img
                src="https://picsum.photos/seed/picsum/200/300"
                alt=""
                class="h-full object-cover w-full rounded-full"
            />
            </picture>
        </a>
        </div>
        <div
        class="w-[44px] h-[44px] mr-[5px] ml-[4px] flex justify-center pt-[2px] items-center text-gray-500"
        >
        ${
          flight.on_ground
            ? ' <i class="fa-solid fa-plane-arrival" class="text-green-400"></i>'
            : '<i class="fa-solid fa-plane-departure" class="text-blue-400"></i>'
        }
        </div>
        <div class="flex flex-col">
        <h1
            class="text-lg py-[2px] text-gray-600 text-ellipsis whitespace-normal leading-[1.4em] cursor-pointer"
        >
            Flight ${flight.callsign} from ${flight.origin_country}
        </h1>
        <div
            class="items-center text-gray-400 flex-wrap text-[15px] leading-[20px] mt-[1px]"
        >
            <div
            class="relative ${
              flight.on_ground ? "text-blue-400" : "text-green-400"
            } whitespace-nowrap font-medium"
            >
            <span>${flight.on_ground ? "Landed" : "Flying"}</span>
            </div>
        </div>
        </div>
        </div>`;
  });
}

if (flightContainer) flightContainer.innerHTML = cardHtml;
