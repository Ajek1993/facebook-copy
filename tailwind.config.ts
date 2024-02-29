import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_background: "#1c1e21",
        darkGrey: "rgb(96,96,96)",
        secondary_darkGrey: "rgb(64,64,64)",
        lightGrey: "rgba(128,128,128)",
        accent_blue: "#025af2",
      },
    },
  },
  plugins: [],
};
export default config;
