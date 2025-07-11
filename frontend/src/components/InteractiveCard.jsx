import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  useTheme,
  Fade,
  Zoom,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const InteractiveCard = ({
  title,
  description,
  icon,
  features = [],
  tags = [],
  onClick,
  href,
  elevation = 2,
  hoverElevation = 8,
  accentColor = '#C4D600',
  primaryColor = '#2B3990',
  variant = 'standard', // 'standard', 'feature', 'benefit'
  animationDelay = 0,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: animationDelay,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const getCardStyles = () => {
    const baseStyles = {
      height: '100%',
      cursor: onClick || href ? 'pointer' : 'default',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: 3,
      border: '1px solid transparent',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${accentColor}, ${primaryColor})`,
        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      },
    };

    if (isHovered) {
      return {
        ...baseStyles,
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[hoverElevation],
        borderColor: accentColor,
      };
    }

    if (isPressed) {
      return {
        ...baseStyles,
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[elevation + 2],
      };
    }

    return {
      ...baseStyles,
      boxShadow: theme.shadows[elevation],
    };
  };

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: `${accentColor}20`,
            mb: 2,
            transition: 'all 0.3s ease',
            ...(isHovered && {
              bgcolor: `${accentColor}30`,
              transform: 'scale(1.05)',
            }),
          }}
        >
          {React.cloneElement(icon, {
            sx: {
              fontSize: 32,
              color: primaryColor,
              transition: 'color 0.3s ease',
              ...(isHovered && { color: accentColor }),
            },
          })}
        </Box>
      </motion.div>
    );
  };

  const renderFeatures = () => {
    if (!features.length) return null;

    return (
      <Box sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: animationDelay + 0.1 * index }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 0.5,
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '"•"',
                  color: accentColor,
                  fontWeight: 'bold',
                  marginRight: 1,
                },
              }}
            >
              {feature}
            </Typography>
          </motion.div>
        ))}
      </Box>
    );
  };

  const renderTags = () => {
    if (!tags.length) return null;

    return (
      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {tags.map((tag, index) => (
          <Zoom
            key={index}
            in={inView}
            timeout={300}
            style={{ transitionDelay: `${animationDelay + 100 * index}ms` }}
          >
            <Chip
              label={tag}
              size="small"
              sx={{
                bgcolor: `${accentColor}20`,
                color: primaryColor,
                fontWeight: 500,
                '&:hover': {
                  bgcolor: `${accentColor}30`,
                },
              }}
            />
          </Zoom>
        ))}
      </Box>
    );
  };

  const renderActionButton = () => {
    if (!onClick && !href) return null;

    return (
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <IconButton
          size="small"
          sx={{
            bgcolor: accentColor,
            color: primaryColor,
            '&:hover': {
              bgcolor: accentColor,
              transform: 'scale(1.1)',
            },
          }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <Card
        elevation={0}
        sx={getCardStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={handleClick}
      >
        {renderActionButton()}
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {renderIcon()}
          
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: primaryColor,
              transition: 'color 0.3s ease',
              ...(isHovered && { color: accentColor }),
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flexGrow: 1,
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {description}
          </Typography>
          
          {renderFeatures()}
          {renderTags()}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InteractiveCard;
