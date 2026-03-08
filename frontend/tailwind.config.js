/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          bg: '#ffffff',
          text: '#111827',
        },
        secondary: {
          bg: '#f3f4f6',
          text: '#4b5563',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
