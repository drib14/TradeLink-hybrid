/**
 * TradeLink Brand & Design Tokens
 * Defines official brand colors, typography, spacing, shadows, and radii.
 * Logo palette: Dark Navy background (#0B236E / #14213D), Crisp White, and Warm Gold/Amber (#F4B942).
 */

export const colors = {
  // Brand Primary & Identity
  navy: '#0B236E',     // TradeLink deep navy background
  navyDark: '#081745',
  blue: '#2563EB',     // Action, primary buttons, interactive links
  teal: '#14B8A6',     // Community, verified campus tag
  gold: '#F4B942',     // TradeLink yellow accent, ratings, highlights

  // Neutrals & Backgrounds
  background: '#F3F6FA',
  surface: '#FFFFFF',
  surfaceMuted: '#F8FAFC',
  border: '#E2E8F0',
  borderFocus: '#2563EB',

  // Typography
  textPrimary: '#0B236E',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  textInverse: '#FFFFFF',

  // Feedback & Status
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Condition Badge Colors
  condition: {
    new: '#10B981',
    likeNew: '#14B8A6',
    good: '#3B82F6',
    fair: '#F59E0B',
    poor: '#94A3B8',
  },
} as const;

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
} as const;

export const typography = {
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#0B236E',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#0B236E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#0B236E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
} as const;
