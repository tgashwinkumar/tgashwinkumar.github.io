/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   "accent-1": "#22223B",
      //   "accent-2": "#4A4E69",
      //   "accent-3": "#9A8C98",
      //   "accent-4": "#C9ADA7",
      //   "accent-5": "#F2E9E4",
      // },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
};
