/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        cuprum: ["Cuprum"],
      },
      screens: {
        small_mobile: "320px",
      },
    },
  },
  plugins: [],
};
