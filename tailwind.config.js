/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'brand': ['BirrificioBrand', 'serif'],
      },
      colors: {
        primary: {
          50: '#f2f8f2',
          100: '#e0ede0',
          200: '#c4dcc4',
          300: '#9fc39f',
          400: '#74a674',
          500: '#396d3b', // Nuovo colore verde per CTA
          600: '#305a32',
          700: '#294a2a',
          800: '#233c25',
          900: '#1d3420',
          950: '#0f1e12',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#27ae60', // Mazzolesa Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fcd34d',
          400: '#f59e0b', // Canalata Yellow
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#783c11',
          900: '#653208',
          950: '#422006',
        },
        tertiary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Cambra Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        brand: ['BirrificioBrand', 'serif'], // Font personalizzato per il brand
      },
      backgroundImage: {
        'hero-pattern': "url('/homepage-hero.jpeg')",
        'about-pattern': "url('https://scontent-fco2-1.xx.fbcdn.net/v/t1.6435-9/117035440_102747608208138_8642301912861955642_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LlwXRZCeWOUQ7kNvwGOe5wg&_nc_oc=AdnWXEdadvfnOW55kqrZ4g9I4-OIINDVJ43jTxxVlahgalkUpZT48S_c5Y8v8T5f4kc&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=ObIEUOJpFNINnBk3IIUpnQ&oh=00_AfFxzApjKVNXoKtnoFMKB4fH7POqRipTW5yvMM8G9jy_Sg&oe=6835BF8F')",
      },
    },
  },
  plugins: [],
};