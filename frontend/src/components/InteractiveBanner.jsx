import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';

const InteractiveBanner = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaLink,
  sideContent,
  imagePosition = 'left', // 'left', 'right', 'background'
  imageStyle = 'standard', // 'standard', 'vertical', 'cover'
  overlayOpacity = 0.4,
  textColor = 'white',
  accentColor = '#C4D600',
  primaryColor = '#2B3990',
  height = '70vh',
  minHeight = '500px',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const renderBackgroundImage = () => (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(43, 57, 144, ${overlayOpacity})`,
        },
      }}
    />
  );

  const renderSideImage = () => (
    <LazyImage
      src={image}
      alt={title}
      width="100%"
      height={imageStyle === 'vertical' ? '600px' : '400px'}
      borderRadius={2}
      sx={{
        boxShadow: theme.shadows[10],
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows[20],
        },
      }}
    />
  );

  const renderContent = () => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textVariants}
    >
      <motion.div variants={itemVariants}>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: textColor,
            mb: 2,
            textShadow: imagePosition === 'background' ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          sx={{
            color: textColor,
            mb: 4,
            opacity: 0.9,
            textShadow: imagePosition === 'background' ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>

      {ctaText && (
        <motion.div variants={itemVariants}>
          <Button
            variant="contained"
            size="large"
            href={ctaLink}
            sx={{
              bgcolor: accentColor,
              color: primaryColor,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: theme.shadows[8],
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: accentColor,
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[12],
                filter: 'brightness(1.1)',
              },
            }}
          >
            {ctaText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );

  const renderSideContent = () => (
    sideContent && (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            p: 4,
            borderRadius: 2,
            boxShadow: theme.shadows[10],
            backdropFilter: 'blur(10px)',
          }}
        >
          {sideContent}
        </Box>
      </motion.div>
    )
  );

  if (imagePosition === 'background') {
    return (
      <Box
        sx={{
          position: 'relative',
          height,
          minHeight,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {renderBackgroundImage()}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={sideContent ? 8 : 12}>
              {renderContent()}
            </Grid>
            {sideContent && (
              <Grid item xs={12} md={4}>
                {renderSideContent()}
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {imagePosition === 'left' && (
          <Grid item xs={12} md={6}>
            <Fade in={imageLoaded} timeout={1000}>
              <Box>{renderSideImage()}</Box>
            </Fade>
          </Grid>
        )}
        
        <Grid item xs={12} md={sideContent ? 8 : 6}>
          {renderContent()}
        </Grid>

        {imagePosition === 'right' && (
          <Grid item xs={12} md={6}>
            <Fade in={imageLoaded} timeout={1000}>
              <Box>{renderSideImage()}</Box>
            </Fade>
          </Grid>
        )}

        {sideContent && (
          <Grid item xs={12} md={4}>
            {renderSideContent()}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default InteractiveBanner;
