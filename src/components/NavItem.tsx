

export function NavItem({text}: {text:string}) {
    return(
      <div className="flex items-center justify-center w-full text-2xl flex-grow">
        <div className={"transition-all px-4 py-1 rounded-full hover:bg-gray-100 hover:shadow-md"}>
          <p className="under">{text}</p>
        </div>
  
      </div>
    )
  }