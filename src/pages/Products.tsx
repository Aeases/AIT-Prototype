import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import { NavItem } from "~/components/NavItem";
import { ProductComponent } from "~/components/ProductComponent";
import icecreams from "public/icecreams.json"
interface Iicecream {
  IceCreamSlug: string,
  Current_Selected_Price: number,
  Current_Selected_Icecream_Picture: string,
  Current_Selected_Icecream: string
}

export default function Products() {
  let typedIcecreams = icecreams as unknown as Iicecream[]

  
  return (
    <>
    <Header /> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4">
          {typedIcecreams.map((e) => {
            return(<ProductComponent path={`/purchase/${e.IceCreamSlug}`} description_text="delcious icecream best icecream cant get better" displayText={e.Current_Selected_Icecream} source={e.Current_Selected_Icecream_Picture} />)
          })}
      </div>
      <Footer />
    </>
  )
}


