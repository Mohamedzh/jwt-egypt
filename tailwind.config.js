module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        wtFlameRed: '#EC4E20',
        wtYellow: '#FFE330',
        wtBlue: '#0A47ED',
        wtViolet: '#410099',
        wtPink: '#E661B2',
        wtTango: '#DB6C79',
        wtMediumRuby: '#AF3B6E',
        wtImperial: '#643A71',
        wtGreenSheen: '#75B09C',
        wtDarkCerulian: '#75B09C',
        wtOrange: '#FF760C',
        wtCyan: '#00D1D9',
        wtBlack: '#212322',
        wtWhite: '#FFFFFF',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}
