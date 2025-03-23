import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: '/images/hero/hero1.webp',
      alt: 'Transformação Digital'
    },
    {
      url: '/images/hero/hero2.webp',
      alt: 'Inovação Tecnológica'
    },
    {
      url: '/images/hero/hero3.webp',
      alt: 'Análise de Dados'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
        pt: { xs: 4, sm: 6, md: 12 },
        pb: { xs: 4, sm: 6, md: 12 },
        minHeight: { xs: '80vh', md: '90vh' },
      }}
    >
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <Box
          key={image.url}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 0.15 : 0 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 20%, rgba(43, 57, 144, 0.95) 0%, rgba(43, 57, 144, 0.8) 100%)',
            }
          }}
        />
      ))}

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }} 
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { 
                      xs: '2rem',
                      sm: '2.5rem', 
                      md: '3.5rem' 
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: { xs: 1, md: 2 },
                    textAlign: { xs: 'center', md: 'left' },
                    background: 'linear-gradient(45deg, #2B3990, #E6007E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
                  }}
                >
                  Transformação Digital Inteligente
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mb: { xs: 2, md: 4 },
                    fontSize: { 
                      xs: '1.2rem',
                      sm: '1.5rem', 
                      md: '2rem' 
                    },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Soluções inovadoras em IA e análise de dados para empresas e governo
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size={isMobile ? "medium" : "large"}
                    component={RouterLink}
                    to="/contato"
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 1, md: 1.5 },
                      borderRadius: 2,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 4,
                      },
                      transition: 'all 0.2s ease',
                      minWidth: { xs: '160px', md: 'auto' },
                    }}
                  >
                    Agendar Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size={isMobile ? "medium" : "large"}
                    component={RouterLink}
                    to="/solucoes"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 1, md: 1.5 },
                      borderRadius: 2,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease',
                      minWidth: { xs: '160px', md: 'auto' },
                    }}
                  >
                    Nossas Soluções
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Imagem Decorativa para Desktop */}
          {!isMobile && (
            <Grid item md={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Box
                  component="img"
                  src="/images/hero/hero-illustration.webp"
                  alt="Ilustração Tecnológica"
                  sx={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    display: { xs: 'none', md: 'block' },
                    filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.1))',
                  }}
                  loading="eager"
                />
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 