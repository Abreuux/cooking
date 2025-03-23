import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, useTheme, alpha } from '@mui/material';
import PageBanner from '../../components/PageBanner';
import AutomateIcon from '@mui/icons-material/AutoFixHigh';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TeamworkIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const SmartWorkflow = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Workflows Personalizáveis',
      description: 'Crie fluxos de trabalho adaptados às necessidades específicas do seu negócio.',
      icon: <AutomateIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Automação Inteligente',
      description: 'Automatize tarefas e decisões com base em regras de negócio e IA.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Colaboração em Tempo Real',
      description: 'Facilite a colaboração entre equipes com ferramentas integradas.',
      icon: <TeamworkIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Analytics Avançado',
      description: 'Analise e otimize o desempenho dos fluxos de trabalho com métricas detalhadas.',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />
    }
  ];

  const benefits = [
    {
      title: 'Maior Produtividade',
      description: 'Aumente a eficiência operacional com fluxos de trabalho otimizados.'
    },
    {
      title: 'Redução de Erros',
      description: 'Minimize erros humanos com processos automatizados e padronizados.'
    },
    {
      title: 'Melhor Colaboração',
      description: 'Promova a colaboração efetiva entre equipes e departamentos.'
    },
    {
      title: 'Insights Acionáveis',
      description: 'Tome decisões baseadas em dados com analytics avançado.'
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Smart Workflow"
        subtitle="Fluxos de trabalho inteligentes para maior produtividade"
        image="/images/products/workflow-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme seus processos com workflows inteligentes
            </Typography>
            <Typography variant="body1" paragraph>
              O Smart Workflow é uma solução avançada que revoluciona a forma como sua
              organização gerencia processos. Combine automação inteligente, colaboração
              em tempo real e analytics avançado para criar fluxos de trabalho eficientes
              e adaptáveis às suas necessidades.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                href="/contact"
                sx={{ 
                  mr: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                Fale com um Especialista
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                href="/demo"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                Solicitar Demo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/products/workflow-dashboard.jpg"
              alt="Smart Workflow Dashboard"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: theme.shadows[8],
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)',
                }
              }}
            />
          </Grid>
        </Grid>

        {/* Features */}
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Principais Funcionalidades
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      '& .icon': {
                        transform: 'scale(1.1)',
                        color: theme.palette.secondary.main,
                      }
                    }
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                      transition: 'all 0.3s ease'
                    }}
                  >
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

        {/* Benefits */}
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
            Benefícios
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`
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

        {/* Call to Action */}
        <Box 
          sx={{ 
            mt: 12, 
            p: 6, 
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom color="primary">
                Pronto para otimizar seus fluxos de trabalho?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                Agende uma demonstração e descubra como o Smart Workflow pode transformar sua operação
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/demo"
                sx={{ 
                  px: 6,
                  py: 2,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                Agendar Demo
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SmartWorkflow; 