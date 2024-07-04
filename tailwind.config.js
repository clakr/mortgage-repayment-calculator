import defaultTheme from "tailwindcss/defaultTheme";

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
      12: ".12rem",
      16: ".16rem",
      24: ".24rem",
      32: ".32rem",
      40: ".40rem",
    },
    fontSize: {
      1: [
        "5.6rem",
        {
          fontWeight: "700",
          letterSpacing: "-1.rem",
          lineHeight: "125%",
        },
      ],
      2: [
        "2.4rem",
        {
          fontWeight: "700",
          letterSpacing: "-1.rem",
          lineHeight: "125%",
        },
      ],
      3: [
        "1.8rem",
        {
          fontWeight: "700",
          letterSpacing: "-1.rem",
          lineHeight: "125%",
        },
      ],
      4: [
        "1.6rem",
        {
          fontWeight: "500",
          letterSpacing: "0",
          lineHeight: "150%",
        },
      ],
      5: [
        "1.4rem",
        {
          fontWeight: "500",
          letterSpacing: "0",
          lineHeight: "150%",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
