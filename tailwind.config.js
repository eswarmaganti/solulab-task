module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00FF47",
        secondary: "#181E4B",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
