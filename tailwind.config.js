/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      colors: {
        'dark-main-bg': '#121b2e',
        'light-main-bg': '#B9D2FC',
        'black-main': '#100F0F',
        'gray-main': '#C1C1C1',
        'black-bg': '#242222',
        'dk-blue': '#0915F8',
        'dk-green': '#00FF0F',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'red': '#E40E0E',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      robotocon: ["'Roboto Condensed'", "sans-serif"],
      dmsans: ["'DM Sans'", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
    },
  },
  plugins: [],
}

