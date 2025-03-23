import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageBanner = ({ title, subtitle, image, buttonText, buttonLink }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const imageRef = useRef(null);

  // Preload da imagem para melhorar a performance
  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        if (imageRef.current) {
          imageRef.current.style.opacity = 1;
        }
      };
    }
  }, [image]);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        height: { xs: '40vh', sm: '50vh' }, 
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }
      }}
    >
      <Box
        ref={imageRef}
        component="img"
        src={image}
        alt={title}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          transform: 'scale(1.05)',
          filter: 'brightness(0.9)',
          zIndex: 0,
          opacity: 0.8,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        loading="eager"
        decoding="async"
      />
      
      <Container 
        maxWidth="xl" 
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 2,
          py: 4
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '70%' },
            animation: 'fadeIn 0.8s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' }
            },
            willChange: 'opacity, transform',
            transform: 'translateZ(0)'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: 0,
                width: 80,
                height: 4,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2
              }
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 400,
              mb: 4,
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              opacity: 0.9
            }}
          >
            {subtitle}
          </Typography>
          
          {buttonText && buttonLink && (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate(buttonLink)}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                }
              }}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(PageBanner); 