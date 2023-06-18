import Link from "next/link";


export function NavItem({text, path}: {text:string, path: string}) {
    return(
      <div className="flex items-center justify-center w-full text-2xl flex-grow">
      <Link href={path}>
        <div className={"transition-all px-4 py-1 rounded-full hover:bg-gray-100 hover:shadow-md"}>
          <p className="under">{text}</p>
        </div>
      </Link>
      </div>
    )
  }