
import ColumnSection from "./columnSection.jsx";

import arryn from "@/assets/arryn.svg";
import greyjoy from "@/assets/greyjoy.svg";
import lannister from "@/assets/lannister.svg";
import martell from "@/assets/martell.svg";
import stark from "@/assets/stark.svg";
import targaryen from "@/assets/targaryen.svg";
import tully from "@/assets/tully.svg";
import tyrell from "@/assets/tyrell.svg";

import { useEffect, useState } from "react";

const HOUSES = [
  {
    name: "House Targaryen",
    image: targaryen,
    members: [
      {
        name: "Daenerys Targaryen",
        image: "daenerys-targaryen.jpg",
        description: "Mother of Dragons",
      },
      {
        name: "Viserys Targaryen",
        image: "viserys-targaryen.jpg",
        description: "The Beggar King",
      },
      {
        name: "Aegon Targaryen",
        image: "aegon-targaryen.jpg",
        description: "The Conqueror",
      },
    ],
  },
  {
    name: "House Stark",
    image: stark,
    members: [
      {
        name: "Eddard Stark",
        image: "eddard-stark.jpg",
        description: "Lord of Winterfell",
      },
      {
        name: "Catelyn Stark",
        image: "catelyn-stark.jpg",
        description: "Lady of Winterfell",
      },
      {
        name: "Robb Stark",
        image: "robb-stark.jpg",
        description: "King in the North",
      },
    ],
  },
  {
    name: "House Lannister",
    image: lannister,
    members: [
      {
        name: "Tywin Lannister",
        image: "tywin-lannister.jpg",
        description: "Lord of Casterly Rock",
      },
      {
        name: "Jaime Lannister",
        image: "jaime-lannister.jpg",
        description: "Kingslayer",
      },
      {
        name: "Cersei Lannister",
        image: "cersei-lannister.jpg",
        description: "Queen of the Seven Kingdoms",
      },
    ],
  },
  {
    name: "House Tyrell",
    image: tyrell,
    members: [
      {
        name: "Mace Tyrell",
        image: "mace-tyrell.jpg",
        description: "Lord of Highgarden",
      },
      {
        name: "Olenna Tyrell",
        image: "olenna-tyrell.jpg",
        description: "Queen of Thorns",
      },
      {
        name: "Loras Tyrell",
        image: "loras-tyrell.jpg",
        description: "Knight of Flowers",
      },
    ],
  },
  {
    name: "House Arryn",
    image: arryn,
    members: [
      {
        name: "Jon Arryn",
        image: "jon-arryn.jpg",
        description: "Lord of the Eyrie",
      },
      {
        name: "Lysa Arryn",
        image: "lysa-arryn.jpg",
        description: "Lady of the Eyrie",
      },
      {
        name: "Robert Arryn",
        image: "robert-arryn.jpg",
        description: "Lord of the Eyrie",
      },
    ],
  },
  {
    name: "House Greyjoy",
    image: greyjoy,
    members: [
      {
        name: "Balon Greyjoy",
        image: "balon-greyjoy.jpg",
        description: "Lord Reaper of Pyke",
      },
      {
        name: "Yara Greyjoy",
        image: "yara-greyjoy.jpg",
        description: "Iron Queen",
      },
      {
        name: "Theon Greyjoy",
        image: "theon-greyjoy.jpg",
        description: "Reek",
      },
    ],
  },
  {
    name: "House Martell",
    image: martell,
    members: [
      {
        name: "Doran Martell",
        image: "doran-martell.jpg",
        description: "Prince of Dorne",
      },
      {
        name: "Oberyn Martell",
        image: "oberyn-martell.jpg",
        description: "Red Viper",
      },
      {
        name: "Elia Martell",
        image: "elia-martell.jpg",
        description: "Princess of Dorne",
      },
    ],
  },
  {
    name: "House Tully",
    image: tully,
    members: [
      {
        name: "Hoster Tully",
        image: "hoster-tully.jpg",
        description: "Lord of Riverrun",
      },
      {
        name: "Catelyn Tully",
        image: "catelyn-tully.jpg",
        description: "Lady of Riverrun",
      },
      {
        name: "Edmure Tully",
        image: "edmure-tully.jpg",
        description: "Lord of Riverrun",
      },
    ],
  },
];

export default function AppSection () {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [prevMembers, setPrevMembers] = useState(null)

  useEffect(() => {
    if (selectedHouse) {
      setPrevMembers(HOUSES.find(house => house.name === selectedHouse)?.members || [])
    }
  }, [selectedHouse])
  
  return (
    <section className="flex flex-row gap-24 h-full animate-fade-in">
      <ColumnSection title="Families" list={HOUSES} selectedItem={selectedHouse} setSelectedItem={setSelectedHouse} />
      <ColumnSection 
        customClass={`${!selectedHouse ? "animate-fade-out" : "animate-fade-in"}`}
        title="Members" 
        list={HOUSES.find(house => house.name === selectedHouse)?.members || prevMembers || []} 
        selectedItem={selectedMember} 
        setSelectedItem={setSelectedMember}
      />
    </section>
  )
}