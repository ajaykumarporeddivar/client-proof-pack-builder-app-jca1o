const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#0D6EFD', // A professional blue for core brand elements
        accent: '#6C757D', // A secondary muted color for less prominent UI
        'proofpack-success': '#28A745', // Green for positive indicators like proof pack status
        'proofpack-danger': '#DC3545', // Red for critical statuses or alerts
        'proofpack-warning': '#FFC107', // Yellow for warnings or pending states
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}