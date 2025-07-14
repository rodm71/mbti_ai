/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    "bg-purple-600", "bg-indigo-600", "bg-red-600", "bg-pink-500",
    "bg-teal-600", "bg-green-600", "bg-yellow-500", "bg-orange-500",
    "bg-blue-600", "bg-emerald-600", "bg-rose-600", "bg-amber-500",
    "bg-lime-600", "bg-cyan-600", "bg-violet-600", "bg-fuchsia-600"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
