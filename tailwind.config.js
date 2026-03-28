/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        accents: {
          1: "#111111",
          2: "#333333",
          3: "#444444",
          4: "#666666",
          5: "#888888",
        },
        brand: {
          primary: "#ffffff", // Vercel is mostly BW
          accent: "#10b981", // Emerald for WhatsApp
          danger: "#ef4444", // Red for Presupuesto
        }
      }
    },
  },
  plugins: [],
}
