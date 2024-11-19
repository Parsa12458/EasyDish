/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      primary: "#6B9080",
      primaryDark: "#89A699",
      darkGreen: "#364840",
      lightGreen: "#D3DED9",
      lightMint: "#EAF4F4",
      darkMint: "#202B26",
      forestGreen: "#4B655A",
      black: "#000000",
      midGreen: "#7A9B8D",
      oliveGreen: "#567366",
      paleGreen: "#E1E9E6",
      snow: "#F0F4F2",
      dustyGreen: "#97B1A6",
      pastelGreen: "#A4C3B2",
      gray: "#B3B3B3",
      seafoam: "#C4D3CC",
      background: "#F6FFF8",
      backgroundDark: "#151D1A",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    screens: {
      lg: { max: "1170px" },
      md: { max: "850px" },
      sm: { max: "700px" },
      xs: { max: "450px" },
    },

    extend: {
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: "#6B9080",
        },
      },
    ],
  },
};
