/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./src/index.html",
    "./src/**/*.{jsx,tsx,js,ts}",
    "./node_modules/daisyui/dist/**/*.js",
    "./node_modules/react-daisyui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

