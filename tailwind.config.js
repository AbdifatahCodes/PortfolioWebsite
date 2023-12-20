/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    // Exposing my MDX custom components file
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1180px',
    },
      colors: {
        'dark-main-bg': '#121b2e',
        'dark-main-bg-grad1': '#224081',
        'light-main-bg': '#B9D2FC',
        'light-main-bg-grad1': '#78a1e7',
        'watermark-dark': '#778ebf',
        'watermark-light': '#3b63a6',
        'blog-dark': '#010817',
        'blog-pale-dark': '#172646',
        'code-dark-bg': '#282a36',
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
      courgette: ["Courgette", "cursive"],
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

