/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'sofiacond': ['Sofia Sans Condensed', 'sans-serif'],
      },
      boxShadow: {
        left: '0 0 20px 2px rgba(0, 0, 0, 0.1)',
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        historica: {
          DEFAULT: "#01415C",
          1: "#55ACB8"
        },
        yungas: {
          DEFAULT: "#66ac7c",
          1: "#a1c372"
        },
        choromoro: {
          DEFAULT: "#FD5901",
          1: "#FAAB36"
        },
        calchaqui: {
          DEFAULT: "#9E2D2C",
          1: "#D34040"
        },
        sur: {
          DEFAULT: "#508E6D",
          1: "#8CB8A2"
        }
      }
    },
  },
  safelist: [
    'text-historica',
    'text-historica-1',
    'bg-historica',
    'bg-historica-1',
    'text-yungas',
    'text-yungas-1',
    'bg-yungas',
    'bg-yungas-1',
    'text-choromoro',
    'text-choromoro-1',
    'bg-choromoro',
    'bg-choromoro-1',
    'text-calchaqui',
    'text-calchaqui-1',
    'bg-calchaqui',
    'bg-calchaqui-1',
    'text-sur',
    'text-sur-1',
    'bg-sur',
    'bg-sur-1',
  ],
  plugins: [],
};
