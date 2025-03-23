import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const SecureGov = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="SecureGov"
        subtitle="Segurança e conformidade para gestão pública"
        image="/images/products/securegov-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Proteja dados e garanta conformidade
            </Typography>
            <Typography variant="body1" paragraph>
              O SecureGov é uma solução completa de segurança e conformidade
              para órgãos públicos, garantindo a proteção de dados sensíveis
              e o cumprimento de regulamentações governamentais.
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
              src="/images/products/securegov-dashboard.jpg"
              alt="SecureGov Dashboard"
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
                title: 'Proteção de Dados',
                description: 'Implemente medidas avançadas de segurança para proteção de dados sensíveis.'
              },
              {
                title: 'Gestão de Conformidade',
                description: 'Mantenha-se em conformidade com regulamentações e normas governamentais.'
              },
              {
                title: 'Monitoramento de Ameaças',
                description: 'Detecte e responda a ameaças de segurança em tempo real.'
              },
              {
                title: 'Auditoria e Relatórios',
                description: 'Gere relatórios detalhados de segurança e conformidade.'
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

export default SecureGov; 