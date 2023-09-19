/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'FF6347',
        'secondary': 'F5DEB3',
        'background': 'FFFFFF',
        'text': '333333',
      },
        fontFamily: {
            'title': ['Playfair Display', 'sans-serif'],
            'text': ['Lato', 'serif'],
        }
    },
  },
  plugins: [],
}

