/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        // Material Design 3 - Primary
        primary: {
          DEFAULT: '#0058bd',
          container: '#2771df',
          fixed: '#d8e2ff',
          'fixed-dim': '#adc6ff',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#fefcff',
          fixed: '#001a41',
          'fixed-variant': '#004494',
        },
        'inverse-primary': '#adc6ff',

        // Material Design 3 - Secondary
        secondary: {
          DEFAULT: '#006e2c',
          container: '#86f898',
          fixed: '#89fa9b',
          'fixed-dim': '#6ddd81',
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#00722f',
          fixed: '#002108',
          'fixed-variant': '#005320',
        },

        // Material Design 3 - Tertiary
        tertiary: {
          DEFAULT: '#765700',
          container: '#956e00',
          fixed: '#ffdea0',
          'fixed-dim': '#fbbc06',
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#fffbff',
          fixed: '#261a00',
          'fixed-variant': '#5c4300',
        },

        // Material Design 3 - Error
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a',
        },

        // Material Design 3 - Surfaces
        surface: {
          DEFAULT: '#f9f9ff',
          dim: '#d8d9e3',
          bright: '#f9f9ff',
          'container-lowest': '#ffffff',
          'container-low': '#f2f3fd',
          container: '#ecedf7',
          'container-high': '#e7e7f1',
          'container-highest': '#e1e2eb',
          variant: '#e1e2eb',
          tint: '#005ac1',
        },
        'on-surface': {
          DEFAULT: '#191b22',
          variant: '#424753',
        },
        'inverse-surface': '#2e3038',
        'inverse-on-surface': '#eff0fa',

        // Material Design 3 - Outline
        outline: {
          DEFAULT: '#727785',
          variant: '#c2c6d5',
        },

        // Google Brand Colors
        'google-blue': '#4285F4',
        'google-green': '#34A853',
        'google-yellow': '#FBBC05',
        'google-red': '#EA4335',

        // Backgrounds
        background: '#f9f9ff',
        'on-background': '#191b22',
      },

      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },

      spacing: {
        'unit': '8px',
        'gutter': '16px',
        'card': '24px',
        'input-gap': '12px',
        'margin': '24px',
      },

      boxShadow: {
        'level-0': 'none',
        'level-1': '0px 2px 4px rgba(0,0,0,0.05)',
        'level-2': '0px 4px 8px rgba(0,0,0,0.1)',
        'level-3': '0px 8px 16px rgba(0,0,0,0.12)',
      },

      fontSize: {
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '400' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '600' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '0px', fontWeight: '500' }],
        'title-lg': ['22px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '500' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0.25px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
      },

      maxWidth: {
        'app': '430px',
      },
    },
  },
  plugins: [],
}
