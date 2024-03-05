import arryn from "@/assets/arryn.svg";
import greyjoy from "@/assets/greyjoy.svg";
import lannister from "@/assets/lannister.svg";
import martell from "@/assets/martell.svg";
import stark from "@/assets/stark.svg";
import targaryen from "@/assets/targaryen.svg";
import tully from "@/assets/tully.svg";
import tyrell from "@/assets/tyrell.svg";

import { useState } from "react";

const HOUSES = [
  {
    name: "House Targaryen",
    image: targaryen,
  },
  {
    name: "House Stark",
    image: stark,
  },
  {
    name: "House Lannister",
    image: lannister,
  },
  {
    name: "House Tyrell",
    image: tyrell,
  },
  {
    name: "House Arryn",
    image: arryn,
  },
  {
    name: "House Greyjoy",
    image: greyjoy,
  },
  {
    name: "House Martell",
    image: martell,
  },
  {
    name: "House Tully",
    image: tully,
  },
];

export default function Families () {
  const [selectedHouse, setSelectedHouse] = useState(null);
  
  return (
    <section className="flex flex-col gap-6 h-full">
      <span className="text-semibold text-grey tracking-[4px]">Families</span>
      <div
        className="bg-primary min-w-[350px] w-[25%] p-8 flex flex-col gap-4 max-h-full overflow-y-auto"
      >
        {
          HOUSES.map((house) => {
            return (
              <div
                key={house.name}
                className={`w-full h-20 bg-secondary px-6 py-4 flex flex-row text-center items-center gap-4 cursor-pointer
                ${selectedHouse === house.name ? "bg-white" : ""}
                hover:border hover:border-solid hover:border-amber-950 hover:scale-105 transition-all duration-50 ease-in-out`}
                id={house.name}
                onClick={(e) => {
                  if(selectedHouse === e.currentTarget.id) {
                    setSelectedHouse(null)
                    return
                  }
                  setSelectedHouse(e.currentTarget.id)
                }}
              >
                <img className="w-12 h-12 pointer-events-none" src={house.image.src} alt="house emblem" 
                  style={{ filter: `${selectedHouse === house.name ? "brightness(1) invert(0)" : "brightness(0) invert(1)"}` }} />
                <span className={`pointer-events-none ${selectedHouse === house.name ? "text-secondary" : "text-white"}`}>{house.name}</span>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}