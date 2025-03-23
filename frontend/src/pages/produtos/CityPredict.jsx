import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const CityPredict = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="CityPredict"
        subtitle="Plataforma de analytics preditivo para gestão pública inteligente"
        image="/images/products/citypredict-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Antecipe demandas e otimize recursos
            </Typography>
            <Typography variant="body1" paragraph>
              O CityPredict utiliza algoritmos avançados de machine learning para 
              prever demandas por serviços públicos e analisar tendências, 
              permitindo uma gestão mais eficiente e proativa dos recursos municipais.
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
              src="/images/products/citypredict-dashboard.jpg"
              alt="CityPredict Dashboard"
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
                title: 'Previsão de Demanda',
                description: 'Antecipe a demanda por serviços públicos com modelos preditivos avançados.'
              },
              {
                title: 'Análise de Tendências',
                description: 'Identifique padrões e tendências para planejamento estratégico.'
              },
              {
                title: 'Simulação de Cenários',
                description: 'Simule diferentes cenários para melhor tomada de decisão.'
              },
              {
                title: 'Alertas Inteligentes',
                description: 'Receba alertas proativos sobre mudanças significativas nas tendências.'
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

export default CityPredict; 