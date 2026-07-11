export const colors = {
  // Base backgrounds
  navy:        '#0B1E3D',
  navyDeep:    '#071628',
  navyMid:     '#0F2547',

  // Primary accent
  teal:        '#14B8A6',
  tealLight:   '#2DD4BF',
  tealDim:     '#0D8A7B',
  tealSubtle:  'rgba(20, 184, 166, 0.12)',

  // Neutral
  slate:       '#1A2332',
  gray:        '#E8EAED',
  grayMid:     '#B0B7C3',
  grayDim:     '#6B7280',

  // Text
  white:       '#FFFFFF',
  textPrimary:   '#FFFFFF',
  textSecondary: '#B0B7C3',
  textMuted:     '#6B7280',

  // Semantic — color carries meaning throughout the product
  positive:  '#14B8A6',   // received, successful, growing
  negative:  '#EF4444',   // spent, declined, alerts
  warning:   '#F59E0B',   // pending, flagged

  // Surfaces — layered on the dark navy base
  surface:        'rgba(255, 255, 255, 0.05)',
  surfaceRaised:  'rgba(255, 255, 255, 0.08)',
  surfaceHover:   'rgba(255, 255, 255, 0.10)',
  surfaceActive:  'rgba(20, 184, 166, 0.10)',

  // Borders
  border:       'rgba(255, 255, 255, 0.08)',
  borderStrong: 'rgba(255, 255, 255, 0.14)',
  borderTeal:   'rgba(20, 184, 166, 0.30)',
} as const

export const spacing = {
  0:    '0px',
  1:    '4px',
  2:    '8px',
  3:    '12px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  7:    '28px',
  8:    '32px',
  10:   '40px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
} as const

export const radius = {
  sm:    '8px',
  md:    '12px',
  lg:    '16px',
  xl:    '20px',
  '2xl': '24px',
  '3xl': '32px',
  full:  '9999px',
} as const

export const fontSize = {
  xs:        ['11px', { lineHeight: '16px', letterSpacing: '0.02em' }],
  sm:        ['13px', { lineHeight: '18px', letterSpacing: '0.01em' }],
  base:      ['15px', { lineHeight: '22px', letterSpacing: '0' }],
  md:        ['17px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
  lg:        ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
  xl:        ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
  '2xl':     ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
  '3xl':     ['34px', { lineHeight: '42px', letterSpacing: '-0.03em' }],
  '4xl':     ['40px', { lineHeight: '48px', letterSpacing: '-0.03em' }],
  balance:   ['44px', { lineHeight: '52px', letterSpacing: '-0.04em' }],
  balanceLg: ['56px', { lineHeight: '64px', letterSpacing: '-0.04em' }],
} as const

export const fontWeight = {
  regular:   '400',
  medium:    '500',
  semibold:  '600',
  bold:      '700',
  extrabold: '800',
} as const

export const shadow = {
  sm:         '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
  md:         '0 4px 12px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2)',
  lg:         '0 8px 24px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25)',
  xl:         '0 16px 40px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3)',
  teal:       '0 4px 20px rgba(20, 184, 166, 0.25)',
  tealStrong: '0 4px 24px rgba(20, 184, 166, 0.40)',
  card:       '0 2px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
} as const

export const transition = {
  fast:   'all 0.15s ease',
  base:   'all 0.2s ease',
  slow:   'all 0.35s ease',
  spring: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

export const zIndex = {
  base:    0,
  raised:  10,
  overlay: 20,
  modal:   30,
  nav:     40,
  toast:   50,
} as const

export const viewport = {
  mobile:   '390px',
  maxWidth: '430px',
} as const
