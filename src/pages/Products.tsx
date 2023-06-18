import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import { NavItem } from "~/components/NavItem";
import { ProductComponent } from "~/components/ProductComponent";
import icecreams from "public/icecreams.json"
import Head from "next/head";
interface Iicecream {
  IceCreamSlug: string,
  Current_Selected_Price: number,
  Current_Selected_Icecream_Picture: string,
  Current_Selected_Icecream: string
}

export default function Products() {
  const typedIcecreams = icecreams as unknown as Iicecream[]

  
  return (
    <>
      <Head>
        <title>Connoisseur</title>
        <meta name="description" content="Any Icecream, Any Occasion" />
        <link rel="icon" href="/pictures/conno-favicon.png" />
      </Head>
    <Header /> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4">
          {typedIcecreams.map((e) => {
            return(<ProductComponent key={e.IceCreamSlug} path={`/purchase/${e.IceCreamSlug}`} description_text="delcious icecream best icecream cant get better" displayText={e.Current_Selected_Icecream} source={e.Current_Selected_Icecream_Picture} />)
          })}
      </div>
      <Footer />
    </>
  )
}


