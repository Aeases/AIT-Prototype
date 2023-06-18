import { useState } from "react";
import { NavItem } from "./NavItem";
import { Spinner } from "flowbite-react";

export default function Header() {
    const [Loading_Video, setLoading] = useState(false)

    return(
    <>
        {Loading_Video && (<Spinner color="failure" id="Spinner" className="absolute top-[0.5%] overflow-hidden left-[45%] h-[10%] w-[10%] "/>)}
        <video onLoadStart={() => setLoading(true)} onCanPlay={() => setLoading(false)} className="object-cover object-center relative h-[15vh] w-full left-0 right-0 top-[-75%] -z-10" loop={true}  autoPlay={true} muted={true} disablePictureInPicture controls={false} src="/videos/product.mp4"></video>
        <div className=" mx-auto w-[80%] relative h-[8vh] mt-[-4vh] bg-gray-100 rounded-3xl shadow-xl flex flex-auto overflow-hidden items-center justify-center">
        <NavItem path="/Products" text="Products"></NavItem>|
        <NavItem path="/" text="Home"></NavItem>|
        <NavItem path="/ShopFinder" text="Shop Finder"></NavItem>
        </div>
    </>

    )
}