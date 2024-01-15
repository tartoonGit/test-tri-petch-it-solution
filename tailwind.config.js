/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "740px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};

