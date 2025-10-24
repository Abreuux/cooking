import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleIcon from '@mui/icons-material/Circle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

const PhoneMockup = () => {
  const theme = useTheme();
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    growth: 0,
    alerts: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: 2800000,
        growth: 23.5,
        alerts: 3,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Animated number component
  const AnimatedNumber = ({ value, suffix = '', delay = 0 }) => {
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
        {displayValue}{suffix}
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
        maxWidth: 280,
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Box
          sx={{
            background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
            borderRadius: 6,
            p: 1,
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid #dee2e6',
          }}
        >
          {/* Phone Screen */}
          <Box
            sx={{
              background: 'white',
              borderRadius: 5,
              p: 0.5,
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #e9ecef',
            }}
          >
            {/* Notch */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 20,
                background: '#f8f9fa',
                borderRadius: '0 0 12px 12px',
                zIndex: 2,
                border: '1px solid #e9ecef',
                borderTop: 'none',
              }}
            />

            {/* Screen Content */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                borderRadius: 4,
                minHeight: 600,
                p: 2,
                pt: 4,
                position: 'relative',
              }}
            >
              {/* Status Bar */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                  px: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                >
                  9:41
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <Box sx={{ width: 4, height: 4, background: theme.palette.text.primary, borderRadius: '50%' }} />
                  <Box sx={{ width: 4, height: 4, background: theme.palette.text.primary, borderRadius: '50%' }} />
                  <Box sx={{ width: 4, height: 4, background: theme.palette.text.primary, borderRadius: '50%' }} />
                </Box>
              </Box>

              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    Dashboard
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CircleIcon sx={{ fontSize: 6, color: '#4CAF50' }} />
                    </motion.div>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.7rem',
                      }}
                    >
                      Respostas Rápidas
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box sx={{ position: 'relative' }}>
                    <NotificationsIcon sx={{ color: theme.palette.text.primary, fontSize: 20 }} />
                    {animatedValues.alerts > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -4,
                            right: -4,
                            width: 16,
                            height: 16,
                            background: theme.palette.primary.light,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'white',
                              fontSize: '0.6rem',
                              fontWeight: 700,
                            }}
                          >
                            <AnimatedNumber value={3} delay={1000} />
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
                  </Box>
                  <MenuIcon sx={{ color: theme.palette.text.primary, fontSize: 20 }} />
                </Box>
              </Box>

              {/* Quick Stats */}
              <Box sx={{ mb: 3 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      background: 'white',
                      border: '1px solid #e9ecef',
                      borderRadius: 2,
                      mb: 2,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TrendingUpIcon
                        sx={{
                          color: theme.palette.secondary.main,
                          fontSize: 16,
                          mr: 1,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.7rem',
                        }}
                      >
                        Receita Total
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      <AnimatedNumber value={2.8} suffix="M" delay={1200} />
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#4CAF50',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}
                    >
                      +12.5% ↗
                    </Typography>
                  </Paper>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      background: 'white',
                      border: '1px solid #e9ecef',
                      borderRadius: 2,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BarChartIcon
                        sx={{
                          color: theme.palette.primary.light,
                          fontSize: 16,
                          mr: 1,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.7rem',
                        }}
                      >
                        Crescimento
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      <AnimatedNumber value={23.5} suffix="%" delay={1400} />
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#4CAF50',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}
                    >
                      +5.2% ↗
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>

              {/* Mini Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: 2,
                    height: 140,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: '0.7rem',
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    Tendência Semanal
                  </Typography>
                  
                  <Box sx={{ height: 80, display: 'flex', alignItems: 'end', gap: 1, mt: 1 }}>
                    {[30, 45, 35, 60, 40, 70, 55].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                        style={{
                          flex: 1,
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: '2px 2px 0 0',
                          opacity: 0.8,
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>

              {/* Additional Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: 2,
                    mt: 1,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}
                    >
                      Conversões Hoje
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      <AnimatedNumber value={47} delay={1600} />
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}
                    >
                      Taxa de Conversão
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      <AnimatedNumber value={12.4} suffix="%" delay={1800} />
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      p: 1.5,
                      background: `${theme.palette.primary.main}10`,
                      borderRadius: 2,
                      textAlign: 'center',
                      border: `1px solid ${theme.palette.primary.main}20`,
                    }}
                  >
                    <BarChartIcon sx={{ fontSize: 16, color: theme.palette.primary.main, mb: 0.5 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      Relatórios
                    </Typography>
                  </Box>
                  
                  <Box
                    sx={{
                      flex: 1,
                      p: 1.5,
                      background: `${theme.palette.secondary.main}10`,
                      borderRadius: 2,
                      textAlign: 'center',
                      border: `1px solid ${theme.palette.secondary.main}20`,
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 16, color: theme.palette.secondary.main, mb: 0.5 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      Insights
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Bottom Navigation Indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 4,
                  background: '#dee2e6',
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default PhoneMockup;
