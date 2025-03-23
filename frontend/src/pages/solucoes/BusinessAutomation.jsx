import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SpeedIcon from '@mui/icons-material/Speed';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BusinessAutomation = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 40, color: '#C4D600' }} />,
      title: 'Automação Inteligente',
      description: 'Automatize processos complexos com inteligência artificial e aprendizado de máquina.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#C4D600' }} />,
      title: 'Otimização em Tempo Real',
      description: 'Ajuste e otimize processos automaticamente com base em dados em tempo real.'
    },
    {
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#C4D600' }} />,
      title: 'Workflows Personalizados',
      description: 'Crie fluxos de trabalho adaptados às necessidades específicas do seu negócio.'
    }
  ];

  const benefits = [
    {
      title: 'Eficiência Operacional',
      description: 'Reduza tempo e custos operacionais com processos automatizados.'
    },
    {
      title: 'Qualidade Consistente',
      description: 'Garanta consistência e qualidade em todos os processos automatizados.'
    },
    {
      title: 'Escalabilidade',
      description: 'Expanda suas operações sem aumentar proporcionalmente os custos.'
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Business Automation"
        subtitle="Revolucione seus processos empresariais com automação inteligente"
        image="/images/solutions/automation-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
        backgroundColor="#2B3990"
        accentColor="#C4D600"
      />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2B3990', fontWeight: 'bold' }}>
              Automatize e 
              <Box component="span" sx={{ color: '#C4D600', display: 'block' }}>
                Transforme seu Negócio
              </Box>
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Nossa solução de Business Automation combina tecnologias avançadas de IA
              com automação robusta para transformar seus processos empresariais em
              operações eficientes e escaláveis.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: '#C4D600',
                  color: '#2B3990',
                  '&:hover': {
                    bgcolor: '#a8b700'
                  }
                }}
              >
                Fale com um Especialista
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="/demo"
                sx={{ 
                  borderColor: '#C4D600',
                  color: '#2B3990',
                  '&:hover': {
                    borderColor: '#a8b700',
                    bgcolor: 'rgba(196, 214, 0, 0.1)'
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
              src="/images/solutions/automation-dashboard.jpg"
              alt="Business Automation Dashboard"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: theme.shadows[10]
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'rgba(196, 214, 0, 0.1)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#2B3990', mb: 6 }}>
            Recursos Avançados
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    bgcolor: 'transparent',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2B3990', fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2B3990' }}>
              Benefícios Transformadores
            </Typography>
            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ mb: 3 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#C4D600', fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="h6" sx={{ color: '#2B3990', mb: 1 }}>
                        {benefit.title}
                      </Typography>
                    }
                    secondary={benefit.description}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/solutions/automation-benefits.jpg"
              alt="Automation Benefits"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: theme.shadows[5]
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Integration Section */}
      <Box sx={{ bgcolor: '#2B3990', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Integração Simplificada
              </Typography>
              <Typography variant="body1" paragraph>
                Nossa solução se integra facilmente com seus sistemas existentes,
                permitindo uma transição suave para processos automatizados.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <IntegrationInstructionsIcon sx={{ color: '#C4D600' }} />
                  </ListItemIcon>
                  <ListItemText primary="Conectores prontos para uso com sistemas populares" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon sx={{ color: '#C4D600' }} />
                  </ListItemIcon>
                  <ListItemText primary="Implementação segura e controlada" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/solutions/automation-integration.jpg"
                alt="Integration Diagram"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2B3990' }}>
          Pronto para automatizar seus processos?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
          Descubra como nossa solução de Business Automation pode transformar sua empresa.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button 
            variant="contained"
            size="large"
            href="/contact"
            sx={{ 
              bgcolor: '#C4D600',
              color: '#2B3990',
              '&:hover': {
                bgcolor: '#a8b700'
              }
            }}
          >
            Fale com um Especialista
          </Button>
          <Button 
            variant="outlined"
            size="large"
            href="/demo"
            sx={{ 
              borderColor: '#C4D600',
              color: '#2B3990',
              '&:hover': {
                borderColor: '#a8b700',
                bgcolor: 'rgba(196, 214, 0, 0.1)'
              }
            }}
          >
            Agendar Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessAutomation;