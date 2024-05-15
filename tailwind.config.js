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
        sidenavbar: "rgba(226 ,232, 240,0.5)",
        ux_review_bg: "rgb(240, 248, 255)",
        ux_review_bg2: "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: { poppins: "PoppinsLight", Cervanttis: "Cervanttis" },
      fontSize: {
        xxs: "8px",
      },
      boxShadow: {
        ux_bx: "-2px 4px 4px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
