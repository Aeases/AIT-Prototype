import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import navStyles from "~/styles/navbar.module.css"
/* <div className="w-[80%] relative h-[25vh] mt-[-12.5vh] bg-slate-300"> {/*Take Height Value, divide by 2 to get mt- value*/
//fff
//</div> */

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connoisseur</title>
        <meta name="description" content="Any Icecream, Any Occasion" />
        <link rel="icon" href="/pictures/conno-favicon.png" />
      </Head>
      <main className="flex w-full flex-col items-center">

        <div className="overflow-hidden w-full h-auto bg-gray-900 -z-20">
          <div className="relative">
            <video className="object-cover object-center relative h-[50vh] w-full left-0 right-0 top-[-75%] -z-10" loop={true} autoPlay={true} muted={true} disablePictureInPicture controls={false} src="/videos/product.mp4"></video>
            <img src="/pictures/Connoisseur-Logo.webp" className="absolute top-0 max-w-[75%] min-w-[155px] "></img>
          </div>
        </div>

        <div className="w-[80%] relative h-[8vh] mt-[-4vh] bg-gray-100 rounded-3xl shadow-xl flex flex-auto overflow-hidden items-center justify-center">
          <NavItem text="Products"></NavItem>
          <NavItem text="Recipes"></NavItem>
          <NavItem text="Shop Finder"></NavItem>
        </div>
        <div className="mx-auto justify-center text-4xl mt-6 text-center">
          <p className="font-lobster">Any Icecream. Any Occasion</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto mt-6 px-4"> 
          <ProductDisplayComponent displayText="Sticks" source="/pictures/conno-stick.webp"/>
          <ProductDisplayComponent displayText="Tubs" source="/pictures/conno-tub.webp"/>
          <ProductDisplayComponent displayText="Tubs" source="/pictures/conno-easter.webp"/>
        </div>

        <div className="w-full bg-stone-500 border-t-stone-400 border-spacing-3 s-2 border-t-4 h-96 mt-24">
          <div className="m-6 grid grid-cols-2">
              <div className="justify-center w-full font-sans ml-12 flex flex-col gap-8">
                <a className="text-gray-200 underline-offset-4 underline hover:underline-offset-1 transition-all">About</a>
                <a className="text-gray-200 underline-offset-4 underline hover:underline-offset-1 transition-all">Corporate</a>
                <a className="text-gray-200 underline-offset-4 underline hover:underline-offset-1 transition-all">Contact Info</a>
              </div>
            <div className="justify-center w-full font-sans flex flex-col">
              <a className="text-slate-200 w-full">fff</a>
              <a className="text-slate-200 underline w-full">ffff</a>
            </div>
          </div>

        </div>

        
      </main>
    </>
  );
};

export default Home;

function ProductDisplayComponent({source, displayText, offset}: {source: string, displayText: string, offset?: number}) {
  if (!offset) {offset = 0}
  const ImageClassName = `w-full brightness-90 transition-all duration-500 group-hover:brightness-95 mt-[-${offset}px] group-hover:scale-110`
  return(
    <div className="flex flex-col p-1 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group">
      <div className="max-w-sm overflow-hidden rounded-xl ">
        <Image src={source} alt={displayText} width="500" height="500"  className={ImageClassName}></Image>
      </div>
      <div className="mx-auto text-2xl mt-1 font-sans">
        {displayText}
      </div>
    </div>
  )
}

function NavItem({text}: {text:string}) {
  return(
    <div className="flex items-center justify-center w-full text-2xl flex-grow">
      <div className={"transition-all px-4 py-1 rounded-full hover:bg-gray-100 hover:shadow-md"}>
        <p className="under">{text}</p>
      </div>

    </div>
  )
}



{/* <div className="m-2 bg-slate-200 w-[85%] h-20 flex flex-row justify-center">
<div className="font-sans justify-center w-max h-full text-center items-center">Local Produce</div>
<div className="my-4 mx-3 border-slate-100 border-[0.1rem] text-slate-100 rounded-lg w-full flex items-center justify-center justify-items-center"><p className="mb-[0.15rem]">Corporate</p></div>
<div className="my-4 mx-2 bg-slate-600 w-full flex items-center justify-center"><p>fff</p></div>
<div className="my-4 mx-2 bg-slate-600 w-full flex items-center justify-center"><p>fff</p></div>
<div className="my-4 mx-3 border-slate-100 border-[0.1rem] text-slate-100 rounded-lg w-full flex items-center justify-center justify-items-center flex-shrink"><p className="mb-[0.15rem]">Login</p></div>
</div> */}