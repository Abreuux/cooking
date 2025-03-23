import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const DataInsights = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="DataInsights"
        subtitle="Análise avançada de dados para decisões estratégicas"
        image="/images/products/datainsights-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme dados em insights acionáveis
            </Typography>
            <Typography variant="body1" paragraph>
              O DataInsights oferece uma plataforma completa de análise de dados 
              que permite extrair insights valiosos para tomada de decisões 
              estratégicas em sua organização.
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
              src="/images/products/datainsights-dashboard.jpg"
              alt="DataInsights Dashboard"
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
                description: 'Utilize modelos avançados de machine learning para prever tendências.'
              },
              {
                title: 'Visualização Interativa',
                description: 'Dashboards personalizáveis e interativos para análise de dados.'
              },
              {
                title: 'Integração de Dados',
                description: 'Conecte múltiplas fontes de dados em uma única plataforma.'
              },
              {
                title: 'Relatórios Automatizados',
                description: 'Geração automática de relatórios com insights relevantes.'
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

export default DataInsights; 