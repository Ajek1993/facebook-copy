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
        darkGrey: "rgba(255, 255, 255, .2)",
        secondary_darkGrey: "rgba(255, 255, 255, .1)",
        lightGrey: "rgba(255, 255, 255, .6)",
        accent_blue: "#025af2",
      },
    },
  },
  plugins: [],
};
export default config;
