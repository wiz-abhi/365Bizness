/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000066',
        secondary: '#000080',
        accent: '#00ffff',
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif'], // Add Times New Roman here
      },
    },
  },
  plugins: [],
};
