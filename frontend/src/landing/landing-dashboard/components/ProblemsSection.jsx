import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TargetIcon from '@mui/icons-material/GpsNotFixed';

const ProblemsSection = () => {
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

  const problems = [
    {
      icon: <ErrorOutlineIcon sx={{ fontSize: 48 }} />,
      title: 'Dados Fragmentados e Não Confiáveis',
      situation: 'Sua equipe gasta horas coletando dados de planilhas diferentes',
      impact: 'Decisões lentas, informações inconsistentes',
      cost: 'Retrabalho constante, perda de produtividade',
      color: theme.palette.primary.dark,
    },
    {
      icon: <TrendingDownIcon sx={{ fontSize: 48 }} />,
      title: 'Decisões Baseadas em Intuição',
      situation: 'Investimentos importantes feitos sem visibilidade real dos números',
      impact: 'Riscos desnecessários, oportunidades perdidas',
      cost: 'Crescimento estagnado, competitividade reduzida',
      color: theme.palette.secondary.dark,
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 48 }} />,
      title: 'Relatórios Manuais e Desatualizados',
      situation: 'Reuniões estratégicas baseadas em dados de semanas atrás',
      impact: 'Análises desconectadas da realidade atual',
      cost: 'Estratégias defasadas, ajustes tardios',
      color: theme.palette.primary.light,
    },
    {
      icon: <TargetIcon sx={{ fontSize: 48 }} />,
      title: 'Acompanhamento de Metas Ineficiente',
      situation: 'Descobrir se as metas foram atingidas só no final do mês',
      impact: 'Impossibilidade de correção de rota em tempo real',
      cost: 'Metas perdidas, frustração da equipe',
      color: theme.palette.secondary.light,
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
        background: `linear-gradient(180deg, #ffffff 0%, ${theme.palette.grey[50]} 100%)`,
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
                Por que sua empresa ainda toma decisões{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  no escuro?
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
                }}
              >
                Cada dia sem dados claros é uma oportunidade perdida
              </Typography>
            </motion.div>
          </Box>

          {/* Problems Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {problems.map((problem, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${problem.color}20`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${problem.color}25`,
                        borderColor: `${problem.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: problem.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          color: problem.color,
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {problem.icon}
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 2,
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {problem.title}
                        </Typography>
                      </Box>

                      {/* Problem Details */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: problem.color,
                            fontWeight: 600,
                            mb: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Situação
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontStyle: 'italic',
                          }}
                        >
                          "{problem.situation}"
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: problem.color,
                            fontWeight: 600,
                            mb: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Impacto
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 2,
                          }}
                        >
                          {problem.impact}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: problem.color,
                            fontWeight: 600,
                            mb: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Custo
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          {problem.cost}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Transition */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                textAlign: 'center',
                p: 6,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                  lineHeight: 1.4,
                  fontStyle: 'italic',
                }}
              >
                Imagine transformar essa realidade. Ter dados confiáveis, decisões rápidas e metas acompanhadas em tempo real. 
                Sua empresa operando com a precisão de uma máquina bem calibrada.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Quero Meu Diagnóstico Gratuito
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProblemsSection;
