/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      md: '768px',
      mdd: '950px',
      lg: '1024px',
      lgg: '1150px',
      xl: '1280px',
      xll: '1320px',
      '2xl': '1536px',
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      poppins: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        black: '#2e2e2e',
        white: '#F8F7E2',
        pink: '#FE9BBA',
        orange: '#fe5b30',
        gray: '#505050',
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.png')",
      },
    },
  },
  plugins: [],
}
