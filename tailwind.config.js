/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        grey: "grey",
        "light-grey": "#eeeeee",
        pink: "#ff69b4",
        cyan: "#00cccc",
      },
    },
  },
  plugins: [],
};
