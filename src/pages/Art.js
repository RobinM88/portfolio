import React, { useState } from 'react';
import {
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import styles from './Art.module.css';

const artworkData = [
  {
    id: 1,
    title: 'Boat',
    imageUrl: '/images/Boat fight.jpg',
    cardImageUrl: '/images/Boat card.png',
    position: { x: 275, y: 100, rotate: -10 }
  },
  {
    id: 2,
    title: 'Samurai Wolf Hat',
    imageUrl: '/images/Samurai wolf hat.jpg',
    cardImageUrl: '/images/Samurai wolf hat card.png',
    position: { x: 925, y: 100, rotate: 10 }
  },
  {
    id: 3,
    title: 'Dragon',
    imageUrl: '/images/Dragon fight.jpg',
    cardImageUrl: '/images/Dragon card.png',
    position: { x: 1100, y: -30, rotate: -10 }
  },
  {
    id: 4,
    title: 'Geisha',
    imageUrl: '/images/Geisha.jpg',
    cardImageUrl: '/images/geisha card.png',
    position: { x: 100, y: -30, rotate: -10 }
  }
];

const Art = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  const handleClose = () => {
    setSelectedArt(null);
  };

  const getResponsivePosition = (position, index) => {
    if (isMobile) {
      return {
        x: '50%',
        y: 150 + (index * 330),
        rotate: 0
      };
    } else if (isTablet) {
      const row = Math.floor(index / 2);
      const col = index % 2;
      return {
        x: col === 0 ? '30%' : '70%',
        y: 200 + (row * 350),
        rotate: position.rotate * 0.5
      };
    }
    return position;
  };

  return (
    <div className={styles.artPage}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Typography
            variant="h1"
            component="h1"
            className={styles.title}
          >
            ART GALLERY OF ROBIN MENNEL
          </Typography>
        </div>

        <div className={styles.artworkContainer}>
          {artworkData.map((art, index) => {
            const pos = getResponsivePosition(art.position, index);
            return (
              <motion.div
                key={art.id}
                className={styles.artCard}
                animate={{ 
                  x: pos.x,
                  y: pos.y,
                }}
                initial={false}
                style={{
                  left: 0,
                  top: 0,
                  transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
                  width: '246px',
                  height: '303px',
                  background: 'none',
                  padding: 0,
                  margin: 0,
                  border: 'none'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => handleArtClick(art)}
              >
                <img
                  src={art.cardImageUrl || art.imageUrl}
                  alt={art.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    borderRadius: '12px'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <Dialog
        open={Boolean(selectedArt)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        className={styles.dialog}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          className: styles.dialogContent,
          style: {
            background: 'transparent',
            boxShadow: 'none',
            margin: 0,
            padding: 0,
            border: 'none'
          }
        }}
      >
        <DialogContent 
          style={{ padding: 0, margin: 0, border: 'none', background: 'transparent' }}
          onClick={handleClose}
        >
          <IconButton
            onClick={handleClose}
            className={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          {selectedArt && (
            <img
              src={selectedArt.imageUrl}
              alt={selectedArt.title}
              className={styles.enlargedImage}
              style={{
                margin: 0,
                padding: 0,
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
              onClick={handleClose}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Art;