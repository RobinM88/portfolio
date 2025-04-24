import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EmailIcon from '@mui/icons-material/Email';

const MotionPaper = motion(Paper);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://www.github.com/RobinM88',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/robin-mennel',
    },
    {
      name: 'TikTok',
      icon: <SmartDisplayIcon />,
      url: 'https://www.tiktok.com/@definitelynotanar1?_t=ZP-8vns1XgKZ1q&_r=1',
    },
    {
      name: 'Email',
      icon: <EmailIcon />,
      url: 'mailto:robinmennel88@gmail.com',
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6 }}
      >
        Get in Touch
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
      >
        Let's Connect and Create Something Amazing Together
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            elevation={3}
            sx={{ p: 4, height: '100%' }}
          >
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              I'm always interested in hearing about new projects, opportunities,
              or just connecting with fellow artists and developers.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.main',
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </MotionPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            elevation={3}
            sx={{ p: 4 }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
            </form>
          </MotionPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 