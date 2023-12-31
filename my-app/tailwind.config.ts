import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        azul:{
          claro:'#C5DFFF',
          escuro:'#061E3C',
          hover:'#0A2A5C',
        }
      },
      fontFamily:{
        Dhurjati: ['Dhurjati', 'sans-serif']
      },
      keyframes: {
        sino_kf:{
          '0%, 100%':{transform:'rotate(-10deg)'},
          '50%':{transform:'rotate(10deg)'},
        }
      },
      animation:{
        sino:'sino_kf 0.31s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
