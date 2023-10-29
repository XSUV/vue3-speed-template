/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //  'media' | 'class' | false
  corePlugins: {
    preflight: false
  },
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {

    }
  }
};
