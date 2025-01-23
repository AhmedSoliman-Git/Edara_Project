/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'arab' : ['Noto Kufi Arabic','sans-serif'] ,
      'Bubble' : ['BubbleFont' , 'sans-serif'],
      'Azonix' : ['AzonixFont' ,'sans-serif'],
      'RedGlass' : ['RedGlass' , 'sans-serif'],
      'AwakeFont' : ['AwakeFont' , 'sans-serif'] ,
      'PoppinsM' : ['PoppinsM','sans-serif'],
      'PoppinsE' : ['PoppinsE','sans-serif'],
      'PlatNomor' : ['PlatNomor','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

