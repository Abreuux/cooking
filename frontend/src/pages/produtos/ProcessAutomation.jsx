import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';

const ProcessAutomation = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="Process Automation"
        subtitle="Automação inteligente de processos empresariais"
        image="/images/products/processautomation-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme seus processos com automação inteligente
            </Typography>
            <Typography variant="body1" paragraph>
              O Process Automation é uma solução completa para automação de
              processos empresariais, permitindo que sua organização aumente
              a eficiência operacional e reduza custos através da automação
              inteligente de tarefas e workflows.
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
              src="/images/products/processautomation-dashboard.jpg"
              alt="Process Automation Dashboard"
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
                title: 'Automação de Processos',
                description: 'Automatize tarefas repetitivas e processos complexos com facilidade.'
              },
              {
                title: 'Integração de Sistemas',
                description: 'Conecte diferentes sistemas e aplicações em um fluxo automatizado.'
              },
              {
                title: 'Workflows Inteligentes',
                description: 'Crie fluxos de trabalho adaptáveis com regras de negócio personalizadas.'
              },
              {
                title: 'Monitoramento em Tempo Real',
                description: 'Acompanhe o desempenho dos processos com dashboards em tempo real.'
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
                title: 'Maior Eficiência',
                description: 'Reduza o tempo gasto em tarefas manuais e aumente a produtividade.'
              },
              {
                title: 'Redução de Erros',
                description: 'Minimize erros humanos com processos automatizados e padronizados.'
              },
              {
                title: 'Economia de Custos',
                description: 'Otimize recursos e reduza custos operacionais com automação.'
              },
              {
                title: 'Escalabilidade',
                description: 'Expanda suas operações sem aumentar proporcionalmente os custos.'
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

export default ProcessAutomation; 