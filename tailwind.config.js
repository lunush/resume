module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Octarine'],
      serif: ['Octarine'],
      mono: ['Octarine'],
      display: ['Octarine'],
      body: ['Octarine'],
    },
    extend: {
      maxWidth: {
        'screen-3xl': '1920px',
      },
      maxHeight: { 'screen-3xl': '1080px' },
      spacing: {
        120: '30rem',
        150: '37.5rem',
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
