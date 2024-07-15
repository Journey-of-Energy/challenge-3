/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        accent: "#fff",
      },
      backgroundImage: {
        "home-back": "url(`./src/assets/home/background-home-desktop.jpg`)",
      },
    },
  },
  plugins: [],
};
