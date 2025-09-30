import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

const HeroDashboardMockup = () => {
  const theme = useTheme();
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    growth: 0,
    users: 0,
    efficiency: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: 2840000,
        growth: 23.5,
        users: 1247,
        efficiency: 87,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Animated number component
  const AnimatedNumber = ({ value, suffix = '', delay = 0, prefix = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(interval);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(interval);
      }, delay);
      
      return () => clearTimeout(timer);
    }, [value, delay]);
    
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
      >
        {prefix}{displayValue}{suffix}
      </motion.span>
    );
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Main Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: 4,
            border: `1px solid ${theme.palette.primary.main}20`,
            boxShadow: `0 20px 60px ${theme.palette.primary.main}15`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: `2px solid ${theme.palette.primary.main}20`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BarChartIcon sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                  Dashboard Executivo
                </Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                  Tempo real • Atualizado agora
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NotificationsIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.secondary.main,
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                  },
                }}
              />
            </Box>
          </Box>

          {/* Key Metrics Row */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 3 }}>
            {[
              {
                title: 'Receita Total',
                value: 2.84,
                suffix: 'M',
                prefix: 'R$ ',
                icon: <TrendingUpIcon />,
                color: theme.palette.primary.main,
                change: '+12.5%',
                delay: 500,
              },
              {
                title: 'Crescimento',
                value: 23.5,
                suffix: '%',
                icon: <AssessmentIcon />,
                color: theme.palette.secondary.main,
                change: '+3.2%',
                delay: 700,
              },
              {
                title: 'Usuários Ativos',
                value: 1247,
                icon: <SpeedIcon />,
                color: theme.palette.primary.light,
                change: '+8.1%',
                delay: 900,
              },
              {
                title: 'Eficiência',
                value: 87,
                suffix: '%',
                icon: <SecurityIcon />,
                color: theme.palette.primary.dark,
                change: '+2.3%',
                delay: 1100,
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: metric.delay / 1000 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    background: 'white',
                    borderRadius: 3,
                    border: `1px solid ${metric.color}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${metric.color}20`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        background: `${metric.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: metric.color,
                      }}
                    >
                      {metric.icon}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    >
                      {metric.change}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.text.primary,
                      mb: 0.5,
                      fontSize: '1.4rem',
                    }}
                  >
                    <AnimatedNumber 
                      value={metric.value} 
                      suffix={metric.suffix} 
                      prefix={metric.prefix}
                      delay={metric.delay}
                    />
                  </Typography>
                  
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {metric.title}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>

          {/* Charts Section */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3, mb: 3 }}>
            {/* Main Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  background: 'white',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.primary.main}20`,
                  height: 200,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 2,
                  }}
                >
                  Tendência de Receita (Últimos 12 meses)
                </Typography>
                
                <Box sx={{ height: 120, position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 120">
                    <motion.path
                      d="M 20 100 Q 60 40 100 60 T 180 50 T 260 40 T 340 30 T 380 20"
                      stroke={theme.palette.primary.main}
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <motion.path
                      d="M 20 100 Q 60 40 100 60 T 180 50 T 260 40 T 340 30 T 380 20 L 380 120 L 20 120 Z"
                      fill={`url(#gradient-${theme.palette.primary.main})`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 1, delay: 2 }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${theme.palette.primary.main}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity="0.8"/>
                        <stop offset="100%" stopColor={theme.palette.primary.main} stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
              </Paper>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  background: 'white',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.secondary.main}20`,
                  height: 200,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 2,
                  }}
                >
                  Distribuição de Vendas
                </Typography>
                
                <Box sx={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: `conic-gradient(
                        ${theme.palette.primary.main} 0deg 120deg,
                        ${theme.palette.secondary.main} 120deg 240deg,
                        ${theme.palette.primary.light} 240deg 360deg
                      )`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PieChartIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    </Box>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Box>

          {/* Bottom Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pt: 2,
                borderTop: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.secondary.main,
                    animation: 'pulse 2s infinite',
                  }}
                />
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                  Sistema operacional • Última atualização: há 2 minutos
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2 + dot * 0.1 }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.6,
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default HeroDashboardMockup;
