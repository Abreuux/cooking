import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';

const AnalyticsSuite = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Análise Preditiva',
      description: 'Previsões avançadas com machine learning',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Dashboards Interativos',
      description: 'Visualizações dinâmicas e personalizáveis',
      icon: <DashboardIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Análise em Tempo Real',
      description: 'Monitoramento contínuo de métricas',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Relatórios Customizados',
      description: 'Geração flexível de relatórios',
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Analytics Suite"
        subtitle="Conjunto completo de análise de dados empresariais"
        image="/images/solutions/analytics-suite-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Potencialize suas análises de dados
            </Typography>
            <Typography variant="body1" paragraph>
              O Analytics Suite é uma solução completa que combina ferramentas
              avançadas de análise de dados, visualização interativa e geração
              de relatórios. Com recursos de machine learning e processamento
              em tempo real, sua empresa terá insights valiosos para tomar
              decisões mais assertivas.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                href="/contact"
                sx={{ mr: 2 }}
              >
                Fale com um Especialista
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                href="/demo"
              >
                Solicitar Demo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/solutions/analytics-suite-dashboard.jpg"
              alt="Analytics Suite Dashboard"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Recursos Principais
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom color="primary">
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

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Benefícios
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Insights Acionáveis',
                description: 'Transforme dados em ações concretas para seu negócio.'
              },
              {
                title: 'Tomada de Decisão',
                description: 'Decisões mais rápidas e assertivas baseadas em dados.'
              },
              {
                title: 'Produtividade',
                description: 'Automatize a análise e geração de relatórios.'
              },
              {
                title: 'Competitividade',
                description: 'Mantenha-se à frente com análises avançadas.'
              }
            ].map((benefit, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AnalyticsSuite;