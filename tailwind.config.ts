import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_background: "#1c1e21",
        darkGrey: "rgb(96,96,96)",
        secondary_darkGrey: "rgb(64,64,64)",
        lightGrey: "rgb(192,192,192)",
        accent_blue: "#0290F2",
        red: "rgb(255,0,0)",
        green: "rgb(0,255,0)",
        yellow: "rgb(255,255,0)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
