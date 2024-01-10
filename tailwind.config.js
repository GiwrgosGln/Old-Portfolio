/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarWhite: "#ffffff",
        backgroundWhite: "#f9f9f9",
        textColor: "#343539",
      },
    },
  },
  plugins: [],
};
