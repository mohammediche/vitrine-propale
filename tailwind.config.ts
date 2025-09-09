import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
    extend: {
      colors: {
        'primary-bg': '#EDF0F6',
        'secondary-bg': '#CCD3E9',
        'text-primary': '#000000',
        'text-secondary': '#888E96',
        'accent-gold': '#EBC390',
        'accent-blue': '#0147FE',
        'accent-light-blue': '#B3E5FC',
        'accent-electric-blue': '#00C2FF',
        'dark-blue': '#001F54',
        'night-blue': '#1a027d',
        'dark-blue-uniform': '#081038',
        'dark-blue-tailwind': '#001F54',
        'accent-blue-tailwind': '#0147FE',
      },
             fontFamily: {
         'inter': ['Inter', 'sans-serif'],
       },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse': 'pulse 2s infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
};

export default config; 