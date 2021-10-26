module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        primary: {
          accent: '#00c4ff',
          'accent-dark': '#0065ff',
          900: '#101010',
          800: '#191919',
          700: '#484848',
          600: '#545454',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
