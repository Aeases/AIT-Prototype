import Image from "next/image"

export function ProductDisplayComponent({source, displayText, offset}: {source: string, displayText: string, offset?: number}) {
    if (!offset) {offset = 0}
    const ImageClassName = `w-full brightness-90 transition-all duration-500 group-hover:brightness-95 mt-[-${offset}px] group-hover:scale-110`
    return(
      <div className="flex flex-col p-1 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group">
        <div className="max-w-sm overflow-hidden rounded-xl ">
          <Image src={source} alt={displayText} width="500" height="500"  className={ImageClassName}></Image>
        </div>
        <div className="mx-auto text-2xl mt-1 font-sans min-w-min overflow-auto">
          {displayText}
        </div>
      </div>
    )
  }