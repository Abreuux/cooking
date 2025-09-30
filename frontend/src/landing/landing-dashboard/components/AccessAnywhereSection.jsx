import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Tooltip,
  Chip,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ComputerMockup from './ComputerMockup';
import PhoneMockup from './PhoneMockup';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';

const AccessAnywhereSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  const features = [
    {
      icon: <CloudIcon sx={{ fontSize: 20 }} />,
      title: 'Cloud Nativo',
      description: 'Acesso instantâneo de qualquer lugar',
      color: theme.palette.primary.main,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 20 }} />,
      title: 'Segurança Total',
      description: 'Criptografia de ponta a ponta',
      color: theme.palette.secondary.main,
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 20 }} />,
      title: 'Tempo Real',
      description: 'Dados sempre atualizados',
      color: theme.palette.primary.light,
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 20 }} />,
      title: 'Multi-dispositivo',
      description: 'Desktop, tablet e mobile',
      color: theme.palette.primary.dark,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #ffffff 100%)`,
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
          backgroundImage: `radial-gradient(circle at 80% 20%, ${theme.palette.primary.main}05 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, ${theme.palette.secondary.main}05 0%, transparent 50%)`,
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
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
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
                Acesse{' '}
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  de onde estiver
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.4,
                  mb: 4,
                }}
              >
                Dashboards responsivos que se adaptam perfeitamente a qualquer dispositivo
              </Typography>
            </motion.div>

            {/* Features Chips */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                  mb: { xs: 3, md: 6 },
                }}
              >
                {features.map((feature, index) => (
                  <Tooltip
                    key={index}
                    title={feature.description}
                    arrow
                    placement="top"
                  >
                    <Chip
                      icon={feature.icon}
                      label={feature.title}
                      sx={{
                        bgcolor: `${feature.color}15`,
                        color: feature.color,
                        fontWeight: 600,
                        px: 2,
                        py: 1,
                        '&:hover': {
                          bgcolor: `${feature.color}25`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Tooltip>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Devices Showcase */}
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* Desktop */}
            <Grid item xs={12} lg={7}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <ComputerMockup />
                </Box>
              </motion.div>
            </Grid>

            {/* Mobile */}
            <Grid item xs={12} lg={5} sx={{ mt: { xs: 2, lg: 0 } }}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <PhoneMockup />
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Bottom Features */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 8,
                p: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Sincronização Perfeita
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Seus dados são sincronizados em tempo real entre todos os dispositivos. 
                Comece uma análise no computador e continue no celular, sem perder nenhuma informação.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AccessAnywhereSection;
