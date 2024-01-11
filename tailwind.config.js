/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarWhite: "#1f2833",
        backgroundWhite: "#0b0c10",
        textColor: "#ffffff",
        gc1: "#6F2232",
        gc2: "#950740",
        gc3: "#C3073F",
      },
    },
  },
  plugins: [],
};
