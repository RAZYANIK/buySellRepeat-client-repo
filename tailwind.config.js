/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    // themes: [
    //   {
    //     MYtheme: {
    //       primary: '#0FCFEC',
    //       secondary: '#19D3AE',
    //       accent: '#3a4256',
    //       neutral: '#1F2937',
    //       "base-100": "#FFFFFF",
    //     }
    //   }
    // ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
