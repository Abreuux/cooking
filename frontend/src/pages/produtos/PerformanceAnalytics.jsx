import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const PerformanceAnalytics = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="Performance Analytics"
        subtitle="Análise avançada de desempenho para otimização de resultados"
        image="/images/products/performance-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Maximize o desempenho organizacional
            </Typography>
            <Typography variant="body1" paragraph>
              O Performance Analytics oferece uma solução completa para monitoramento
              e análise de desempenho, permitindo que sua organização identifique
              oportunidades de melhoria e tome decisões baseadas em dados.
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
              src="/images/products/performance-dashboard.jpg"
              alt="Performance Analytics Dashboard"
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
            Principais Funcionalidades
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'KPIs em Tempo Real',
                description: 'Monitore indicadores-chave de desempenho em tempo real com dashboards personalizáveis.'
              },
              {
                title: 'Análise Comparativa',
                description: 'Compare desempenho entre diferentes períodos, departamentos e metas.'
              },
              {
                title: 'Alertas Inteligentes',
                description: 'Receba notificações automáticas sobre variações significativas nos indicadores.'
              },
              {
                title: 'Relatórios Executivos',
                description: 'Gere relatórios detalhados com insights e recomendações para melhoria.'
              }
            ].map((feature, index) => (
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
      </Container>
    </Box>
  );
};

export default PerformanceAnalytics; 