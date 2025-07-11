import React from 'react';
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InteractiveBanner from '../../components/InteractiveBanner';
import InteractiveCard from '../../components/InteractiveCard';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';

const DataIntelligence = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <DataUsageIcon />,
      title: 'Análise Preditiva',
      description: 'Antecipe tendências e comportamentos com modelos preditivos avançados baseados em machine learning.',
      features: [
        'Modelos preditivos',
        'Análise de tendências',
        'Forecasting avançado',
        'Detecção de padrões'
      ],
      tags: ['Preditiva', 'ML', 'Tendências']
    },
    {
      icon: <InsightsIcon />,
      title: 'Insights em Tempo Real',
      description: 'Obtenha insights instantâneos para tomada de decisão rápida e precisa com processamento em tempo real.',
      features: [
        'Processamento real-time',
        'Dashboards dinâmicos',
        'Alertas inteligentes',
        'Análise instantânea'
      ],
      tags: ['Tempo Real', 'Insights', 'Dashboards']
    },
    {
      icon: <StorageIcon />,
      title: 'Gestão de Dados',
      description: 'Centralize e organize seus dados de forma eficiente e segura com governança avançada.',
      features: [
        'Data Lake integrado',
        'Governança de dados',
        'Qualidade garantida',
        'Segurança avançada'
      ],
      tags: ['Gestão', 'Governança', 'Segurança']
    }
  ];

  const benefits = [
    {
      title: 'Decisões Baseadas em Dados',
      description: 'Tome decisões estratégicas fundamentadas em análises precisas e confiáveis.'
    },
    {
      title: 'Vantagem Competitiva',
      description: 'Identifique oportunidades de mercado antes da concorrência.'
    },
    {
      title: 'ROI Mensurável',
      description: 'Acompanhe e meça o retorno sobre investimento de suas iniciativas.'
    }
  ];

  return (
    <Box>
      <InteractiveBanner
        image="/images/pessoal-profissional-de-negocios-gerencia-dados-financeiros-para-resolver-tarefas-de-desenvolvimento.jpg"
        title="Data Intelligence"
        subtitle="Transforme dados em estratégias vencedoras"
        ctaText="Descubra Insights"
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
              Inteligência
              <Box component="span" sx={{ color: '#C4D600', display: 'block' }}>
                Corporativa
              </Box>
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Desbloqueie o verdadeiro potencial dos seus dados corporativos através de uma plataforma integrada
              de inteligência empresarial que combina análise avançada, machine learning e visualização intuitiva.
              Nossa solução transforma volumes massivos de informações dispersas em insights estratégicos precisos,
              permitindo que líderes empresariais tomem decisões fundamentadas que impulsionam crescimento sustentável
              e vantagem competitiva no mercado.
            </Typography>

            {/* Inteligência Features */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PsychologyIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  IA Avançada
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <BarChartIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  Análise Preditiva
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ color: '#666', fontStyle: 'italic', textAlign: 'center', py: 2 }}>
                "Dados inteligentes, decisões vencedoras"
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
              src="/images/solutions/data-intelligence-dashboard.jpg"
              alt="Data Intelligence Dashboard"
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
            Recursos Inteligentes
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
              Benefícios Estratégicos
            </Typography>
            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ mb: 3 }}>
                  <ListItemIcon>
                    <TrendingUpIcon sx={{ color: '#C4D600', fontSize: 30 }} />
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
              src="/images/solutions/data-intelligence-benefits.jpg"
              alt="Data Intelligence Benefits"
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
                Integração Universal
              </Typography>
              <Typography variant="body1" paragraph>
                Nossa plataforma se integra com suas fontes de dados existentes,
                proporcionando uma visão unificada e insights abrangentes.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <IntegrationInstructionsIcon sx={{ color: '#C4D600' }} />
                  </ListItemIcon>
                  <ListItemText primary="Conectores para múltiplas fontes de dados" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon sx={{ color: '#C4D600' }} />
                  </ListItemIcon>
                  <ListItemText primary="Segurança e governança de dados" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/solutions/data-intelligence-integration.jpg"
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
          Pronto para transformar seus dados em resultados?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
          Descubra como nossa solução de Data Intelligence pode impulsionar seu negócio.
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

export default DataIntelligence; 