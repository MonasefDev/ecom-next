/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#0D6EFD",
        "blue-light": "#E3F0FF",
        "green-blue": "#55BDC3",
        "green-dark": "#00B517",
        "green-light": "#C3FFCB",
        "orange-darker": "#FF6F00",
        "orange-dark": "#FF9017",
        "orange-light": "#FFE5BF",
        red: "#FA3434",
        "red-light": "#FFE3E3",
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: "#F7FAFC",
          200: "#EFF2F4",
          300: "#DEE2E7",
          400: "#BDC4CD",
          500: "#8B96A5",
          600: "#505050",
          dark: "#1C1C1C",
        },
      },
      spacing: {
        "navbar-desktop": "8.6rem",
        "navbar-mobile": "5.6rem",
      },
      maxWidth: {
        "screen-xl": "1200px",
      },
      screens: {
        tablet: "1024px",
        mobile: "768px",
      },
    },
  },
  plugins: [],
};
