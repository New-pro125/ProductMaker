/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"2rem",
        md:"3rem",
        lg:"4rem",
        xl:"5rem",
       "2xl":"6rem",
      }
    },
    extend: {},
  },
  plugins: [],
}

