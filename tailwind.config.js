/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
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
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/container-queries"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
