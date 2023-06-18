import { NavItem } from "~/components/NavItem";

export default function ShopFinder() {
    return(
    <>
        <video className="object-cover object-center relative h-[15vh] w-full left-0 right-0 top-[-75%] -z-10" loop={true} autoPlay={true} muted={true} disablePictureInPicture controls={false} src="/videos/product.mp4"></video>
        <div className=" mx-auto w-[80%] relative h-[8vh] mt-[-4vh] bg-gray-100 rounded-3xl shadow-xl flex flex-auto overflow-hidden items-center justify-center">
        <NavItem path="/Products" text="Products"></NavItem>|
        <NavItem path="/" text="Home"></NavItem>|
        <NavItem path="/ShopFinder" text="Shop Finder"></NavItem>
        </div>
        <div className="flex col-span-2 flex-row h-full mt-6">
            <div className="border-1 rounded-2xl shadow-inner overflow-hidden m-2 mx-6 ">
                <div className="w-full rounded-lg flex flex-col mt-2 shadow-inherit">
                    <input type="text" placeholder="Type your location here" className="rounded-lg mx-auto mt-2 w-[75%] bg-neutral-100 shadow-md focus:shadow-xl transition-all focus:ring-0 border-0 focus:outline-0 "></input>
                    <iframe className="mx-auto mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5047085637!2d145.1502986763862!3d-37.918638071949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6153bea786775%3A0xd036feff2a699362!2sPeters%20Ice%20Cream.!5e0!3m2!1sen!2sau!4v1687067306021!5m2!1sen!2sau" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>

            <div className="rounded-xl shadow-md overflow-hidden m-2 mx-6 flex flex-grow bg-neutral-100">
                <div className="font-extrathin text-4xl font-lobster mx-auto mt-2">
                    Connoisseur Near You:
                </div>
            </div>
            

        </div>

    </>
    )
}