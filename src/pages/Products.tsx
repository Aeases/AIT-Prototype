import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import { NavItem } from "~/components/NavItem";
import { ProductComponent } from "~/components/ProductComponent";


export default function Products() {
  return (
    <>
    <Header /> 
      <div className="grid grid-cols-3 gap-4 mt-6 px-4">
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
        <ProductComponent description_text="delcious icecream best icecream cant get better" displayText="Caramel" source="/pictures/conno-tub.webp" />
      </div>
      <Footer />
    </>
  )
}


