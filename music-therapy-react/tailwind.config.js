/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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