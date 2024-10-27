/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'custom-margin': '24px', // Замініть '24px' на потрібне вам значення
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
        // Додайте будь-які інші власні значення
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};

