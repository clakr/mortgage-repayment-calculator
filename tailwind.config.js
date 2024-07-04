import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      lime: "#D8DB2F",
      slate: {
        100: "#E4F4FD",
        300: "#9ABED5",
        500: "#6B94A8",
        700: "#4E6E7E",
        900: "#133041",
      },
      white: "#FFFFFF",
      red: "#D73328",
    },
    spacing: {
      8: ".8rem",
      12: "1.2rem",
      16: "1.6rem",
      24: "2.4rem",
      32: "3.2rem",
      40: "4rem",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".font-preset-1": {
          "font-size": "5.6rem",
          "font-weight": "700",
          "letter-spacing": "-0.1rem",
          "line-height": "125%",
        },
        ".font-preset-2": {
          "font-size": "2.4rem",
          "font-weight": "700",
          "letter-spacing": "-0.1rem",
          "line-height": "125%",
        },
        ".font-preset-3": {
          "font-size": "1.8rem",
          "font-weight": "700",
          "letter-spacing": "-0.1rem",
          "line-height": "125%",
        },
        ".font-preset-4": {
          "font-size": "1.6rem",
          "font-weight": "500",
          "letter-spacing": "0",
          "line-height": "150%",
        },
        ".font-preset-5": {
          "font-size": "1.4rem",
          "font-weight": "500",
          "letter-spacing": "0",
          "line-height": "150%",
        },
      });
    }),
  ],
};
