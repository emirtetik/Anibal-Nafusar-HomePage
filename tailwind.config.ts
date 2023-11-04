import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode:"class",
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      fontFamily: {
        jacarta: ['Plus Jakarta Sans ','sans-serif'],
      },
      fontWeight: {
        small: '400',
        medium:'500',
        bold: '700',
        extrabold: '800',
      },
      boxShadow:{
        'dark': 'rgb(38, 57, 77) 0px 20px 30px -10px;',
        "dark2" :"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
        'light': 'rgba(0, 0, 0, 0.04) 0px 3px 5px;'
      },
      
      colors: {
        'primary': '#fffbfb',         //turuncu
        'secondary': '#FFA559',       //açık krem       
        'third': '#FFE6C7',           //krem
        'fourth': '#454545',           //gri 
        'fifth': '#C4CCCC'             // açık gri   
      },
      backgroundImage: theme => ({
        'background-image-1': "url('/assets/guy.webp')",
      //   'background-image-4': "url('/src/assets/images/bg4.jpg')",
      //   'background-image-7': "url('/src/assets/images/bg4.jpg')",

      }),
    },
  },
  plugins: [],
}
export default config
