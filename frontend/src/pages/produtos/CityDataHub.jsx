import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const CityDataHub = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="CityDataHub"
        subtitle="Plataforma centralizada para análise de dados municipais"
        image="/images/products/citydatahub-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme dados em decisões inteligentes
            </Typography>
            <Typography variant="body1" paragraph>
              O CityDataHub é uma plataforma completa que centraliza, analisa e 
              transforma dados municipais em insights acionáveis para uma gestão 
              pública mais eficiente e baseada em evidências.
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
              src="/images/products/citydatahub-dashboard.jpg"
              alt="CityDataHub Dashboard"
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
                title: 'Integração de Dados',
                description: 'Conecte e unifique dados de diferentes fontes e departamentos municipais.'
              },
              {
                title: 'Análise Avançada',
                description: 'Utilize algoritmos de IA para extrair insights valiosos dos dados municipais.'
              },
              {
                title: 'Dashboards Interativos',
                description: 'Visualize dados em tempo real com painéis personalizáveis e intuitivos.'
              },
              {
                title: 'Relatórios Automatizados',
                description: 'Gere relatórios detalhados automaticamente para tomada de decisão.'
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

export default CityDataHub; 