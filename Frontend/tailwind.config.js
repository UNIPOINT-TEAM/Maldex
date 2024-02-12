/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#00B6BA",
        redPrimary: "#EC1026",
        darkPrimary: "#222220",
        darkSecondary: "#9D9C98",
        lightPrimary: "#E5E5E5",
        lightSecondary: "#E1DFDA",
        white: "#F7F7F7",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        fs_1: "",
        fs_2: "",
        fs_3: "",
        fs_4: "",
        fs_5: "",
        fs_6: "",
        fs_7: "",
        fs_8: "",
        fs_9: "",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
