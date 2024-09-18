/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all relevant file types in src
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out'
      },
      colors: {
        bisque: {
          50: '#fcfaf5',
          100: '#fff8e7',
          200: '#ffead1',
          300: '#ffe4c4',
          400: '#e3ad94',
          500: '#d19477',
          600: '#bf8163',
          700: '#612a18',
          800: '#593010',
          825: '#231a13',
          850: '#21252e',
          900: '#111318',
          950: '#050608',
        },
      },
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
