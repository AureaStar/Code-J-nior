import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        're': '#3B1B4D',
        'a': '#FFCE07',
        'w': '#FFFFFF',
      },
      backgroundImage: {
        'grtb': 'linear-gradient(to bottom, #3B1B4D, #A650DF)',
        'grtl': 'linear-gradient(to left, #3B1B4D, #A650DF)',
        'grar': 'linear-gradient(45deg, #A650DF -100%, #3B1B4D 45%, #3B1B4D 50%, #3B1B4D 55%, #FFCE07 200%)',
        'grar2': 'linear-gradient(135deg, #A650DF -100%, #3B1B4D 45%, #3B1B4D 50%, #3B1B4D 55%, #FFCE07 200%)',
        'grar3': 'linear-gradient(150deg, #A650DF -80%, #3B1B4D 45%, #3B1B4D 50%, #3B1B4D 55%, #FFCE07 500%)',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        intro: ['Intro', 'sans-serif'],
      },
      boxShadow: {
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
