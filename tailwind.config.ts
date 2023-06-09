import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
