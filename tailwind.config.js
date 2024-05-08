/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1F456E",
        customsoftware: "#05233C",
        navbar: "rgb(70,130,180)",
        iconBg: "#52B2BF",
        cbp01_blue: "rgba(0,191,255,0.5)",
      },
      fontFamily: { poppins: "PoppinsLight", Cervanttis: "Cervanttis" },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  plugins: [],
};
