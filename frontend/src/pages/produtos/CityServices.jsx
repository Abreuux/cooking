import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const CityServices = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="City Services"
        subtitle="Gestão inteligente de serviços municipais"
        image="/images/products/cityservices-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Modernize a prestação de serviços públicos
            </Typography>
            <Typography variant="body1" paragraph>
              O City Services é uma plataforma integrada para gestão e
              otimização de serviços municipais, permitindo maior eficiência
              na prestação de serviços e melhor experiência para o cidadão.
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
              src="/images/products/cityservices-dashboard.jpg"
              alt="City Services Dashboard"
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
                title: 'Gestão de Demandas',
                description: 'Gerencie solicitações e atendimentos de forma eficiente e integrada.'
              },
              {
                title: 'Automação de Processos',
                description: 'Automatize fluxos de trabalho para agilizar a prestação de serviços.'
              },
              {
                title: 'Portal do Cidadão',
                description: 'Ofereça uma interface digital moderna para acesso aos serviços.'
              },
              {
                title: 'Monitoramento em Tempo Real',
                description: 'Acompanhe indicadores de qualidade e eficiência dos serviços.'
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

export default CityServices; 