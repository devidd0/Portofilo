module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
      backgroundColor :{
        bgBase1:'#222',
        bgBase2:'#333'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
