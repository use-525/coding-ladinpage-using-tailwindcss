const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    fontSize: {
      sm: ["12px"],
      base: ["16px"],
      lg: ["20px"],
      xl: ["25px"],
      "2xl": ["31.25px"],
      "3xl": ["39.06px"],
      "4xl": ["48px"],
    },
    colors: {
      'primary': "#FF5300",
      'secondary': "#FFF7F4",
      'colors-text': "#373737"
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.2xl") },
      });
    }),
  ],
};
