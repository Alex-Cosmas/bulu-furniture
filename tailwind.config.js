module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#046C4C',
        wsGrey: {
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#d6d6d6',
          400: '#adadad',
          500: '#858585',
          600: '#333333',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        },
        green: '#6ece9d',
        greenHover: '#91dab4',
        beige: '#faf8f5',
        yellow: '#ffce3d',
        red: '#e87b7b',
        blue: '#73b1f0',
      },
      fontFamily: {
        main: ['DM Sans', 'san-serif'],
        // body: ['Red Hat Text', 'san-serif'],
      },
      //   screens: {
      //   mobileS: "320px",
      //   mobileM: "375px",
      //   mobileL: "425px",
      //   tablet: "768px",
      //   laptop: "1024px",
      //   laptopL: "1440px"
      // }
      height: (theme) => ({
        'screen/1': '100vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
      maxWidth: {
        1200: '1200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
