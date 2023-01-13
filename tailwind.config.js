/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosino: "#C4C4C4",
        rosino2: "#E1E1E5",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },


        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        downEnterLarge: {
          from: {
            height: "0px",
          },
          to: {
            height: "50%",
          },
        },
        downEnterSmall: {
          from: {
            height: "0px",
          },
          to: {
            height: "33%",
          },
        },
        lineIncrease: {
          from: {
            width: "0px",
          },
          to: {
            width: "75%",
          },
        },
      },
      animation: {
        downEnterLarge: "downEnterLarge 1.8s ease forwards",
        downEnterSmall: "downEnterSmall 1.8s ease forwards",
        "fade-in": "fade-in 1.5s ease forwards",
        lineIncrease: "lineIncrease 2s ease forwards",
        "fade-in-left": "fade-in-left 1.5s ease forwards",
        "fade-in-right": "fade-in-right 1.5s ease forwards",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
