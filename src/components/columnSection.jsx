export default function ColumnSection(props) {

  const handleSelect = (e) => {
    if(props.selectedItem === e.currentTarget.id) {
      props.setSelectedItem(null)
      return
    }
    props.setSelectedItem(e.currentTarget.id)
  }

  return (
    <section className={`min-w-[350px] h-full flex flex-col gap-6 ${props.customClass}`}>
      <span className="text-semibold text-grey tracking-[4px]">{props.title}</span>
        <div
          className="bg-primary p-8 flex flex-col gap-4 max-h-full overflow-y-auto"
        >
          {
            props.list.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`w-full h-20 bg-secondary px-6 py-4 flex flex-row text-center items-center gap-4 cursor-pointer
                  ${props.selectedItem === item.name ? "bg-selected" : ""}
                  border border-none border-amber-950 hover:border-solid hover:scale-110 hover:transition-all duration-500 ease-in-out`}
                  id={item.name}
                  onClick={(e) => handleSelect(e)}
                >
                  <img className="w-12 h-12 pointer-events-none object-fill rounded-full" src={item.image.src} alt="item image" 
                  />
                    {/* style={{ filter: `${props.selectedItem === item.name || item.description ? "brightness(1) invert(0)" : "brightness(0) invert(1)"}` }} /> */}
                    <div className={item.description ? "flex flex-col gap-2  items-start" : ""}>
                      <span className={`pointer-events-none ${props.selectedItem === item.name ? "text-secondary" : "text-white"}`}>
                        {item.name}
                      </span>
                      {item.description && 
                        <span className="text-xs text-semibold font-light text-description pointer-events-none ">
                          {item.description}
                        </span>
                      }
                    </div>
                </div>
              );
            })
          }
        </div>
    </section>
  )
}