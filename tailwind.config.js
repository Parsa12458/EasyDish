/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#6B9080",
      darkGreen: "#364840",
      lightMint: "#EAF4F4",
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
