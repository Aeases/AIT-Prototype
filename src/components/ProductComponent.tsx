import Image from "next/image"
import Link from "next/link"

export function ProductComponent({source, displayText, description_text, path}: {source: string, displayText: string, description_text: string, path: string}) {
    if (!path) {path = "/404"}
    return(
        <div className="">
        <Link href={`${path}`}>
        <div className="flex flex-col p-1 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group">
        <div className="overflow-visible ">
          <Image src={source} alt={displayText} width="300" height="500"  className="mx-auto h-56 object-cover rounded-xl brightness-90 transition-all duration-500 group-hover:brightness-95 overflow-clip group-hover:scale-105"></Image>
        </div>
        <div className="mr-auto mt-1 ml-2 w-full">
          <p className="text-2xl font-sans font-bold text-center">{displayText}</p>
          <div className="w-full h-[0.01rem] bg-gray-300 my-2 "></div>
          <p className="font-mono mt-2 w-3/4 mx-auto">{description_text}</p>
        </div>
      </div>
        </Link>
        </div>
    )
}