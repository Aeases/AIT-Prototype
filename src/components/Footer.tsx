import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return(
      <div className="w-[98%] shadow-inner self-center rounded-3xl mx-auto bg-neutral-100 border-spacing-3 s-2 border-t-4 h-96 mt-24 mb-4">
        <div className="m-6 grid grid-cols-2">
            <div className="justify-start w-full font-sans ml-12 flex flex-col gap-8">
                <FooterItem text="About"/>
                <FooterItem text="Corporate"/>
                <FooterItem text="Contact Info"/>
                {/* <FontAwesomeIcon icon="twitter"/> */}
            </div>
          <div className="justify-start w-full font-sans flex flex-col gap-3">
            <p className="text-black text-lg font-bold">Prototype Site Map</p>
                <FooterItem path="/" text="Home Page"/>
                <FooterItem path="/Products" text="Products Page"/>
                <div className="tooltip">
                  <FooterItem path="/purchase/Coookies&Cream" text="Purchase Page (Coookies & Cream)"/>
                  <span className="tooltiptext">Purchase Page uses a Dynamic Route, this link only goes to the Cookies & Cream varient of this page, for more see <p className='font-bold text-green-400nm'>product page</p></span>
                </div>
                <FooterItem path="/ShopFinder" text="ShopFinder Page"/>


          </div>
        </div>
      </div>
    )
}

function FooterItem({text, path}: {text: string, path? : string}) {
  if (path) {
    return(
      <a href={`${path}`} className="text-black-700 underline-offset-4 underline hover:underline-offset-1 transition-all">{text}</a>
  )
  } else {
    return(
      <a className="text-gray-700 underline-offset-4 underline hover:underline-offset-1 transition-all">{text}</a>
    )
  }

}