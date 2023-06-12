import Image from "next/image"

export function ProductComponent({source, displayText, description_text}: {source: string, displayText: string, description_text: string}) {
    const ImageClassName = `w-full brightness-90 transition-all duration-500 group-hover:brightness-95 group-hover:scale-110`
    return(
        <div className="">
        <div className="flex flex-col p-1 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group">
        <div className="max-w-sm overflow-hidden rounded-xl ">
          <Image src={source} alt={displayText} width="300" height="500"  className={ImageClassName}></Image>
        </div>
        <div className="mr-auto mt-1 ml-2 w-full">
          <p className="text-2xl font-sans">{displayText}</p>
          <div className="w-full h-[0.01rem] bg-gray-300 my-2 "></div>
          <p className="font-mono mt-2">{description_text}</p>
        </div>
      </div>
        </div>
    )
}