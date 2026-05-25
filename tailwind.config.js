const theme = require("./src/constants/theme-values.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
};
