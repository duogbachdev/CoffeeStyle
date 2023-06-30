/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'coffee': {
          50: '#E8E6D0',
          200:'#C89F94',
          400: '#A25F4B',
          600:'#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':{transform:'translate3d(0px,8px,0px)',opacity:0},
          '100%':{transform:'translate3d(0px,0px,0px)',opacity:1},
        }  
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        slideUp: 'slideUp .4s ease-in',
      },
      backgroundImage: {
        'slider-bg': 'url("./img/slider-background.jpeg")'
      }
    },
    plugins: [],
  },
};