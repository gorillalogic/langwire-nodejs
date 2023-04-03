/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.ejs',
    './views/**/*.ejs',
  ],
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}