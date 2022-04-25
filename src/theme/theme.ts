import { ThemeOptions } from '@mui/material/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#3c4043',
      contrastText: '#fff;',
    },
    secondary: {
      main: '#202124',
    },
    info: {
      main: '#42a5f5',
    },
  },
  components: {
    MuiButton: {
      defaultProps: { color: 'primary' },
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
        sizeMedium: {
          minWidth: '40px',
          minHeight: '40px',
          padding: 0,
        },
        sizeSmall: {
          minWidth: '20px',
          padding: 0,
        },
        textSizeMedium: {
          color: '#fff;',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: -4,
          right: -4,
        },
      },
    },
  },
}

export default theme
