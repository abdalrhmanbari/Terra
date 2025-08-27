/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",           // Black
        deepNavy: "#031556",        // Deep Navy Blue
        boldBlue: "#004B8F",        // Bold Blue
        softLilac: "#DB9FCE",       // Soft Lilac Pink
      },
    },
  },
  plugins: [],
}
