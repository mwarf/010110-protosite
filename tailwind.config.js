module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    extend: {
      colors: {
        'architect-blue': {
          DEFAULT: '#318CC4',
          '50': '#BEDCEF',
          '100': '#AED3EB',
          '200': '#8DC2E2',
          '300': '#6CB0DA',
          '400': '#4C9FD2',
          '500': '#318CC4',
          '600': '#266C97',
          '700': '#1B4C6A',
          '800': '#0F2C3D',
          '900': '#040C10'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
