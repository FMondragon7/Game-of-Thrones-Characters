
import Families from "./families.jsx";

import { useState } from "react";

export default function AppSection () {
  const [selectedHouse, setSelectedHouse] = useState(null);
  
  return (
    <section className="flex flex-row gap-6 h-full animate-fade-in">
      <Families selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse} />
    </section>
  )
}