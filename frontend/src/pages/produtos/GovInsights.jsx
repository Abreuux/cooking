import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const GovInsights = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="GovInsights"
        subtitle="Inteligência de dados para gestão pública eficiente"
        image="/images/products/govinsights-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme dados em políticas públicas efetivas
            </Typography>
            <Typography variant="body1" paragraph>
              O GovInsights é uma plataforma completa de análise de dados
              governamentais que permite aos gestores públicos tomar decisões
              mais assertivas e implementar políticas baseadas em evidências.
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
              src="/images/products/govinsights-dashboard.jpg"
              alt="GovInsights Dashboard"
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
                title: 'Análise Preditiva',
                description: 'Preveja tendências e demandas para melhor planejamento de políticas públicas.'
              },
              {
                title: 'Indicadores em Tempo Real',
                description: 'Monitore KPIs governamentais com dashboards atualizados em tempo real.'
              },
              {
                title: 'Gestão de Recursos',
                description: 'Otimize a alocação de recursos com base em dados e evidências.'
              },
              {
                title: 'Relatórios Estratégicos',
                description: 'Gere relatórios detalhados para suporte à tomada de decisão.'
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

export default GovInsights; 