/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'custom-margin': '24px',
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};

