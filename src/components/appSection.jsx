
import ColumnSection from "./columnSection.jsx";
import MoreInfoSection from "./moreInfoSection.jsx";

// house emblems
import arryn from "@/assets/arryn.png";
import greyjoy from "@/assets/greyjoy.png";
import lannister from "@/assets/lannister.png";
import martell from "@/assets/martell.png";
import stark from "@/assets/stark.png";
import targaryen from "@/assets/targaryen.png";
import tully from "@/assets/tully.png";
import tyrell from "@/assets/tyrell.png";
import free_folk from "@/assets/free_folk.png";

//lannister members
import cersei from "@/assets/cersei.png";
import jaime from "@/assets/jaime.png";
import tywin from "@/assets/tywin.png";
import tyrion from "@/assets/tyrion.png";

//stark members
import eddard from "@/assets/eddard.png";
import catelyn from "@/assets/catelyn.png";
import robb from "@/assets/robb.png";
import arya from "@/assets/arya.png";
import sansa from "@/assets/sansa.png";
import brandon from "@/assets/brandon.png";
import talisa from "@/assets/talisa.png";
// import rickon from "@/assets/rickon.png";

//targaryen members
import aegonVI from "@/assets/aegon_vi.png";
import daenerys from "@/assets/daenerys.png";
import viserys from "@/assets/viserys.png";
import rhaenyra from "@/assets/rhaenyra.png";
import daemon from "@/assets/daemon.png";

//tyrell members
import mace from "@/assets/mace.png";
import margaery from "@/assets/margaery.png";
import loras from "@/assets/loras.png";
import olenna from "@/assets/olenna.png";

//arryn members
import lysa from "@/assets/lysa.png";
import robert from "@/assets/robert.png";


import { useEffect, useState } from "react";

const HOUSES = [
  {
    name: "House Targaryen",
    image: targaryen,
    members: [
      {
        name: "Daenerys Targaryen",
        image: daenerys,
        description: "Mother of Dragons",
      },
      {
        name: "Aegon VI Targaryen",
        image: aegonVI,
        description: "The True King",
      },
      {
        name: "Viserys Targaryen",
        image: viserys,
        description: "The Beggar King",
      },
      {
        name: "Rhaenyra Targaryen",
        image: rhaenyra,
        description: "The princess of dragonstone",
      },
      {
        name: "Daemon  Targaryen",
        image: daemon,
        description: "The prince of the city",
      },
    ],
  },
  {
    name: "House Stark",
    image: stark,
    members: [
      {
        name: "Arya Stark",
        image: arya,
        description: "No one",
      },
      {
        name: "Brandon Stark",
        image: brandon,
        description: "Lord of Winterfell",
      },
      {
        name: "Eddard Stark",
        image: eddard,
        description: "Lord of Winterfell",
      },
      {
        name: "Catelyn Stark",
        image: catelyn,
        description: "Lady of Winterfell",
      },
      {
        name: "Robb Stark",
        image: robb,
        description: "King in the North",
      },
      {
        name: "sansa Stark",
        image: sansa,
        description: "Lady of Winterfell",
      },
      {
        name: "Talisa Stark",
        image: talisa,
        description: "Queen Consort",
      },
    ],
  },
  {
    name: "House Lannister",
    image: lannister,
    members: [
      {
        name: "Cersei Lannister",
        image: cersei,
        description: "Lady of Casterly Rock",
      },
      {
        name: "Jaime Lannister",
        image: jaime,
        description: "Lord Commander of the Kingsguard",
      },
      {
        name: "Tyrion Lannister",
        image: tyrion,
        description: "Hand of the Queen",
      },
      {
        name: "Tywin Lannister",
        image: tywin,
        description: "Lord paramount of the Westerlands",
      },
    ],
  },
  {
    name: "House Tyrell",
    image: tyrell,
    members: [
      {
        name: "Margaery Tyrell",
        image: margaery,
        description: "The young queen",
      },
      {
        name: "Mace Tyrell",
        image: mace,
        description: "Lord of Highgarden",
      },
      {
        name: "Olenna Tyrell",
        image: olenna,
        description: "Queen of Thorns",
      },
      {
        name: "Loras Tyrell",
        image: loras,
        description: "Knight of Flowers",
      },
    ],
  },
  {
    name: "House Arryn",
    image: arryn,
    members: [
      {
        name: "Lysa Arryn",
        image: lysa,
        description: "Lady of the Eyrie",
      },
      {
        name: "Robert Arryn",
        image: robert,
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
  {
    name: "Free Folk",
    image: free_folk,
    members: [
      {
        name: "Tormund Giantsbane",
        image: "Tormund-Giantsbane.jpg",
        description: "Free Folk Warrior",
      },
      {
        name: "Ygritte",
        image: "Ygritte.jpg",
        description: "Spear Wife",
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

    setSelectedMember(null)
  }, [selectedHouse])

  return (
    <section className="flex flex-row gap-24 h-full animate-fade-in" style={{ animationDelay: "1s" }}>
      <ColumnSection 
        title="Families" 
        list={HOUSES} 
        selectedItem={selectedHouse} 
        setSelectedItem={setSelectedHouse} />
      <ColumnSection 
        customClass={`${!selectedHouse ? "animate-fade-out" : "animate-fade-in"}`}
        title="Members" 
        list={HOUSES.find(house => house.name === selectedHouse)?.members || prevMembers || []} 
        selectedItem={selectedMember} 
        setSelectedItem={setSelectedMember}
        />
      <MoreInfoSection 
        selectedHouse={selectedHouse}
        selectedMember={selectedMember}
      />
    </section>
  )
}