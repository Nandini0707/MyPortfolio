/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // Violet 600
        secondary: "#a78bfa", // Violet 400
        dark: "#0f0c29", // Deep space
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'universe-gradient': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      }
    },
  },
  plugins: [],
}
