/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Fira Code", "monospace"],
    },
    colors: {
      primary: {
        blackPearl: "#01080E",
        darkBlue: "#011627",
        midnightBlue: "#011221",
      },
      secondary: {
        steelBlue: "#607B96",
        lightSeaGreen: "#3C9D93",
        mediumBlue: "#4D5BCE",
      },
      accent: {
        sandyBrown: "#FEA55F",
        mediumAquamarine: "#43D9AD",
        lightCoral: "#E99287",
        lightPastelPurple: "#C98BDF",
      },
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    fontSize: {
      headline: "3.875rem",
      subHeadline: "2rem",
      body: "1.125rem",
      label: "1rem",
      code: "0.875rem",
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/container-queries"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
