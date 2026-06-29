import { createTheme, alpha } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c026d3', // accent-1
    },
    secondary: {
      main: '#3b82f6', // accent-2
    },
    background: {
      default: '#0f172a',
      paper: alpha('#1e293b', 0.4),
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: alpha('#1e293b', 0.4),
          backdropFilter: 'blur(12px)',
          border: `1px solid ${alpha('#ffffff', 0.1)}`,
          borderRadius: 24,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #c026d3, #3b82f6)',
            border: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg, #b015c2, #2a71e5)',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 20px rgba(192, 38, 211, 0.3)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            borderColor: alpha('#ffffff', 0.1),
            color: '#f8fafc',
            '&:hover': {
              backgroundColor: alpha('#ffffff', 0.1),
              transform: 'translateY(-2px)',
            },
          },
        }
      ],
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});
