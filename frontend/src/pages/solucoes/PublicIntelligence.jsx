import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, useTheme, alpha } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import StorageIcon from '@mui/icons-material/Storage';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PublicIntelligence = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Análise de Dados Públicos',
      description: 'Extraia insights valiosos de dados governamentais',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Gestão de Informações',
      description: 'Organize e acesse dados públicos de forma eficiente',
      icon: <StorageIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Conformidade Legal',
      description: 'Garanta o cumprimento de regulamentações',
      icon: <GavelIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Participação Cidadã',
      description: 'Promova engajamento e transparência pública',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
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
                Public Intelligence
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(0,0,0,0.7)',
                  mb: 4,
                  maxWidth: 500,
                }}
              >
                Inteligência de dados para uma gestão pública mais eficiente e transparente
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
                src="/images/solutions/public-intelligence-dashboard.jpg"
                alt="Public Intelligence Dashboard"
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
                Por que Public Intelligence?
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: 800 }}>
                O Public Intelligence é uma solução avançada que utiliza tecnologias de ponta em análise 
                de dados e inteligência artificial para auxiliar órgãos públicos na tomada de decisões 
                mais precisas e transparentes. Nossa plataforma permite a gestão eficiente de dados 
                governamentais, garantindo conformidade e promovendo a participação cidadã.
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
            Pronto para transformar a gestão pública?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Entre em contato conosco e descubra como o Public Intelligence pode 
            revolucionar a gestão de dados no setor público.
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

export default PublicIntelligence; 