const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
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
        
      },
      fontSize: {
        fs_1: "46px",
        fs_2: "40px",
        fs_3: "24px",
        fs_4: "20px",
        fs_5: "19px",
        fs_6: "18px",
        fs_7: "14px",
        fs_8: "12px",
        fs_9: "11px",
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
});
