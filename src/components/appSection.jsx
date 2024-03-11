
import ColumnSection from "@/columnSection.jsx";
import MoreInfoSection from "@/moreInfoSection.jsx";

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
import joffrey from "@/assets/joffrey.png";

//stark members
import eddard from "@/assets/eddard.png";
import catelyn from "@/assets/catelyn.png";
import robb from "@/assets/robb.png";
import arya from "@/assets/arya.png";
import sansa from "@/assets/sansa.png";
import brandon from "@/assets/brandon.png";
import talisa from "@/assets/talisa.png";
import rickon from "@/assets/rickon.png";

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

//greyjoy members
import balon from "@/assets/balon.png";
import yara from "@/assets/yara.png";
import theon from "@/assets/theon.png";

//martell members
import doran from "@/assets/doran.png";
import oberyn from "@/assets/oberyn.png";

//tully members
import hoster from "@/assets/hoster.png";
import edmure from "@/assets/edmure.png";

//free folk members
import tormund from "@/assets/tormund.png";
import ygritte from "@/assets/ygritte.png";



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
        quote: "I will take what is mine with fire and blood."
      },
      {
        name: "Aegon VI Targaryen",
        image: aegonVI,
        description: "The True King",
        quote: "When enough people make false promises, words stop meaning anything. Then there are no more answers, only better and better lies."
      },
      {
        name: "Viserys Targaryen",
        image: viserys,
        description: "The Beggar King",
        quote: "You don't want to wake the dragon, do you?"
      },
      {
        name: "Rhaenyra Targaryen",
        image: rhaenyra,
        description: "The princess of dragonstone",
        quote: "Fire is such strange power. Everything that House Targaryen possesses is owed to it."
      },
      {
        name: "Daemon  Targaryen",
        image: daemon,
        description: "The prince of the city",
        quote: "Dreams didn't make us kings. Dragons did."
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
        quote: "Anyone Can Be Killed"
      },
      {
        name: "Brandon Stark",
        image: brandon,
        description: "Lord of Winterfell",
        quote: "You Wouldn't Be Able To Help Us If I Let Them Murder You First."
      },
      {
        name: "Eddard Stark",
        image: eddard,
        description: "Lord of Winterfell",
        quote: "The man who passes the sentence should swing the sword."
      },
      {
        name: "Catelyn Stark",
        image: catelyn,
        description: "Lady of Winterfell",
        quote: "Show me the path I must walk and do not let me stumble in the dark places that lie ahead."
      },
      {
        name: "Robb Stark",
        image: robb,
        description: "King in the North",
        quote: "I did not choose the war, but I have no choice but to fight it."
      },
      {
        name: "Sansa Stark",
        image: sansa,
        description: "Lady of Winterfell",
        quote: "I am Sansa Stark of Winterfell. This is my home, and you can't frighten me."
      },
      {
        name: "Rickon Stark",
        image: rickon,
        description: "Prince of Winterfell",
        quote: "We're Not Southerners."
      },
      {
        name: "Talisa Stark",
        image: talisa,
        description: "Queen Consort",
        quote: "I always thought I was a brilliant liar"
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
        quote: "No one walks away from me."
      },
      {
        name: "Jaime Lannister",
        image: jaime,
        description: "Lord Commander of the Kingsguard",
        quote: "To be honest, I never really cared much for them. Innocent, or otherwise."
      },
      {
        name: "Tyrion Lannister",
        image: tyrion,
        description: "Hand of the Queen",
        quote: "That’s What I Do, I Drink And I Know Things"
      },
      {
        name: "Tywin Lannister",
        image: tywin,
        description: "Lord paramount of the Westerlands",
        quote: "Lannisters Don't Act Like Fools"
      },
      {
        name: "Joffrey Lannister",
        image: joffrey,
        description: "Prince of the seven kingdoms",
        quote: "I'll Tell You What. I'm Going To Give You A Present. After I Raise My Armies, And Kill Your Traitor Brother, I'll Give You His Head As Well."
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
        quote: "I Want To Be The Queen."
      },
      {
        name: "Mace Tyrell",
        image: mace,
        description: "Lord of Highgarden",
        quote: "There is no greater pleasure than to serve the King's Grace. If I was deemed worthy to join your royal council, you would find none more loyal or true."
      },
      {
        name: "Olenna Tyrell",
        image: olenna,
        description: "Queen of Thorns",
        quote: "Spare Me The Homilies. I Can Smell A Fraud From A Mile Away."
      },
      {
        name: "Loras Tyrell",
        image: loras,
        description: "Knight of Flowers",
        quote: "Most have been forgotten. Most deserve to be forgotten. The heroes will always be remembered. The best. The best and the worst. And a few who were a bit of both."
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
        quote: "A man will tell you poison is dishonorable, but a woman's honor is different. The Mother shaped us to protect our children, and our only dishonor is in failure"
      },
      {
        name: "Robert Arryn",
        image: robert,
        description: "Lord of the Eyrie",
        quotes: "The bad little man. Mother, can I make him fly? I want to see him fly."
      },
    ],
  },
  {
    name: "House Greyjoy",
    image: greyjoy,
    members: [
      {
        name: "Balon Greyjoy",
        image: balon,
        description: "Lord Reaper of Pyke",
        quote: "No man has ever died from bending his knee. He who kneels may rise again, blade in hand. He who will not kneel stays dead, stiff legs and all."
      },
      {
        name: "Yara Greyjoy",
        image: yara,
        description: "Iron Queen",
        quote: "Don't die so far from the sea."
      },
      {
        name: "Theon Greyjoy",
        image: theon,
        description: "Reek",
        quote: "What Is Dead May Never Die."
      },
    ],
  },
  {
    name: "House Martell",
    image: martell,
    members: [
      {
        name: "Doran Martell",
        image: doran,
        description: "Prince of Dorne",
        quotes: "Words are like arrows, Arianne. Once loosed, you cannot call them back."
      },
      {
        name: "Oberyn Martell",
        image: oberyn,
        description: "Red Viper",
        quote: "When It Comes To War, I Fight For Dorne. When It Comes To Love... I Don't Choose Sides."
      },
    ],
  },
  {
    name: "House Tully",
    image: tully,
    members: [
      {
        name: "Hoster Tully",
        image: hoster,
        description: "Lord of Riverrun",
        quote: "Little cat. My little cat. I watched for you ..."
      },
      {
        name: "Edmure Tully",
        image: edmure,
        description: "Lord of Riverrun",
        quote: "How can we talk of peace while the Lannisters spread like a pestilence over my father's domains, stealing his crops and slaughtering his people?"
      },
    ],
  },
  {
    name: "Free Folk",
    image: free_folk,
    members: [
      {
        name: "Tormund Giantsbane",
        image: tormund,
        description: "Free Folk Warrior",
        quote: "From Now On, You'd Better Kneel Every Time I Fart."
      },
      {
        name: "Ygritte",
        image: ygritte,
        description: "Spear Wife",
        quote: "You know nothing Jon Snow."
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
      setPrevMembers(selectedHouse.members)
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
        list={selectedHouse?.members || prevMembers || []} 
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