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
        "dreamer-purple-light": "#44296b",
        "dreamer-purple-base": "#2e1056",
        "dreamer-purple-dark": "#24123b",
        "dreamer-purple-black": "#050014",
        "dreamer-purple-gray": "#735f90",
        "dreamer-gray-light": "#2b2a33",
        "dreamer-gray": "#acacb6",
        "dreamer-white": "#fbfbfe",
        "dreamer-accent": "#e5989b",
        // Light mode
        "dreamer-soft-purple-light": "#ece5fa",
        "dreamer-soft-purple-dark": "#cec2ea",
        "dreamer-balanced-purple-dark": "#55367c",
        "dreamer-balanced-purple-light": "#714fa1",
        "dreamer-balanced-purple-offwhite": "#f3eef6",
      },
      boxShadow: {
        "soft-purple": "0px 4px 18px #714fa1",
        "soft-white": "0px 2px 12px #ece5fa",
        accent: "0px 1px 14px #B5302B",
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
