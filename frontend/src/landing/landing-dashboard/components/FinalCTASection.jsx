import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const FinalCTASection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [urgencyStats, setUrgencyStats] = useState({
    companies: 7,
    slots: 10,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyStats(prev => ({
        companies: Math.max(5, prev.companies + (Math.random() > 0.7 ? 1 : -1)),
        slots: Math.max(3, prev.slots + (Math.random() > 0.8 ? -1 : 0)),
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const diagnosticBenefits = [
    {
      icon: <AssessmentIcon sx={{ fontSize: 32 }} />,
      title: 'Análise de 15 dias dos seus dados atuais',
      color: theme.palette.primary.main,
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 32 }} />,
      title: 'Identificação de oportunidades específicas',
      color: theme.palette.secondary.main,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      title: 'Roadmap personalizado de implementação',
      color: theme.palette.primary.light,
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
      title: 'Projeção de ROI para sua empresa',
      color: theme.palette.secondary.light,
    },
  ];

  const urgencyElements = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
      text: `Apenas ${urgencyStats.slots} vagas por mês`,
      color: theme.palette.primary.main,
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 20 }} />,
      text: `${urgencyStats.companies} empresas já agendaram esta semana`,
      color: theme.palette.secondary.main,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 20 }} />,
      text: 'Resposta em até 2 horas',
      color: theme.palette.primary.light,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.grey[50],
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Transforme seus dados em{' '}
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 900,
                  }}
                >
                  vantagem competitiva hoje
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  maxWidth: '500px',
                  mx: 'auto',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Diagnóstico estratégico gratuito • Vagas limitadas
              </Typography>
            </motion.div>
          </Box>

          {/* Main Offer */}
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                p: 6,
                mb: 6,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: `2px solid ${theme.palette.primary.main}30`,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: theme.palette.primary.main,
                },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.secondary.main,
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Diagnóstico Completo GRATUITO
                  </Typography>
                </Box>
                
                <Chip
                  label="Valor: R$ 5.000"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1rem',
                    px: 2,
                    py: 1,
                  }}
                />
              </Box>

              {/* Benefits Grid */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {diagnosticBenefits.map((benefit, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        background: `${benefit.color}10`,
                        borderRadius: 2,
                        border: `1px solid ${benefit.color}20`,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: `${benefit.color}20`,
                          color: benefit.color,
                          mr: 2,
                          width: 48,
                          height: 48,
                        }}
                      >
                        {benefit.icon}
                      </Avatar>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                >
                  <Button
                    component="a"
                    href="https://form.typeform.com/to/a0d9de95"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 3,
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 3,
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        transform: 'translateY(-3px)',
                        boxShadow: `0 12px 35px ${theme.palette.primary.main}50`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Agendar Diagnóstico Gratuito
                  </Button>
                </motion.div>

                <Button
                  component="a"
                  href="https://form.typeform.com/to/a0d9de95"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    px: 4,
                    py: 3,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: '#25D366',
                    color: '#25D366',
                    borderWidth: 2,
                    borderRadius: 3,
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#25D36610',
                      borderColor: '#25D366',
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  WhatsApp: Falar Agora
                </Button>
              </Box>

              {/* Secondary CTA */}
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.text.secondary,
                    textDecoration: 'underline',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Ver Mais Cases
                </Button>
              </Box>
            </Card>
          </motion.div>

          {/* Urgency Elements */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {urgencyElements.map((element, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 3,
                    py: 2,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${element.color}30`,
                    boxShadow: `0 4px 15px ${element.color}15`,
                  }}
                >
                  <Box sx={{ color: element.color, mr: 1 }}>
                    {element.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {element.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinalCTASection;
