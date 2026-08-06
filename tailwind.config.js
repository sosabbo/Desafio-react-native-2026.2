/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/styles/colors.ts");
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {colors,
        fontSize: {
            titulo: '24px',
            st: '16px',
            txt: '12px'
        }
    },
  },
  plugins: [],
}