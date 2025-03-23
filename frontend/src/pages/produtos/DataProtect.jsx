import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const DataProtect = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="DataProtect"
        subtitle="Proteção avançada de dados empresariais"
        image="/images/products/dataprotect-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Proteja seus dados com inteligência
            </Typography>
            <Typography variant="body1" paragraph>
              O DataProtect oferece uma solução completa para proteção de dados
              empresariais, garantindo segurança, conformidade e governança
              através de tecnologias avançadas de criptografia e monitoramento.
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
              src="/images/products/dataprotect-dashboard.jpg"
              alt="DataProtect Dashboard"
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
                title: 'Criptografia Avançada',
                description: 'Proteja dados sensíveis com criptografia de última geração.'
              },
              {
                title: 'Monitoramento Contínuo',
                description: 'Detecte e previna vazamentos de dados em tempo real.'
              },
              {
                title: 'Gestão de Acessos',
                description: 'Controle granular de permissões e acessos aos dados.'
              },
              {
                title: 'Conformidade Automatizada',
                description: 'Mantenha-se em conformidade com regulamentações de proteção de dados.'
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

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Benefícios
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Proteção Total',
                description: 'Segurança abrangente para todos os seus dados empresariais.'
              },
              {
                title: 'Conformidade Garantida',
                description: 'Atenda a requisitos regulatórios de proteção de dados.'
              },
              {
                title: 'Produtividade Segura',
                description: 'Mantenha a eficiência sem comprometer a segurança.'
              },
              {
                title: 'Riscos Minimizados',
                description: 'Reduza riscos de vazamentos e violações de dados.'
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

export default DataProtect; 