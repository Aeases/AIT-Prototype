import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return(
      <div className="w-full bg-stone-500 border-t-stone-400 border-spacing-3 s-2 border-t-4 h-96 mt-24">
        <div className="m-6 grid grid-cols-2">
            <div className="justify-center w-full font-sans ml-12 flex flex-col gap-8">
                <FooterItem text="About"/>
                <FooterItem text="Corporate"/>
                <FooterItem text="Contact Info"/>
                <FontAwesomeIcon icon="twitter"/>
            </div>
          <div className="justify-center w-full font-sans flex flex-col">
            <a className="text-slate-200 w-full">fff</a>
            <a className="text-slate-200 underline w-full">ffff</a>
          </div>
        </div>
      </div>
    )
}

function FooterItem({text}: {text: string}) {
    return(
        <a className="text-gray-200 underline-offset-4 underline hover:underline-offset-1 transition-all">{text}</a>
    )
}