/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        blue100: "#1E69FF",
      },
    },
  },
  plugins: [],
};
