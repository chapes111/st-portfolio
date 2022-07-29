const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      'light-blue': '#C9FCFF',
      'dark-blue': '#9DF9FF',
      'yellow': '#FFC200',
      'purple': '#C889FF',
      'green': '#6AE11E',
      'orange': '#FF4A03',
      'white': '#FFFFFF',
    },
    boxShadow: {
      'st': '4px 4px 0 0 rgba(0, 0, 0, 1)',
    },
    fontFamily: {
      sans: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
      secondary: ['Inria Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      screens: {
        m: "500px",
        t: "600px",
        d: "1008px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
