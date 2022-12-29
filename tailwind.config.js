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
        "dreamer-gray-base": "#23222b",
        "dreamer-gray-dark": "#1c1b22",
        "dreamer-gray-text": "#acacb6",
        "dreamer-white-text": "#fbfbfe",
        // Light mode
        "dreamer-soft-purple-light": "#ece5fa",
        "dreamer-soft-purple-dark": "#cec2ea",
        "dreamer-balanced-purple-dark": "#55367c",
        "dreamer-balanced-purple-light": "#714fa1",
        "dreamer-balanced-purple-offwhite": "#f3eef6",
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
