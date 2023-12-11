/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, screens: {
      'tablet': '830px',

      'laptop': '1024px',

      'desktop': '1280px',
    }
  },
  plugins: [],
}