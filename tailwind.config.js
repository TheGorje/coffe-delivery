/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { smaller: '420px' },
      fontFamily: {
        title: ["'Baloo 2'", 'sans-serif'],
        text: ["'Roboto'", 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['3rem', { lineHeight: '130%', fontWeight: '800' }], // 48px
        'title-l': ['2rem', { lineHeight: '130%', fontWeight: '800' }], // 32px
        'title-m': ['1.5rem', { lineHeight: '130%', fontWeight: '800' }], // 24px
        'title-s': ['1.25rem', { lineHeight: '130%', fontWeight: '700' }], // 20px
        'title-xs': ['1.125rem', { lineHeight: '130%', fontWeight: '700' }], // 18px
        'text-l': ['1.25rem', { lineHeight: '130%', fontWeight: '400' }], // 20px
        'text-l-bold': ['1.25rem', { lineHeight: '130%', fontWeight: '700' }], // 20px Bold
        'text-m': ['1rem', { lineHeight: '130%', fontWeight: '400' }], // 16px
        'text-m-bold': ['1rem', { lineHeight: '130%', fontWeight: '700' }], // 16px Bold
        'text-s': ['0.875rem', { lineHeight: '130%', fontWeight: '400' }], // 14px
        'text-xs': ['0.75rem', { lineHeight: '130%', fontWeight: '700' }], // 12px
        tag: ['0.625rem', { lineHeight: '130%', fontWeight: '700' }], // 10px
        'button-g': ['0.875rem', { lineHeight: '160%', fontWeight: '700' }], // 14px
        'button-m': ['0.75rem', { lineHeight: '160%', fontWeight: '400' }], // 12px
      },
      colors: {
        'yellow-dark': 'var(--yellow-dark)',
        yellow: 'var(--yellow)',
        'yellow-light': 'var(--yellow-light)',
        'purple-dark': 'var(--purple-dark)',
        purple: 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        'base-title': 'var(--base-title)',
        'base-subtitle': 'var(--base-subtitle)',
        'base-text': 'var(--base-text)',
        'base-label': 'var(--base-label)',
        'base-hover': 'var(--base-hover)',
        'base-button': 'var(--base-button)',
        'base-input': 'var(--base-input)',
        'base-card': 'var(--base-card)',
        background: 'var(--background)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
}
