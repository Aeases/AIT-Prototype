import classNames from "classnames";
import { Spinner } from "flowbite-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import { NavItem } from "~/components/NavItem";
import NearYouCard from "~/components/NearYouCard";

export default function ShopFinder() {
    const [Loading_Iframe, setLoading] = useState(true)

    


    return(
    <>
        <Head>
        <title>Connoisseur</title>
        <meta name="description" content="Any Icecream, Any Occasion" />
        <link rel="icon" href="/pictures/conno-favicon.png" />
      </Head>
        <Header />
        <div className="flex col-span-2 flex-row h-full mt-6">
            <div className="border-1 rounded-2xl shadow-inner overflow-hidden m-2 ml-auto ">
                <div className="w-full rounded-lg flex flex-col mt-2 shadow-inherit">
                    <input type="text" placeholder="Type your location here" className="rounded-lg mx-auto mt-1 w-[75%] bg-neutral-100 shadow-md focus:shadow-xl transition-all focus:ring-0 border-0 focus:outline-0 "></input>
                    <div className="relative">
                    {Loading_Iframe && (<Spinner color="warning" id="Spinner" className="absolute top-1/4 left-1/4 h-[50%] w-[50%] "/>)}
                    <iframe onLoad={() => setLoading(false)} id="iframe" className="mx-auto mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5047085637!2d145.1502986763862!3d-37.918638071949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6153bea786775%3A0xd036feff2a699362!2sPeters%20Ice%20Cream.!5e0!3m2!1sen!2sau!4v1687067306021!5m2!1sen!2sau" width="600" height="450" loading="lazy" ></iframe>
                    </div>
                </div>
            </div>

 
            <NearYouCard />

            
            

        </div>
        <Footer />
    </>
    )
}