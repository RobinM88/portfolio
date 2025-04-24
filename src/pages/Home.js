import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Avatar,
  Stack,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/7448162.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 12, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{ textAlign: 'center' }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Creative Developer & Artist
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    maxWidth: '800px',
                    mx: 'auto',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  Blending technical expertise with artistic vision to create
                  beautiful digital experiences
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  Let's Work Together
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
              >
                About Me
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                I'm a passionate developer and artist with a unique blend of
                technical skills and creative vision. My journey in both fields
                allows me to approach problems from multiple perspectives,
                creating solutions that are both functional and beautiful.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                Whether I'm coding a web application or painting a watercolor,
                I strive for excellence and attention to detail in everything I
                create.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Chip
                  icon={<GitHubIcon />}
                  label="GitHub"
                  component="a"
                  href="https://www.github.com/RobinM88"
                  target="_blank"
                  clickable
                />
                <Chip
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                  component="a"
                  href="https://www.linkedin.com/in/robin-mennel"
                  target="_blank"
                  clickable
                />
              </Stack>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                src="/images/desert dog.JPG"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            What I Do
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MotionPaper
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 2,
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                }}
              >
                <BrushIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Watercolor Art
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  Specializing in watercolor interpretations of Japanese woodblock
                  prints and traditional tattoo designs. Each piece is a unique
                  fusion of traditional Japanese aesthetics with contemporary
                  watercolor techniques.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/art"
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 'auto', borderRadius: 2 }}
                >
                  View Gallery
                </Button>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionPaper
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 2,
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                }}
              >
                <CodeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Web Development
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  Creating beautiful, responsive, and user-friendly web applications.
                  Combining artistic sensibility with technical expertise to build
                  engaging digital experiences.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/development"
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 'auto', borderRadius: 2 }}
                >
                  View Projects
                </Button>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionPaper
          elevation={3}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Let's Create Something Amazing Together
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Whether you need a custom website or a unique piece of art, I'd love to hear about your project.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
              textTransform: 'none',
            }}
          >
            Get in Touch
          </Button>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Home; 