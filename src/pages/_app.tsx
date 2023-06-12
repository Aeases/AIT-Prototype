import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Lobster } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

const lobster = Lobster({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-lobster"
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
  <>
    <style jsx global>
    {`
      :root {
        --font-lobster: ${lobster.style.fontFamily};
      }
    `}
  </style>
  <Component {...pageProps} />
  </>
  ) ;
};

export default MyApp;
