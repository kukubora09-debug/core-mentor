/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B1120',      // Deepest Navy (Backgrounds)
          primary: '#2563EB',   // Vibrant Blue (Buttons)
          accent: '#F59E0B',    // Gold (Trust/Premium)
          surface: '#1E293B',   // Lighter Navy (Cards)
          light: '#F8FAFC',     // Clean White/Grey
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}