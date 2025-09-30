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
  Chip,
  Avatar,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactoryIcon from '@mui/icons-material/Factory';
import BusinessIcon from '@mui/icons-material/Business';

const CasesSection = () => {
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

  const cases = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
      sector: 'E-commerce',
      title: '40% de Aumento em Conversão',
      challenge: 'Dados de vendas fragmentados em múltiplas plataformas',
      solution: 'Dashboard unificado com análise de comportamento',
      result: 'Identificação de gargalos, otimização de funil',
      metrics: [
        { label: 'Conversão', value: '+40%', color: theme.palette.primary.main },
        { label: 'ROI', value: '+280%', color: theme.palette.primary.light },
        { label: 'Tempo de análise', value: '-75%', color: theme.palette.primary.dark },
      ],
      color: theme.palette.primary.main,
    },
    {
      icon: <FactoryIcon sx={{ fontSize: 40 }} />,
      sector: 'Indústria',
      title: 'R$ 2M Economizados em Estoque',
      challenge: 'Previsão de demanda imprecisa',
      solution: 'IA preditiva integrada com sistemas de produção',
      result: 'Redução de 30% em estoque parado',
      metrics: [
        { label: 'Economia', value: 'R$ 2M', color: theme.palette.primary.light },
        { label: 'Estoque parado', value: '-30%', color: theme.palette.primary.main },
        { label: 'Precisão previsão', value: '+85%', color: theme.palette.primary.dark },
      ],
      color: theme.palette.primary.light,
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      sector: 'Serviços',
      title: '60% de Redução em Churn',
      challenge: 'Perda de clientes sem identificação prévia',
      solution: 'Algoritmos de detecção de risco de churn',
      result: 'Ações preventivas automatizadas',
      metrics: [
        { label: 'Churn', value: '-60%', color: theme.palette.primary.dark },
        { label: 'Retenção', value: '+45%', color: theme.palette.primary.main },
        { label: 'LTV', value: '+120%', color: theme.palette.primary.light },
      ],
      color: theme.palette.primary.dark,
    },
  ];

  const impactMetrics = [
    { icon: '📊', value: '+150', label: 'empresas transformadas' },
    { icon: '📈', value: '38%', label: 'melhoria média em tomada de decisão' },
    { icon: '⚡', value: '75%', label: 'redução em tempo de análise' },
    { icon: '💰', value: '340%', label: 'ROI médio em 12 meses' },
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
        py: { xs: 4, md: 12 },
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
                Resultados{' '}
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  comprovados
                </Box>{' '}
                em empresas reais
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
                Veja como empresas como a sua alcançaram resultados extraordinários com nossa plataforma
              </Typography>
            </motion.div>
          </Box>

          {/* Cases */}
          <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 4, md: 8 } }}>
            {cases.map((caseItem, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${caseItem.color}20`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${caseItem.color}25`,
                        borderColor: `${caseItem.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: caseItem.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: `${caseItem.color}15`,
                            color: caseItem.color,
                            mr: 2,
                            width: 56,
                            height: 56,
                          }}
                        >
                          {caseItem.icon}
                        </Avatar>
                        <Box>
                          <Chip
                            label={caseItem.sector}
                            size="small"
                            sx={{
                              bgcolor: `${caseItem.color}20`,
                              color: caseItem.color,
                              fontWeight: 600,
                              mb: 1,
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              lineHeight: 1.2,
                            }}
                          >
                            {caseItem.title}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Details */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: caseItem.color,
                            fontWeight: 600,
                            mb: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Desafio
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 2,
                          }}
                        >
                          {caseItem.challenge}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: caseItem.color,
                            fontWeight: 600,
                            mb: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                          }}
                        >
                          Solução
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 2,
                          }}
                        >
                          {caseItem.solution}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: caseItem.color,
                            fontWeight: 600,
                            mb: 1,
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
                            fontWeight: 500,
                            mb: 3,
                          }}
                        >
                          {caseItem.result}
                        </Typography>
                      </Box>

                      {/* Metrics */}
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: 1,
                        }}
                      >
                        {caseItem.metrics.map((metric, metricIndex) => (
                          <Box
                            key={metricIndex}
                            sx={{
                              textAlign: 'center',
                              p: 1,
                              background: `${metric.color}10`,
                              borderRadius: 1,
                              border: `1px solid ${metric.color}20`,
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: metric.color,
                                fontSize: '1rem',
                              }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.7rem',
                                lineHeight: 1.2,
                              }}
                            >
                              {metric.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Impact Metrics */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                p: 6,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.light}10)`,
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  mb: 4,
                  color: theme.palette.text.primary,
                }}
              >
                Métricas de Impacto
              </Typography>

              <Grid container spacing={4}>
                {impactMetrics.map((metric, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: '2rem',
                          mb: 1,
                        }}
                      >
                        {metric.icon}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CasesSection;
