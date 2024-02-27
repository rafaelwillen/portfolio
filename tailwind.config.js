/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/container-queries"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
