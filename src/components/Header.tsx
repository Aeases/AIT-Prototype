import { NavItem } from "./NavItem";

export default function Header() {
    return(
    <>
        <video className="object-cover object-center relative h-[15vh] w-full left-0 right-0 top-[-75%] -z-10" loop={true} autoPlay={true} muted={true} disablePictureInPicture controls={false} src="/videos/product.mp4"></video>
        <div className=" mx-auto w-[80%] relative h-[8vh] mt-[-4vh] bg-gray-100 rounded-3xl shadow-xl flex flex-auto overflow-hidden items-center justify-center">
        <NavItem path="/Products" text="Products"></NavItem>|
        <NavItem path="/" text="Home"></NavItem>|
        <NavItem path="/ShopFinder" text="Shop Finder"></NavItem>
        </div>
    </>

    )
}