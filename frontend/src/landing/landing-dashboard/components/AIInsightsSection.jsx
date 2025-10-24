import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
  LinearProgress,
  Button,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InsightsIcon from '@mui/icons-material/Insights';
import RecommendIcon from '@mui/icons-material/Recommend';

const AIInsightsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [typingText, setTypingText] = useState('');
  const fullText = 'Baseado nos dados dos últimos 30 dias, identifiquei uma oportunidade de aumentar a conversão em 23% otimizando o funil de vendas no segmento mobile...';

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Typing effect
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setTypingText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [controls, inView, fullText]);

  const aiWidgets = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 24 }} />,
      title: 'Previsão de Vendas',
      type: 'Predição',
      insight: 'Próximos 30 dias: +15% de crescimento esperado',
      confidence: 94,
      color: theme.palette.primary.main,
      trend: '+15%',
    },
    {
      icon: <WarningIcon sx={{ fontSize: 24 }} />,
      title: 'Alerta de Risco',
      type: 'Detecção',
      insight: '3 clientes com alto risco de churn identificados',
      confidence: 87,
      color: theme.palette.primary.light,
      trend: 'Alto',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 24 }} />,
      title: 'Oportunidade',
      type: 'Recomendação',
      insight: 'Segmento B2B mostra potencial de 40% mais receita',
      confidence: 91,
      color: theme.palette.secondary.main,
      trend: '+40%',
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 24 }} />,
      title: 'Otimização',
      type: 'Análise',
      insight: 'Campanha digital pode ser otimizada para +25% ROI',
      confidence: 89,
      color: theme.palette.primary.light,
      trend: '+25%',
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
        py: { xs: 4, md: 12 },
        background: '#ffffff',
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
                Inteligência Artificial que{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  gera insights
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
                Nossa IA analisa seus dados com respostas rápidas e entrega recomendações precisas para maximizar seus resultados
              </Typography>
            </motion.div>
          </Box>

          {/* AI Assistant Demo */}
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                mb: { xs: 3, md: 6 },
                p: { xs: 2, md: 4 },
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: `2px solid ${theme.palette.primary.main}20`,
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
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 3 }, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    alignSelf: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <SmartToyIcon sx={{ fontSize: 28 }} />
                </Avatar>
                
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mr: 2,
                      }}
                    >
                      Assistente IA Necotium
                    </Typography>
                    <Chip
                      label="Online"
                      size="small"
                      sx={{
                        bgcolor: '#4CAF50',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  
                  <Box
                    sx={{
                      p: { xs: 2, md: 3 },
                      background: `${theme.palette.primary.main}08`,
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.primary.main}20`,
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        minHeight: 60,
                      }}
                    >
                      {typingText}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ marginLeft: 2 }}
                      >
                        |
                      </motion.span>
                    </Typography>
                    
                    {/* Typing indicator */}
                    {typingText.length < fullText.length && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          right: 12,
                          display: 'flex',
                          gap: 0.5,
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.primary.main,
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Card>
          </motion.div>

          {/* AI Widgets Grid */}
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {aiWidgets.map((widget, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      p: { xs: 2, md: 3 },
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${widget.color}20`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 30px ${widget.color}25`,
                        borderColor: `${widget.color}40`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: widget.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: `${widget.color}15`,
                            color: widget.color,
                            width: 40,
                            height: 40,
                            mr: 2,
                          }}
                        >
                          {widget.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              fontSize: '1rem',
                              lineHeight: 1.2,
                            }}
                          >
                            {widget.title}
                          </Typography>
                          <Chip
                            label={widget.type}
                            size="small"
                            sx={{
                              bgcolor: `${widget.color}20`,
                              color: widget.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 20,
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Insight */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 3,
                          lineHeight: 1.5,
                        }}
                      >
                        {widget.insight}
                      </Typography>

                      {/* Confidence & Trend */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 600,
                            }}
                          >
                            Confiança
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: widget.color,
                              fontWeight: 700,
                            }}
                          >
                            {widget.confidence}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={widget.confidence}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: `${widget.color}20`,
                            '& .MuiLinearProgress-bar': {
                              bgcolor: widget.color,
                              borderRadius: 3,
                            },
                          }}
                        />
                      </Box>

                      {/* Trend Badge */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 2,
                          py: 1,
                          background: `${widget.color}15`,
                          borderRadius: 2,
                          border: `1px solid ${widget.color}30`,
                        }}
                      >
                        <InsightsIcon
                          sx={{
                            fontSize: 16,
                            color: widget.color,
                            mr: 1,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: widget.color,
                            fontWeight: 700,
                          }}
                        >
                          {widget.trend}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: { xs: 4, md: 8 },
                p: { xs: 3, md: 6 },
                textAlign: 'center',
                background: theme.palette.grey[50],
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 64,
                    height: 64,
                  }}
                >
                  <RecommendIcon sx={{ fontSize: 32 }} />
                </Avatar>
              </Box>
              
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                IA Personalizada para Seu Negócio
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Nossa inteligência artificial aprende com os padrões únicos do seu negócio, 
                gerando insights cada vez mais precisos e recomendações personalizadas para sua realidade.
              </Typography>
              <Button
                component="a"
                href="https://form.typeform.com/to/a0d9de95"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 4,
                  py: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Experimentar IA
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AIInsightsSection;
