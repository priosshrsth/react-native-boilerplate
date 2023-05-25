const colors = require('tailwindcss/colors');

// @type { Config } from 'tailwindcss/config
module.exports = {
  important: true,
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      newOffBlack: '#383838',
      bronze: '#c57a5c',
      black: '#1A1A1A',
      beige: '#ede9e5',
      darkBeige: '#c7c2bb',
      backgroundBlack: '#303030',
      offBlack: '#292929',
      offWhite: '#f9f7f4',
      lightBrown: '#694e43',
      'beige-rgba': 'rgba(197, 122, 92, 0.08)',
      'beige-light': 'rgba(237, 233, 229, 0.4)',
      error: '#f06767',
      brown: '#9F5F45',
      white: '#FFFFFF',
    },
    extend: {},
  },

  plugins: [],
};
