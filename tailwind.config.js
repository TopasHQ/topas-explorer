// const colors = require('tailwindcss/colors');

const primary = {
  50: '#e6fef6',
  100: '#b4fde4',
  200: '#82fcd2',
  300: '#50fbbf',
  400: '#21fbaf',
  500: '#05faa4',
  600: '#04c883',
  700: '#039663',
  800: '#026442',
  900: '#013221',
};

const secondary = {
  50: '#fefee6',
  100: '#fdfecd',
  200: '#fbfc9c',
  300: '#fafc83',
  400: '#f8fb5d',
  500: '#f7fa38',
  600: '#f5f906',
  700: '#dce006',
  800: '#7a7c03',
  900: '#181901',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        dark: '#1d211f',
        darker: '#121413',
        darkest: '#0c0e0d',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
