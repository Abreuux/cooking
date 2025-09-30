import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const DiagnosticBanner = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const diagnosticTexts = [
    "🎯 Diagnóstico Completo GRATUITO - Valor: R$ 5.000 → GRATUITO",
    "📊 Análise de 15 dias dos seus dados atuais",
    "🚀 Transforme seus dados em vantagem competitiva hoje",
    "⚡ Vagas limitadas para diagnóstico gratuito em setembro",
    "💰 Projeção de ROI e roadmap personalizado incluídos"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % diagnosticTexts.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, diagnosticTexts.length]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '64px',
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: theme.palette.secondary.main,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1300,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={() => window.open('https://form.typeform.com/to/a0d9de95', '_blank', 'noopener,noreferrer')}
    >
      {/* Animated background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, 
            ${theme.palette.secondary.main} 0%, 
            ${theme.palette.secondary.light} 50%, 
            ${theme.palette.secondary.main} 100%)`,
          backgroundSize: '200% 100%',
          animation: isHovered ? 'none' : 'shimmer 3s ease-in-out infinite',
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
        }}
      />

      {/* Text content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <motion.div
          key={currentTextIndex}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' }
          }}
          exit={{ 
            x: '-100%', 
            opacity: 0,
            transition: { duration: 0.3, ease: 'easeIn' }
          }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {diagnosticTexts[currentTextIndex].includes('R$ 5.000') ? (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    textShadow: '0 1px 3px rgba(255,255,255,0.3)',
                    letterSpacing: '0.5px',
                  }}
                >
                  🎯 Diagnóstico Completo GRATUITO - Valor:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ff4444',
                    fontWeight: 700,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    textDecoration: 'line-through',
                    textShadow: '0 1px 3px rgba(255,255,255,0.3)',
                    letterSpacing: '0.5px',
                  }}
                >
                  R$ 5.000
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    textShadow: '0 1px 3px rgba(255,255,255,0.3)',
                    letterSpacing: '0.5px',
                  }}
                >
                  → GRATUITO
                </Typography>
              </>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  textShadow: '0 1px 3px rgba(255,255,255,0.3)',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {diagnosticTexts[currentTextIndex]}
              </Typography>
            )}
          </Box>
        </motion.div>
      </Box>

      {/* Pause indicator */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              animation: 'pulse 1.5s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                '50%': { opacity: 1, transform: 'scale(1.2)' },
              },
            }}
          />
        </motion.div>
      )}

      {/* Progress indicator */}
      {!isHovered && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DiagnosticBanner;
