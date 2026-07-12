import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        navy: {
          DEFAULT: '#0B1E3D',
          deep: '#071628',
          mid: '#0F2547',
        },
        teal: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dim: '#0D8A7B',
          neon: '#00E5CC',
        },
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dim: '#5B21B6',
        },
        fuchsia: {
          DEFAULT: '#D946EF',
          light: '#E879F9',
          dim: '#A21CAF',
        },
        slate: '#1A2332',
        paylio: {
          gray: '#E8EAED',
          'gray-mid': '#B0B7C3',
          'gray-dim': '#6B7280',
          positive: '#14B8A6',
          negative: '#EF4444',
          warning: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        balance: ['44px', { lineHeight: '52px', letterSpacing: '-0.04em', fontWeight: '800' }],
        'balance-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.04em', fontWeight: '800' }],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '32px',
      },
      boxShadow: {
        teal: '0 4px 20px rgba(20, 184, 166, 0.25)',
        'teal-strong': '0 4px 24px rgba(20, 184, 166, 0.40)',
        'teal-glow': '0 0 40px rgba(20, 184, 166, 0.4), 0 0 80px rgba(20, 184, 166, 0.15)',
        violet: '0 4px 20px rgba(124, 58, 237, 0.35)',
        'violet-strong': '0 4px 30px rgba(124, 58, 237, 0.55)',
        'violet-glow': '0 0 40px rgba(124, 58, 237, 0.45), 0 0 80px rgba(124, 58, 237, 0.2)',
        fuchsia: '0 4px 20px rgba(217, 70, 239, 0.3)',
        'fuchsia-glow': '0 0 40px rgba(217, 70, 239, 0.4), 0 0 80px rgba(217, 70, 239, 0.15)',
        card: '0 2px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        nav: '0 -1px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        shimmer:
          'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
        'gradient-aurora': 'linear-gradient(135deg, #00E5CC 0%, #7C3AED 50%, #D946EF 100%)',
        'gradient-teal-violet': 'linear-gradient(135deg, #2DD4BF, #A78BFA)',
        'gradient-teal-fuchsia': 'linear-gradient(135deg, #2DD4BF, #D946EF)',
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.3s ease forwards',
        'fade-in-up': 'fadeInUp 0.35s ease forwards',
        'scale-in': 'scaleIn 0.2s ease forwards',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'check-pulse': 'checkPulse 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
        aurora: 'aurora 15s ease infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        checkPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%', backgroundSize: '300% 300%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '320% 320%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      maxWidth: {
        mobile: '430px',
      },
    },
  },
  plugins: [],
}

export default config
