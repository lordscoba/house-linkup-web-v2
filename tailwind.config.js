/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './image/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const hideScrollbar = {
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      };
      addUtilities(hideScrollbar, ['responsive', 'hover']);
    },
  ],
};
