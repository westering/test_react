export const theme = {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    border: '#dbe4f0',
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    success: '#16a34a',
    danger: '#dc2626',
  },
  shadows: {
    card: '0 20px 45px rgba(15, 23, 42, 0.12)',
  },
  radius: {
    card: '28px',
    control: '16px',
  },
}

export type AppTheme = typeof theme
