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
        logoHistorica: '#FF69B4',
        logoYungas: '#34A85A',
        logoSur: '#FFC107',
        logoChoromoro: '#8E24AA',
        logoCalchaqui: '#4CAF50',
      },
      fontFamily: {
        'encode-sans': ['Encode Sans Semi Condensed', 'sans-serif'],
        'ibm-plex-sans': ['IBM Plex Sans Condensed', 'sans-serif'],
        'noto-serif': ['Noto Serif', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
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
    },
  },
  plugins: [],
};
