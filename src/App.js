import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Art from './pages/Art';
import Development from './pages/Development';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#e74c3c',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/">
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/development" element={<Development />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 