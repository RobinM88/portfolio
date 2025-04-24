import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
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
    position: { x: 585.14, y: 447, rotate: -10 }
  },
  {
    id: 2,
    title: 'Samurai Wolf Hat',
    imageUrl: '/images/Samurai wolf hat.jpg',
    cardImageUrl: '/images/Samurai wolf hat card.png',
    position: { x: 805, y: 335, rotate: 10 }
  },
  {
    id: 3,
    title: 'Dragon',
    imageUrl: '/images/Dragon fight.jpg',
    cardImageUrl: '/images/Dragon card.png',
    position: { x: 805, y: 39, rotate: -10 }
  },
  {
    id: 4,
    title: 'Geisha',
    imageUrl: '/images/Geisha.jpg',
    cardImageUrl: '/images/geisha card.png',
    position: { x: 585.14, y: -41, rotate: 15 }
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
          width: '1129px',
          height: '82px',
          left: '10px',
          top: '417px'
        }}
      >
        {/* Base layer - cream fill with coral stroke */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: '64px',
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FFEEDD',
            textAlign: 'left',
            WebkitTextStroke: '8px #FF5533',
            shapeOutside: '8px #FF5533',
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
            fontSize: '64px',
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FFEEDD',
            opacity: 1,
            textAlign: 'left',
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
            fontSize: '64px',
            fontWeight: 200,
            position: 'absolute',
            textTransform: 'uppercase',
            letterSpacing: '-3%',
            color: '#FF5533',
            opacity: 0.2,
            textAlign: 'left',
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
          height: '100vh',
          maxWidth: '1400px',
          overflow: 'visible',
          mb: 10  // Add margin bottom to prevent any cutoff
        }}
      >
        {artworkData.map((art) => (
          <motion.div
            key={art.id}
            initial={{ 
              rotate: art.position.rotate,
              x: art.position.x,
              y: art.position.y,
            }}
            style={{
              position: 'absolute',
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
                width: '307.57px',
                height: '378.28px',
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