/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'custom-margin': '24px', // Замініть '24px' на потрібне вам значення
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};

