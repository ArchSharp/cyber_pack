/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1F456E",
        iconBg: "#52B2BF",
      },
      fontFamily: { poppins: "PoppinsLight", Cervanttis: "Cervanttis" },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  plugins: [],
};
