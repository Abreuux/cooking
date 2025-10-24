import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';

const DashboardMockup = () => {
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
        revenue: 2847000,
        growth: 23.5,
        customers: 15847,
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

  const MetricCard = ({ title, value, suffix = '', trend, icon, color, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${color}20`,
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
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
                  color: trend > 0 ? theme.palette.secondary.main : theme.palette.primary.dark,
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
  );

  const ChartPlaceholder = ({ type, color, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ color, mb: 2 }}>
          {type === 'bar' ? <BarChartIcon sx={{ fontSize: 48 }} /> : <PieChartIcon sx={{ fontSize: 48 }} />}
        </Box>
        
        {/* Animated bars for bar chart */}
        {type === 'bar' && (
          <Box sx={{ display: 'flex', alignItems: 'end', gap: 1, height: 60 }}>
            {[40, 65, 45, 80, 55, 70].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: delay + 0.5 + index * 0.1 }}
                style={{
                  width: '12px',
                  backgroundColor: color,
                  borderRadius: '2px 2px 0 0',
                  opacity: 0.8,
                }}
              />
            ))}
          </Box>
        )}
        
        {/* Animated pie segments */}
        {type === 'pie' && (
          <Box sx={{ position: 'relative', width: 80, height: 80 }}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, delay: delay + 0.5 }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `conic-gradient(${color} 0deg 120deg, ${color}60 120deg 240deg, ${color}30 240deg 360deg)`,
              }}
            />
          </Box>
        )}
      </Paper>
    </motion.div>
  );

  return (
    <Box
      sx={{
        maxWidth: 500,
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Main Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}05, ${theme.palette.secondary.main}05)`,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
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
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Dados com respostas rápidas • Atualizado agora
            </Typography>
          </Box>

          {/* Metrics Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
            <MetricCard
              title="Receita Total"
              value={animatedValues.revenue}
              suffix=""
              trend={12.5}
              icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
              color={theme.palette.primary.main}
              delay={0.2}
            />
            <MetricCard
              title="Crescimento"
              value={animatedValues.growth}
              suffix="%"
              trend={5.2}
              icon={<BarChartIcon sx={{ fontSize: 16 }} />}
              color={theme.palette.secondary.main}
              delay={0.4}
            />
            <MetricCard
              title="Clientes"
              value={animatedValues.customers}
              suffix=""
              trend={8.7}
              icon={<PieChartIcon sx={{ fontSize: 16 }} />}
              color={theme.palette.primary.light}
              delay={0.6}
            />
            <MetricCard
              title="Conversão"
              value={animatedValues.conversion}
              suffix="%"
              trend={15.3}
              icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
              color={theme.palette.primary.light}
              delay={0.8}
            />
          </Box>

          {/* Charts */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <ChartPlaceholder
              type="bar"
              color={theme.palette.primary.main}
              delay={1.0}
            />
            <ChartPlaceholder
              type="pie"
              color={theme.palette.secondary.main}
              delay={1.2}
            />
          </Box>
        </Paper>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{
          position: 'absolute',
          top: -10,
          right: -10,
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: theme.palette.secondary.main,
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 1 },
              '50%': { transform: 'scale(1.2)', opacity: 0.7 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default DashboardMockup;
