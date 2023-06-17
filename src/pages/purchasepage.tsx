import { ProductComponent } from "~/components/ProductComponent";
import { ProductDisplayComponent } from "~/components/ProductDisplayComponent";

export default function PurchasePage() {
    return(
        <div className="h-[100vh] overflow-hidden">
            <div className="flex flex-col-2 w-full">
                <div className=" w-full flex flex-col h-screen p-3">
                    <div className="w-full flex-grow h-full rounded-lg shadow-lg bg-gray-300">
                        bruh moment
                    </div>
                    <div className="flex flex-row h-[35%] overflow-visible mt-1 py-3">
                        <ProductDisplayComponent displayText="Sticks" source="/pictures/conno-stick.webp"/> 
                        <ProductDisplayComponent displayText="Sticks" source="/pictures/conno-stick.webp"/> 
                        <ProductDisplayComponent displayText="Sticks" source="/pictures/conno-stick.webp"/> 
                    </div>
                </div>

                <div className="bg-yellow-200 w-full h-screen p-3">
                    <div className="rounded-lg m-3 p-1 bg-white h-fudfv ll ">
                        oml
                    </div>
                </div>
            </div>
        </div>
    )
}