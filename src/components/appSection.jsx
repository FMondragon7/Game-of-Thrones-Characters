
import ColumnSection from "./columnSection.jsx";

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

export default function AppSection () {
  const [selectedHouse, setSelectedHouse] = useState(null);
  
  return (
    <section className="flex flex-row gap-6 h-full animate-fade-in">
      <ColumnSection title="Families" list={HOUSES} selectedItem={selectedHouse} setSelectedItem={setSelectedHouse} />
    </section>
  )
}