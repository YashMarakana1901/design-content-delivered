/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        isabelline: "#F7F0E9",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXs: { max: "468px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxXlg: { max: "992px" },
        maxLg: { max: "1023px" },
        maxXl: { max: "1279px" },
      },
      fontFamily: {
        "inter-regular": "InterRegular",
        "inter-medium": "InterMedium",
        "inter-semibold": "InterSemiBold",
        "inter-bold": "InterBold",
        "inter-extrabold": "InterExtraBold",
      },
      boxShadow: {
        default: "0px 1px 4px 0px rgba(0, 0, 0, 0.14)",
        light: "rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};