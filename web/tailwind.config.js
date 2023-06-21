/** @type {import('tailwindcss').Config} */
export default {
  content: [  './**/*.{html,tsx}',
],
  theme: {
    extend: {
      backgroundImage : {
        "sidebar-mobile":"url('./assets/images/bg-sidebar-mobile.svg')"
      }
    },
  },
  plugins: [],
}

