module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'screen-3xl': '1920px',
      },
      maxHeight: { 'screen-3xl': '1080px' },
      spacing: {
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
};
