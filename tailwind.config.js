/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '7.5xl': ['5rem', { lineHeight: '1' }]
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'custom-dark': {
          primary: '#60a5fa',
          secondary: '#facc15',
          accent: '#1d4ed8',
          neutral: '#c4c9bc',
          'base-100': '#121212',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#f87171'
        },
        'custom-light': {
          primary: '#3b82f6',
          secondary: '#facc15',
          accent: '#60a5fa',
          neutral: '#43483e',
          'base-100': '#fffdfa',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#b91c1c'
        }
      }
    ]
  }
}
