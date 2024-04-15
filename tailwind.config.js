/** @type {import('tailwindcss').Config} */
import tokens from "./css/tokens.json";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        success: tokens.global.success.green.value,
        error: tokens.global.error.red.value,
        primary: tokens.global.primary.base.value,
      },
      borderRadius: {
        custom: tokens.global.custom.value + "px",
      },
    },
  },
  plugins: [],
};
