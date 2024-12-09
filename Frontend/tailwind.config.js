/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        99: "27rem",
      },
      colors: {
        hero: "#2a3335",
      },
    },
  },
  plugins: [],
};
