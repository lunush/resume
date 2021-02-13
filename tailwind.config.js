module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Poppins'],
      serif: ['Poppins'],
      mono: ['Poppins'],
      display: ['Poppins'],
      body: ['Poppins'],
    },
    extend: {
      maxWidth: {
        'screen-3xl': '1920px',
      },
      maxHeight: { 'screen-3xl': '1080px' },
      minHeight: { '2/3': '66%' },
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
  plugins: [require('tailwindcss-blend-mode')()],
};
