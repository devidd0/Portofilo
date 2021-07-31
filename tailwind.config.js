module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
      backgroundColor: {
        bgBase1: "#222",
        bgBase2: "#333",
        bgBase3: "#444",
        skillBarBg: "#007CED",
      },
      borderColor: {
        baseBorder1: "#444",
      },
      colors: {
        baseHeaderColor: "#F5F5F5",
        paragpaphColor: "#7E7E7E",
        mainIconColor: "#007CED",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
