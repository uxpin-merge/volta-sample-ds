const boilerplateTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#6d28d9',
      light: '#a78bfa',
      dark: '#4c1d95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4338ca',
      light: '#818cf8',
      dark: '#3730a3',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: '42px',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#0f172a',
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: '#0f172a',
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      color: '#1e293b',
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#1e293b',
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: 1.4,
      color: '#0f172a',
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.5,
      color: '#0f172a',
    },
    body1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#64748b',
    },
    body2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.6,
      color: '#64748b',
    },
    caption: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 1.5,
      color: '#94a3b8',
    },
    overline: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: 1.5,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#94a3b8',
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '14px',
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: [
    'none',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 2px 8px rgba(15,23,42,0.08)',
    '0 4px 16px rgba(15,23,42,0.10)',
    '0 8px 24px rgba(15,23,42,0.12)',
    '0 12px 32px rgba(15,23,42,0.14)',
    '0 16px 40px rgba(15,23,42,0.16)',
    '0 20px 60px rgba(109,40,217,0.12)',
    '0 8px 30px rgba(109,40,217,0.35)',
    '0 0 12px rgba(109,40,217,0.2)',
    '0 4px 20px rgba(109,40,217,0.35)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
    '0 1px 4px rgba(15,23,42,0.06)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          letterSpacing: '0.02em',
          textTransform: 'none',
          borderRadius: '10px',
          padding: '10px 24px',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6d28d9, #4338ca)',
          boxShadow: '0 4px 20px rgba(109,40,217,0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            boxShadow: '0 8px 30px rgba(109,40,217,0.35)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          background: 'transparent',
          color: '#a78bfa',
          border: '1.5px solid rgba(109,40,217,0.5)',
          '&:hover': {
            background: 'rgba(109,40,217,0.08)',
            borderColor: '#7c3aed',
          },
        },
        text: {
          color: '#64748b',
          '&:hover': {
            background: 'rgba(109,40,217,0.04)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          borderRadius: '8px',
          height: '28px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          boxShadow: '0 1px 4px rgba(15,23,42,0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 60px rgba(109,40,217,0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: '#0f172a',
            borderRadius: '10px',
            background: '#f8fafc',
            '& fieldset': { borderColor: '#e2e8f0' },
            '&:hover fieldset': { borderColor: 'rgba(109,40,217,0.4)' },
            '&.Mui-focused fieldset': {
              borderColor: '#7c3aed',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: '#94a3b8',
            '&.Mui-focused': { color: '#7c3aed' },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': { color: '#7c3aed' },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#7c3aed',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#475569',
          '&.Mui-checked': { color: '#7c3aed' },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: '#7c3aed' },
        thumb: {
          background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
          boxShadow: '0 0 12px rgba(109,40,217,0.5)',
          width: '18px',
          height: '18px',
        },
        track: {
          background: 'linear-gradient(90deg, #6d28d9, #4338ca)',
          border: 'none',
        },
        rail: { background: 'rgba(15,23,42,0.1)' },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px',
          borderRadius: '10px',
        },
        standardSuccess: {
          background: 'rgba(16,185,129,0.06)',
          color: '#065f46',
          border: '1px solid rgba(16,185,129,0.25)',
          '& .MuiAlert-icon': { color: '#10b981' },
        },
        standardWarning: {
          background: 'rgba(245,158,11,0.06)',
          color: '#78350f',
          border: '1px solid rgba(245,158,11,0.25)',
          '& .MuiAlert-icon': { color: '#f59e0b' },
        },
        standardError: {
          background: 'rgba(239,68,68,0.06)',
          color: '#7f1d1d',
          border: '1px solid rgba(239,68,68,0.25)',
          '& .MuiAlert-icon': { color: '#ef4444' },
        },
        standardInfo: {
          background: 'rgba(109,40,217,0.06)',
          color: '#3b0764',
          border: '1px solid rgba(109,40,217,0.2)',
          '& .MuiAlert-icon': { color: '#7c3aed' },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '4px',
          borderRadius: '4px',
          background: 'rgba(15,23,42,0.06)',
        },
        bar: {
          borderRadius: '4px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#94a3b8',
          fontWeight: 700,
          background: 'transparent',
        },
        body: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px',
          color: '#0f172a',
          background: 'transparent',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '12px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#e2e8f0' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          boxShadow: '0 1px 4px rgba(15,23,42,0.06)',
        },
      },
    },
  },
};

export default boilerplateTheme;
