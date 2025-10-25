/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HSL-based color system for proper depth and hierarchy
        emerald: {
          50: 'hsl(152, 76%, 97%)',
          100: 'hsl(149, 80%, 90%)',
          200: 'hsl(152, 76%, 80%)',
          300: 'hsl(156, 72%, 67%)',
          400: 'hsl(158, 64%, 52%)',
          500: 'hsl(160, 84%, 39%)',
          600: 'hsl(161, 94%, 30%)',
          700: 'hsl(163, 94%, 24%)',
          800: 'hsl(163, 88%, 20%)',
          900: 'hsl(164, 86%, 16%)',
        },
        coral: {
          50: 'hsl(17, 76%, 97%)',
          100: 'hsl(17, 80%, 90%)',
          200: 'hsl(17, 76%, 80%)',
          300: 'hsl(17, 72%, 70%)',
          400: 'hsl(17, 68%, 65%)',
          500: 'hsl(17, 64%, 58%)',
          600: 'hsl(17, 60%, 50%)',
          700: 'hsl(17, 56%, 42%)',
          800: 'hsl(17, 52%, 34%)',
          900: 'hsl(17, 48%, 26%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

