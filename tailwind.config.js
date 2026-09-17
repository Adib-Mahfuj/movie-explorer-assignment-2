/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        reel: {
          950: "#0A0C10",
          900: "#101319",
          800: "#171B22",
          700: "#20252E",
          600: "#2C323D",
        },
        marquee: {
          400: "#F0C15C",
          500: "#E3B23C",
          600: "#C6952A",
        },
        flame: {
          500: "#C1443C",
          600: "#A6362F",
        },
        bone: {
          100: "#F4F1E9",
          300: "#D8D4C8",
          500: "#9A9C9F",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Sora'", "sans-serif"],
      },
      letterSpacing: {
        marquee: "0.04em",
      },
    },
  },
  plugins: [],
};
