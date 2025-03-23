import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpeedIcon from '@mui/icons-material/Speed';

function Empresas() {
  const navigate = useNavigate();
  const theme = useTheme();

  const solutions = [
    {
      icon: <AutoGraphIcon sx={{ fontSize: 48 }} />,
      title: 'Análise Preditiva',
      description: 'Antecipe tendências e tome decisões baseadas em dados com nossa tecnologia de análise preditiva.',
      features: ['Machine Learning', 'Forecasting', 'Análise de Tendências'],
    },
    {
      icon: <DataUsageIcon sx={{ fontSize: 48 }} />,
      title: 'Business Intelligence',
      description: 'Transforme dados em insights acionáveis com nossas soluções de BI personalizadas.',
      features: ['Dashboards Interativos', 'KPIs em Tempo Real', 'Relatórios Automatizados'],
    },
    {
      icon: <AccountTreeIcon sx={{ fontSize: 48 }} />,
      title: 'Automação de Processos',
      description: 'Otimize suas operações com automação inteligente e workflows eficientes.',
      features: ['RPA', 'Workflow Automation', 'Integração de Sistemas'],
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 48 }} />,
      title: 'Performance Management',
      description: 'Monitore e melhore o desempenho de sua empresa com métricas precisas.',
      features: ['Balanced Scorecard', 'OKRs', 'Performance Analytics'],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(43, 57, 144, 0.9) 100%)`,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 2,
                }}
              >
                Soluções Empresariais Inteligentes
              </Typography>
              <Typography 
                variant="h5"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  maxWidth: '800px',
                }}
              >
                Transforme sua empresa com nossas soluções de análise de dados, automação e gestão inteligente.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/demo')}
                sx={{ 
                  mr: 2,
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Agende uma Demonstração
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Nossas Soluções
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Tecnologia de ponta para impulsionar seus resultados
        </Typography>
        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {solution.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {solution.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    paragraph
                  >
                    {solution.description}
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {solution.features.map((feature, idx) => (
                      <Typography 
                        key={idx}
                        variant="body2"
                        sx={{ 
                          mb: 1,
                          color: 'text.primary',
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '""',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: theme.palette.secondary.main,
                            mr: 1.5,
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Pronto para transformar sua empresa?
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Agende uma demonstração e descubra como podemos ajudar sua empresa a crescer.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ 
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Entre em Contato
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Empresas; 