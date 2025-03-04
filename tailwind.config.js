/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
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
        historica: '#FF69B4',
        yungas: '#34A85A',
        sur: '#FFC107',
        choromoro: '#8E24AA',
        calchaqui: '#4CAF50',
      },
    },
  },
  plugins: [],
};
