/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s infinite',
        'ping': 'ping 1s infinite',
      }
    },
  },
  plugins: [],
}