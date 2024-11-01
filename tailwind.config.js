/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      xs: ['12px', '24px'],
      sm: ['14px', '24px'],
      base: ['16px', '24px'],
      baseDeco: ['16px', '60.91px'],
      lg: ['20px', '32px'],
      xl: ['24px', '48px'],
      xlDeco: ['24px', '60.91px'],
      '2xl': ['32px', '52px'],
      '3xl': ['50px', '60.91px'],
    },
    extend: {
      fontFamily:{
        'Stora': ['Stora', 'sans-serif'],
        'GameOverCre': ['gameovercre1', 'sans-serif'],
        'YoungSerif': ['YoungSerif-Regular', 'sans-serif'],
      },
      colors:{
        'blueOlga': '#006AA8',
        'redOlga': '#FF0044',
        'blackOlga': '#1B1B1B',
        'yellowOlga': '#FDCD09',
        'creamOlga': '#FCF4E0',
      }
    },
  },
  plugins: [],
}

