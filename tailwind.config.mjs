import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#fcf4ff',
        dark: '#282828',
        themes:'#121212'
      },
      fontFamily:{
        Outfit :["Outfit", "sans-serif"],
        Ovo :["Ovo", "serif"]

      },
      boxShadow:{
        'black': '0 0 6px 0px #000',
        'white': '0 0 6px 0px #fff'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
        normal: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',  
        lg: 'repeat(3, 1fr)',
      },
      backgroundImage: {
        'footer-bg': "url('/footer-bg-color.png')",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
