
  import { type Config } from "tailwindcss";

  /**
   * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
   */


  module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js",
      "./node_modules/flowbite-react/**/*.js",
      "./public/**/*.html",
      "./pages/**/*.{ts,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
    ],
    plugins: [require("flowbite/plugin")],
    theme: {
      extend: {
        fontFamily: {
          'lobster': ['var(--font-lobster)', 'mono']
        },
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  } satisfies Config;
