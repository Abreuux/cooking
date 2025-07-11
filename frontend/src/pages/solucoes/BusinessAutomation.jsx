import React from 'react';
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InteractiveBanner from '../../components/InteractiveBanner';
import InteractiveCard from '../../components/InteractiveCard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SpeedIcon from '@mui/icons-material/Speed';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SettingsIcon from '@mui/icons-material/Settings';

const BusinessAutomation = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <AutoFixHighIcon />,
      title: 'Automação Inteligente',
      description: 'Automatize processos complexos com inteligência artificial e aprendizado de máquina para máxima eficiência.',
      features: [
        'IA integrada',
        'Aprendizado contínuo',
        'Decisões automáticas',
        'Otimização dinâmica'
      ],
      tags: ['IA', 'Automação', 'Inteligente']
    },
    {
      icon: <SpeedIcon />,
      title: 'Otimização em Tempo Real',
      description: 'Ajuste e otimize processos automaticamente com base em dados em tempo real e feedback contínuo.',
      features: [
        'Monitoramento contínuo',
        'Ajustes automáticos',
        'Performance tracking',
        'Alertas inteligentes'
      ],
      tags: ['Tempo Real', 'Otimização', 'Performance']
    },
    {
      icon: <PrecisionManufacturingIcon />,
      title: 'Workflows Personalizados',
      description: 'Crie fluxos de trabalho adaptados às necessidades específicas do seu negócio com total flexibilidade.',
      features: [
        'Designer visual',
        'Templates prontos',
        'Integração fácil',
        'Escalabilidade'
      ],
      tags: ['Workflow', 'Personalização', 'Flexibilidade']
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
      <InteractiveBanner
        image="/images/especialista-em-investigacao-cibernetica-trabalhar-numa-sala-de-hacking-governo.jpg"
        title="Business Automation"
        subtitle="Revolucione seus processos com automação inteligente"
        ctaText="Automatize Agora"
        ctaLink="/demo"
        imagePosition="background"
        overlayOpacity={0.3}
        textColor="white"
        height="80vh"
        minHeight="600px"
      />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#2B3990', fontWeight: 'bold' }}>
              Automação
              <Box component="span" sx={{ color: '#C4D600', display: 'block' }}>
                Inteligente
              </Box>
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Transforme processos manuais repetitivos em fluxos automatizados inteligentes que operam continuamente,
              liberando sua equipe para focar em atividades estratégicas de alto valor. Nossa plataforma de automação
              empresarial integra inteligência artificial avançada com robótica de processos, criando soluções
              personalizadas que se adaptam às necessidades específicas do seu negócio e escalam conforme seu crescimento.
            </Typography>

            {/* Automação Features */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SmartToyIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  IA Integrada
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SettingsIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  Configuração Flexível
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ color: '#666', fontStyle: 'italic', textAlign: 'center', py: 2 }}>
                "Automatize hoje, escale amanhã"
              </Typography>
            </Box>
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
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: '#2B3990', fontWeight: 'bold', mb: 6 }}>
            Recursos Avançados
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <InteractiveCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  features={feature.features}
                  tags={feature.tags}
                  animationDelay={index * 0.1}
                  href="/demo"
                />
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