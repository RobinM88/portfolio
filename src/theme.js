import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"MuseoModerno", sans-serif',
    },
    h2: {
      fontFamily: '"MuseoModerno", sans-serif',
    },
    h3: {
      fontFamily: '"MuseoModerno", sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#FF6B6B',
    },
    secondary: {
      main: '#0A192F',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

export default theme; 