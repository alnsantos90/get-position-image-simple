/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-reader': "url('end.png')",
      }
    },
  },
  plugins: [],
}

