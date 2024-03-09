import symbol from "@/assets/symbol.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useState, useEffect } from "react";


export default function MoreInfoSection(props) {
  const [member, setMember] = useState(null)
  
  useEffect(() => {
    if (props.selectedMember && props.selectedMember !== member) {
      setMember(props.selectedMember)
    }
  }, [props.selectedHouse, props.selectedMember])
  
  return (
    <section className={`w-[30%] bg-primary absolute ${props.selectedMember && props.selectedHouse ? "right-0" : "right-[-50%]"} 
      top-0 bottom-0 border-l border-secondary flex flex-col items-center p-14 gap-14 animate-ease-in-out duration-1000`}>
      <span className="text-m text-semibold text-grey tracking-[4px]">Character Details</span>
      <div className="flex flex-col w-full items-center text-center text-white">
        <img className="h-[260px] w-[200px] border object-cover mb-10" src={member?.image.src} alt="character image" />
        <div className="relative mb-10">
          <img className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src={symbol.src} alt="symbol" />
          <h3 className="text-xl ">{member?.name}</h3>
        </div>
        <span className="text-m text-semibold text-grey tracking-[4px] mb-6">Title</span>
        <h4 className="mb-8">{member?.description}</h4>
        <span className="text-m text-semibold text-grey tracking-[4px]">Quote</span>
        <div className="w-full min-h-36 relative flex items-center justify-center">
          <RiDoubleQuotesL className="absolute top-0 left-0" color="black" size={40}/>
          <span className="w-full text-xl quote">{member?.quote}</span>
        </div>
      </div>
    </section>
  )
}