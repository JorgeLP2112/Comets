const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          "dark-blue": "hsl(233, 26%, 24%)",
          "lime-green": "hsl(136, 65%, 51%)",
          "bright-cyan": "hsl(192, 70%, 51%)",
        },
        neutral: {
          "grayish-blue": "hsl(233, 8%, 62%)",
          "light-grayish-blue": "hsl(220, 16%, 96%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
        yellow: {
          light: "hsl(50, 100%, 80%)", // reemplaza con tu color amarillo claro en formato HSL
          DEFAULT: "hsl(50, 100%, 60%)", // reemplaza con tu color amarillo brillante en formato HSL
          dark: "hsl(50, 100%, 40%)", // reemplaza con tu color amarillo oscuro en formato HSL
        },
        red: {
          light: "hsl(0, 59%, 70%)", // reemplaza con tu color rojo ladrillo claro en formato HSL
          DEFAULT: "hsl(0, 59%, 50%)", // reemplaza con tu color rojo ladrillo en formato HSL
          dark: "hsl(0, 59%, 30%)", // reemplaza con tu color rojo ladrillo oscuro en formato HSL
        },
        gray: {
          light: "hsl(0, 0%, 70%)", // reemplaza con tu color gris claro en formato HSL
          DEFAULT: "hsl(0, 0%, 50%)", // reemplaza con tu color gris por defecto en formato HSL
          dark: "hsl(0, 0%, 30%)", // reemplaza con tu color gris oscuro en formato HSL
        },
      },
      backgroundImage: (theme) => ({
        "header-desktop": "url('/img/astrazenec-logo.png')",
        "header-mobile": "url('/img/astrazenec-logo.png')",
        "image-mockups": "url('/img/astrazeneca-logo.png')",
      }),
      backgroundSize: {
        "custom-mobile-header-size": "100% auto",
        "custom-mobile-mockup-size": "75% auto",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      inset: {
        "-42.6%": "-42.6%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
