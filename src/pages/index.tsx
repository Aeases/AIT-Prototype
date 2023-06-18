import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import navStyles from "~/styles/navbar.module.css"
import { ProductDisplayComponent } from "~/components/ProductDisplayComponent";
import { NavItem } from "~/components/NavItem";
import { ProductComponent } from "~/components/ProductComponent";
import { Footer } from "~/components/Footer";
/* <div className="w-[80%] relative h-[25vh] mt-[-12.5vh] bg-slate-300"> {/*Take Height Value, divide by 2 to get mt- value*/
//fff
//</div> */
import { Carousel, Spinner } from 'flowbite-react';
import Link from "next/link";
import { useState } from "react";


const Home: NextPage = () => {
  const [Loading_Video, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Connoisseur</title>
        <meta name="description" content="Any Icecream, Any Occasion" />
        <link rel="icon" href="/pictures/conno-favicon.png" />
      </Head>
      <main className="flex w-full flex-col items-center">
      {Loading_Video && 
  <div className="bg-black flex justify-center items-center transition-all opacity-100 ease-in-out duration-1000 h-screen" id="page-loader">
  <div className="absolute top-1/2 left-1/2 -ml-24 -mt-3">
    <div className="rounded-lg shadow-lg p-2 text-3xl animate-pulse flex items-baseline"><p>Loading...</p></div>
    <Spinner color="info" className="mx-auto w-full mt-2 h-12"/>
  </div>
</div>}
        <div className="overflow-hidden w-full h-auto bg-gray-900 -z-20">
          <div className="relative">
          {Loading_Video && (<Spinner color="failure" id="Spinner" className="absolute top-[20%] overflow-hidden left-[25%] h-[50%] w-[50%] "/>)}
            <video onLoadStart={() => setLoading(true)} onLoadedData={() => setLoading(false)} className="object-cover object-center relative h-[50vh] w-full left-0 right-0 top-[-75%] -z-10" loop={true} autoPlay={true} muted={true} disablePictureInPicture controls={false} src="/videos/product.mp4"></video>
          {!Loading_Video && <img src="/pictures/Connoisseur-Logo.webp" className="absolute w-full left-0 right-0 top-[5%] lg:top-[-10%] scale-75 lg:scale-50"></img>}
          </div>
        </div>

        <div className="w-[80%] relative h-[8vh] mt-[-4vh] bg-gray-100 rounded-3xl shadow-xl flex flex-auto overflow-hidden items-center justify-center">
          <NavItem path="/Products" text="Products"></NavItem>|
          <NavItem path="/" text="Home"></NavItem>|
          <NavItem path="/ShopFinder" text="Shop Finder"></NavItem>
        </div>
        <div className="mx-auto justify-center text-4xl mt-6 text-center">
          <p className="font-lobster">Any Icecream. Any Occasion</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto mt-6 px-4"> 
          <ProductDisplayComponent displayText="Sticks" source="/pictures/conno-stick.webp"/>
          <ProductDisplayComponent displayText="Tubs" source="/pictures/conno-tub.webp"/>
          <ProductDisplayComponent displayText="Easter Specials" source="/pictures/conno-easter.webp"/>
        </div>



        <Footer />
      </main>
    </>
  );
};

export default Home;







{/* <div className="m-2 bg-slate-200 w-[85%] h-20 flex flex-row justify-center">
<div className="font-sans justify-center w-max h-full text-center items-center">Local Produce</div>
<div className="my-4 mx-3 border-slate-100 border-[0.1rem] text-slate-100 rounded-lg w-full flex items-center justify-center justify-items-center"><p className="mb-[0.15rem]">Corporate</p></div>
<div className="my-4 mx-2 bg-slate-600 w-full flex items-center justify-center"><p>fff</p></div>
<div className="my-4 mx-2 bg-slate-600 w-full flex items-center justify-center"><p>fff</p></div>
<div className="my-4 mx-3 border-slate-100 border-[0.1rem] text-slate-100 rounded-lg w-full flex items-center justify-center justify-items-center flex-shrink"><p className="mb-[0.15rem]">Login</p></div>
</div> */}