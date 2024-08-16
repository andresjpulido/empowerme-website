/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FAF9F7",
      secondary: "#DE895A",
      tertiary: "#03080C",
      fourth: "#834718",
      five: "#E27255",
      six: "#5EA3B5",
      seven: "#f64d52",
      eight: "#102e46", //dark bg
      nine: "#a7b9c3", //clear fg
      tenth: "#5598A6",
      eleventh: "#D1E4E8",
      white: "red",
      "blue-300": "blue",
      "blue-600": "blue",
      "blue-700": "blue",
    },
    fontFamily: {
      montserratblack: [
        "montserratblack",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratbold: [
        "monserrat-bold",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratlightitalic: [
        "montserratlightitalic",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      monserrat: [
        "monserrat",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      hindlight:[
        "hindlight"
      ],
      hindmedium:[
        "hindmedium"
      ]
    },
  },
  plugins: [],
};
