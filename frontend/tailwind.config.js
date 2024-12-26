export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ["poppins"]: ["sans-serif"],
      },
      colors: {
        primary: "#428884 ",
        secondary: "#f7d75d ",
        light: "#F9F9F9",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
