import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Avatar,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VerifiedIcon from '@mui/icons-material/Verified';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const RiskReducersSection = () => {
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

  const guarantees = [
    {
      icon: <SearchIcon sx={{ fontSize: 32 }} />,
      title: 'Diagnóstico Gratuito',
      description: 'Análise sem compromisso',
      color: theme.palette.primary.main,
    },
    {
      icon: <BuildIcon sx={{ fontSize: 32 }} />,
      title: 'Implementação Garantida',
      description: 'Prazo fixo ou reembolso',
      color: theme.palette.secondary.main,
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
      title: 'Suporte 24/7',
      description: 'Equipe especializada sempre disponível',
      color: theme.palette.accent.main,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: 'LGPD Compliance',
      description: 'Segurança e privacidade garantidas',
      color: '#4CAF50',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />,
      title: 'Certificações ISO',
      description: 'Padrões internacionais',
      color: '#FF9800',
    },
  ];

  const processSteps = [
    {
      title: 'Diagnóstico',
      description: '2 semanas de análise gratuita',
      icon: <SearchIcon />,
    },
    {
      title: 'Proposta',
      description: 'Solução personalizada com cronograma',
      icon: <AssignmentIcon />,
    },
    {
      title: 'Implementação',
      description: 'Acompanhamento semanal',
      icon: <BuildIcon />,
    },
    {
      title: 'Treinamento',
      description: 'Capacitação completa da equipe',
      icon: <SchoolIcon />,
    },
    {
      title: 'Go-live',
      description: 'Suporte intensivo na primeira semana',
      icon: <RocketLaunchIcon />,
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

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Garantias e{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Certificações
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Guarantees */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {guarantees.map((guarantee, index) => (
              <Grid item xs={12} sm={6} lg={2.4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${guarantee.color}20`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${guarantee.color}25`,
                        borderColor: `${guarantee.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: guarantee.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Avatar
                        sx={{
                          bgcolor: `${guarantee.color}15`,
                          color: guarantee.color,
                          width: 64,
                          height: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {guarantee.icon}
                      </Avatar>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <VerifiedIcon
                          sx={{
                            color: guarantee.color,
                            fontSize: 20,
                            mr: 1,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            fontSize: '1rem',
                          }}
                        >
                          {guarantee.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.4,
                        }}
                      >
                        {guarantee.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Process */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                p: 6,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  mb: 6,
                  color: theme.palette.text.primary,
                }}
              >
                Processo Transparente
              </Typography>

              {isMobile ? (
                // Mobile: Vertical Stepper
                <Stepper orientation="vertical" sx={{ maxWidth: 400, mx: 'auto' }}>
                  {processSteps.map((step, index) => (
                    <Step key={index} active={true}>
                      <StepLabel
                        StepIconComponent={() => (
                          <Avatar
                            sx={{
                              bgcolor: theme.palette.primary.main,
                              color: 'white',
                              width: 40,
                              height: 40,
                            }}
                          >
                            {step.icon}
                          </Avatar>
                        )}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {step.title}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            pb: 2,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              ) : (
                // Desktop: Horizontal Cards
                <Grid container spacing={3}>
                  {processSteps.map((step, index) => (
                    <Grid item xs={12} md={2.4} key={index}>
                      <Box sx={{ textAlign: 'center', position: 'relative' }}>
                        {/* Connection Line */}
                        {index < processSteps.length - 1 && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 32,
                              right: -24,
                              width: 48,
                              height: 2,
                              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              zIndex: 0,
                            }}
                          />
                        )}
                        
                        <Avatar
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: 'white',
                            width: 64,
                            height: 64,
                            mx: 'auto',
                            mb: 2,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          {step.icon}
                        </Avatar>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {index + 1}. {step.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.4,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RiskReducersSection;
