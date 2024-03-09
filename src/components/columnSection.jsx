export default function ColumnSection(props) {
  return (
    <section className="min-w-[350px] flex flex-col gap-6">
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
                  ${props.selectedItem === item.name ? "bg-white" : ""}
                  hover:border hover:border-solid hover:border-amber-950 hover: transition-all duration-50 ease-in-out`}
                  id={item.name}
                  onClick={(e) => {
                    if(props.selectedItem === e.currentTarget.id) {
                      props.setSelectedItem(null)
                      return
                    }
                    props.setSelectedItem(e.currentTarget.id)
                  }}
                >
                  <img className="w-12 h-12 pointer-events-none" src={item.image.src} alt="item image" 
                    style={{ filter: `${props.selectedItem === item.name ? "brightness(1) invert(0)" : "brightness(0) invert(1)"}` }} />
                    <div>
                      <span className={`pointer-events-none ${props.selectedItem === item.name ? "text-secondary" : "text-white"}`}>{item.name}</span>
                      {item.description && <span className={`pointer-events-none ${props.selectedItem === item.name ? "text-secondary" : "text-white"}`}>{item.description}</span>}
                    </div>
                </div>
              );
            })
          }
        </div>
    </section>
  )
}