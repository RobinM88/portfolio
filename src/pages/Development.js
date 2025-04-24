import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const MotionCard = motion(Card);

// This would be replaced with your actual project data
const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Material-UI, showcasing both artistic and technical work.',
    technologies: ['React', 'Material-UI', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
  },
  {
    id: 2,
    title: 'Art Gallery Platform',
    description: 'A web application for showcasing and selling artwork, featuring a responsive design and intuitive user interface.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/art-gallery',
    liveUrl: 'https://artgallery.com',
  },
  // Add more projects as needed
];

const Development = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6 }}
      >
        Web Development Projects
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
      >
        Combining Technical Skills with Artistic Vision
      </Typography>

      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <MotionCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ bgcolor: 'primary.light', color: 'white' }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  startIcon={<GitHubIcon />}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                >
                  View Code
                </Button>
                <Button
                  startIcon={<LaunchIcon />}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                >
                  Live Demo
                </Button>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h6" gutterBottom>
          Skills & Technologies
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {[
            'React',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Node.js',
            'Git',
            'Responsive Design',
            'UI/UX Design',
          ].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: 'secondary.light',
                color: 'white',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Development; 