import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, useTheme, alpha } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DataIcon from '@mui/icons-material/DataUsage';
import SecurityIcon from '@mui/icons-material/Security';
import SustainableIcon from '@mui/icons-material/Nature';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SmartCity = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Gestão Urbana Inteligente',
      description: 'Otimização de recursos e serviços urbanos com IA',
      icon: <LocationCityIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Análise de Dados Urbanos',
      description: 'Insights em tempo real para tomada de decisão',
      icon: <DataIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Segurança Integrada',
      description: 'Monitoramento e resposta a incidentes em tempo real',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Sustentabilidade',
      description: 'Soluções para cidades mais sustentáveis e eficientes',
      icon: <SustainableIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#C4D600',
          color: 'text.primary',
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  color: 'black',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Smart City Suite
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(0,0,0,0.7)',
                  mb: 4,
                  maxWidth: 500,
                }}
              >
                Transforme sua cidade com tecnologia inteligente e integrada
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.8)',
                  },
                }}
              >
                Agende uma Demo
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/solutions/smart-city-dashboard.jpg"
                alt="Smart City Dashboard"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: 6,
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 8,
          mt: -8,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: alpha(theme.palette.primary.main, 0.1),
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Por que Smart City?
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: 800 }}>
                O Smart City Suite é uma solução completa que combina tecnologias avançadas de IoT, 
                análise de dados e inteligência artificial para transformar a gestão urbana. 
                Nossa plataforma permite que gestores públicos tomem decisões mais assertivas, 
                otimizem recursos e melhorem a qualidade de vida dos cidadãos.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Box sx={{ mt: 8 }}>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 4,
            }}
          >
            Recursos Principais
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      '& .feature-icon': {
                        color: theme.palette.primary.main,
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box 
                    className="feature-icon"
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 8,
            p: 6,
            borderRadius: 4,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Pronto para transformar sua cidade?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Entre em contato conosco e descubra como o Smart City Suite pode 
            revolucionar a gestão da sua cidade.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Agende uma Demonstração
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SmartCity; 