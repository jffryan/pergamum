/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#28464B",
        "brand-blue-1": "#2C8C99",
        "brand-blue-2": "#326771",
        "brand-red-1": "#931621",
        "brand-yellow-1": "#F0DE3A",
      },
      boxShadow: {
        blue: "0 3px 15px #326771",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
