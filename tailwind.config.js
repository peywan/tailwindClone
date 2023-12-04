/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        body: "url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')",
      },
    },
  },
  plugins: [],
};
