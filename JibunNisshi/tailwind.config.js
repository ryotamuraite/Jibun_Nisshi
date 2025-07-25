// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "src/styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          cyan: "#00C3D0",
        },
      },
    },
  },
  plugins: [],
};