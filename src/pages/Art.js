import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const artworkData = [
  {
    id: 1,
    title: 'Boat',
    imageUrl: '/images/Boat fight.jpg',
    cardImageUrl: '/images/Boat card.png',
    position: { x: '60%', y: '70%', rotate: -10 }
  },
  {
    id: 2,
    title: 'Samurai Wolf Hat',
    imageUrl: '/images/Samurai wolf hat.jpg',
    cardImageUrl: '/images/Samurai wolf hat card.png',
    position: { x: '75%', y: '40%', rotate: 10 }
  },
  {
    id: 3,
    title: 'Dragon',
    imageUrl: '/images/Dragon fight.jpg',
    cardImageUrl: '/images/Dragon card.png',
    position: { x: '55%', y: '20%', rotate: -10 }
  },
  {
    id: 4,
    title: 'Geisha',
    imageUrl: '/images/Geisha.jpg',
    cardImageUrl: '/images/Geisha card.png',
    position: { x: '40%', y: '30%', rotate: 15 }
  }
];

const Art = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  const handleClose = () => {
    setSelectedArt(null);
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        bgcolor: '#0A192F',
        backgroundImage: 'url(/images/7448162.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1129px',
          height: '82px',
          mt: 4,
          mx: 'auto',
          px: 2
        }}
      >
        {/* Base layer - cream fill with coral stroke */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FFEEDD',
            textAlign: 'center',
            width: '100%',
            WebkitTextStroke: { xs: '4px #FF5533', sm: '6px #FF5533', md: '8px #FF5533' },
            textShadow: '0 0 15px rgba(255, 85, 51, 0.7), 0 0 30px rgba(255, 85, 51, 0.4)',
            zIndex: 1
          }}
        >
          ART GALLERY OF ROBIN MENNEL
        </Typography>

        {/* Black layer - 20% opacity */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FFEEDD',
            opacity: 1,
            textAlign: 'center',
            width: '100%',
            textShadow: '0 0 15px rgba(255, 238, 221, 0.3)',
            zIndex: 2
          }}
        >
          ART GALLERY OF ROBIN MENNEL
        </Typography>

        {/* Coral layer - 20% opacity */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FF5533',
            opacity: 0.2,
            textAlign: 'center',
            width: '100%',
            textShadow: '0 0 20px rgba(255, 85, 51, 0.4)',
            zIndex: 3
          }}
        >
          ART GALLERY OF ROBIN MENNEL
        </Typography>
      </Box>

      {/* Floating Cards */}
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          height: 'calc(100vh - 200px)',
          maxWidth: '1400px',
          mt: 4
        }}
      >
        {artworkData.map((art) => (
          <motion.div
            key={art.id}
            initial={{ 
              rotate: art.position.rotate,
            }}
            style={{
              position: 'absolute',
              left: art.position.x,
              top: art.position.y,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: art.position.rotate + (Math.random() * 2 - 1),
              transition: { duration: 0.2 }
            }}
            onClick={() => handleArtClick(art)}
          >
            <Box
              component="img"
              src={art.cardImageUrl || art.imageUrl}
              alt={art.title}
              sx={{
                width: { xs: '200px', sm: '250px', md: '307.57px' },
                height: 'auto',
                aspectRatio: '307.57/378.28',
                objectFit: 'cover',
                position: 'relative',
                display: 'block',
                transformOrigin: 'center'
              }}
            />
          </motion.div>
        ))}
      </Box>

      {/* Artwork Detail Dialog */}
      <Dialog
        open={Boolean(selectedArt)}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          sx: {
            borderRadius: '24px',
            overflow: 'hidden',
            bgcolor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        {selectedArt && (
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={selectedArt.imageUrl}
              alt={selectedArt.title}
              sx={{
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'block',
                borderRadius: '24px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
              }}
            />
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Art; 