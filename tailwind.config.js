/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vd-gray-blue": "hsl(217, 19%, 35%)",
        "des-dark-blue": "hsl(214, 17%, 51%)",
        "gray-blue": "hsl(212, 23%, 69%)",
        "l-gray-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
