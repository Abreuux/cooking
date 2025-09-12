import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, useTheme, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import CircleIcon from '@mui/icons-material/Circle';

const ComputerMockup = () => {
  const theme = useTheme();
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    growth: 0,
    customers: 0,
    conversion: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: 2800000,
        growth: 23.5,
        customers: 16000,
        conversion: 4.2,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  const MetricCard = ({ title, value, suffix = '', trend, icon, color, delay = 0, tooltip }) => (
    <Tooltip title={tooltip} arrow placement="top">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.05 }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 2,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${color}20`,
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: color,
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ color, mr: 1 }}>
              {icon}
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
              {title}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: delay + 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  fontSize: '1.1rem',
                }}
              >
                {typeof value === 'number' && value > 1000 ? formatNumber(value) : value}{suffix}
              </Typography>
            </motion.div>
            
            {trend && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: trend > 0 ? '#4CAF50' : '#F44336',
                    fontSize: '0.75rem',
                  }}
                >
                  {trend > 0 ? <TrendingUpIcon sx={{ fontSize: 16 }} /> : <TrendingDownIcon sx={{ fontSize: 16 }} />}
                  <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 600 }}>
                    {Math.abs(trend)}%
                  </Typography>
                </Box>
              </motion.div>
            )}
          </Box>
        </Paper>
      </motion.div>
    </Tooltip>
  );

  return (
    <Box
      sx={{
        maxWidth: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Computer Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
            borderRadius: '12px 12px 0 0',
            p: 1,
            position: 'relative',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {/* Browser Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Box sx={{ display: 'flex', gap: 0.5, mr: 2 }}>
              <CircleIcon sx={{ fontSize: 12, color: '#ff5f57' }} />
              <CircleIcon sx={{ fontSize: 12, color: '#ffbd2e' }} />
              <CircleIcon sx={{ fontSize: 12, color: '#28ca42' }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: 24,
                background: 'white',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                px: 2,
                border: '1px solid #e0e0e0',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontSize: '0.7rem',
                }}
              >
                https://dashboard.necotium.com
              </Typography>
            </Box>
          </Box>

          {/* Dashboard Content */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              minHeight: 400,
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            {/* Header */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 1,
                }}
              >
                Dashboard Executivo
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CircleIcon sx={{ fontSize: 8, color: '#4CAF50' }} />
                </motion.div>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Dados em tempo real • Atualizado agora
                </Typography>
              </Box>
            </Box>

            {/* Metrics Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, mb: 3 }}>
              <MetricCard
                title="Receita Total"
                value={animatedValues.revenue}
                suffix=""
                trend={12.5}
                icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
                color={theme.palette.primary.main}
                delay={0.2}
                tooltip="Receita total acumulada no período com crescimento de 12.5%"
              />
              <MetricCard
                title="Crescimento"
                value={animatedValues.growth}
                suffix="%"
                trend={5.2}
                icon={<BarChartIcon sx={{ fontSize: 16 }} />}
                color={theme.palette.secondary.main}
                delay={0.4}
                tooltip="Taxa de crescimento mensal com tendência positiva"
              />
              <MetricCard
                title="Clientes"
                value={animatedValues.customers}
                suffix=""
                trend={8.7}
                icon={<PieChartIcon sx={{ fontSize: 16 }} />}
                color={theme.palette.accent.main}
                delay={0.6}
                tooltip="Base de clientes ativos com crescimento de 8.7%"
              />
              <MetricCard
                title="Conversão"
                value={animatedValues.conversion}
                suffix="%"
                trend={15.3}
                icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
                color="#FF6B35"
                delay={0.8}
                tooltip="Taxa de conversão otimizada com IA preditiva"
              />
            </Box>

            {/* Charts Area */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 2 }}>
              <ChartPlaceholder
                type="line"
                title="Tendência de Receita"
                color={theme.palette.primary.main}
                delay={1.0}
              />
              <ChartPlaceholder
                type="donut"
                title="Distribuição por Canal"
                color={theme.palette.secondary.main}
                delay={1.2}
              />
            </Box>
          </Paper>
        </Box>

        {/* Computer Base */}
        <Box
          sx={{
            height: 20,
            background: 'linear-gradient(180deg, #f0f0f0 0%, #d0d0d0 100%)',
            borderRadius: '0 0 8px 8px',
            position: 'relative',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 10,
              background: 'linear-gradient(180deg, #d0d0d0 0%, #b0b0b0 100%)',
              borderRadius: '0 0 20px 20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            },
          }}
        />
      </motion.div>
    </Box>
  );
};

const ChartPlaceholder = ({ type, title, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <Paper
      elevation={1}
      sx={{
        p: 2,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        height: 180,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          mb: 2,
        }}
      >
        {title}
      </Typography>
      
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {type === 'line' && (
          <Box sx={{ width: '100%', height: 100, position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 100">
              <motion.path
                d="M 10 80 Q 50 20 100 40 T 200 30 T 290 50"
                stroke={color}
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: delay + 0.5 }}
              />
              <defs>
                <linearGradient id={`gradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 10 80 Q 50 20 100 40 T 200 30 T 290 50 L 290 100 L 10 100 Z"
                fill={`url(#gradient-${delay})`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: delay + 0.7 }}
              />
            </svg>
          </Box>
        )}
        
        {type === 'donut' && (
          <Box sx={{ position: 'relative', width: 80, height: 80 }}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, delay: delay + 0.5 }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `conic-gradient(${color} 0deg 140deg, ${color}60 140deg 260deg, ${color}30 260deg 360deg)`,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'white',
              }}
            />
          </Box>
        )}
      </Box>
    </Paper>
  </motion.div>
);

export default ComputerMockup;
