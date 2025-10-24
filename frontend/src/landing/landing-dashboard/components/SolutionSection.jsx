import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SolutionSection = () => {
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

  const steps = [
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
      title: 'Integração Inteligente',
      features: [
        'Conexão com todos os sistemas (ERP, CRM, E-commerce, APIs)',
        'Coleta automatizada e padronizada',
        'Eliminação de trabalho manual',
      ],
      result: 'Dados centralizados e sempre atualizados',
      color: theme.palette.primary.main,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Arquitetura Segura',
      features: [
        'Estrutura escalável e robusta',
        'Governança e auditoria completa',
        'Backup e segurança empresarial',
      ],
      result: 'Dados organizados e protegidos',
      color: theme.palette.secondary.main,
    },
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
      title: 'Processamento Inteligente',
      features: [
        'Limpeza e validação automática',
        'Transformação em informações úteis',
        'Otimização de performance',
      ],
      result: 'Informações precisas e confiáveis',
      color: theme.palette.primary.light,
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Análise Estratégica',
      features: [
        'Identificação de padrões e tendências',
        'KPIs personalizados por área',
        'Relatórios automáticos',
      ],
      result: 'Insights claros para decisão',
      color: theme.palette.secondary.light,
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Inteligência Preditiva',
      features: [
        'Modelos de IA personalizados',
        'Previsões e recomendações automáticas',
        'Alertas inteligentes',
      ],
      result: 'Antecipação de oportunidades e riscos',
      color: theme.palette.primary.dark,
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      title: 'Dashboards Executivos',
      features: [
        'Visualização personalizada por cargo',
        'Acesso móvel com respostas rápidas',
        'Interatividade completa',
      ],
      result: 'Tomada de decisão rápida e precisa',
      color: theme.palette.secondary.dark,
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
        background: '#ffffff',
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
                O Sistema Completo de{' '}
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  Inteligência de Dados
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.4,
                }}
              >
                Da coleta à decisão: transformamos dados brutos em insights estratégicos
              </Typography>
            </motion.div>
          </Box>

          {/* Steps */}
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  custom={index}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${step.color}20`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${step.color}25`,
                        borderColor: `${step.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: step.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      {/* Step Number */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: step.color,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        {index + 1}
                      </Box>

                      {/* Icon and Title */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            color: step.color,
                            mb: 2,
                          }}
                        >
                          {step.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 1,
                          }}
                        >
                          ETAPA {index + 1}: {step.title}
                        </Typography>
                      </Box>

                      {/* Features */}
                      <Box sx={{ mb: 3 }}>
                        {step.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 1,
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: step.color,
                                fontSize: 16,
                                mt: 0.5,
                                mr: 1,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                lineHeight: 1.4,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Result */}
                      <Box
                        sx={{
                          p: 2,
                          background: `${step.color}10`,
                          borderRadius: 2,
                          border: `1px solid ${step.color}20`,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: step.color,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Resultado
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            mt: 0.5,
                          }}
                        >
                          {step.result}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 3,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Agendar Apresentação da Solução
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SolutionSection;
