/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brij: {
          bg: "#FAF9F6",        // Off-white background
          text: "#111111",      // Primary black text
          secondary: "#6B7280", // Gray secondary text
          accent: "#8B6F47",    // Heritage / warm gold accent
          border: "#E5E5E5",    // Border light gray
          button: "#111111"     // Button black
        }
      },
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
}
