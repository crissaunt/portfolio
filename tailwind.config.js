/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF5',
        foreground: '#000000',
        accent: '#FF6B6B',
        secondary: '#FFD93D',
        tertiary: '#C4B5FD',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        full: '9999px',
      },
      boxShadow: {
        hard: '4px 4px 0px 0px #000',
        hardMd: '8px 8px 0px 0px #000',
        hardLg: '12px 12px 0px 0px #000',
        hardXl: '16px 16px 0px 0px #000',
      },
    },
  },
  plugins: [],
}
