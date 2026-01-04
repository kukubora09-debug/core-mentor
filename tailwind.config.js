/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af', // Trust Blue
          dark: '#111827', // Dark Grey
          light: '#f3f4f6', // Light Background
        }
      }
    },
  },
  plugins: [],
}