import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Chip,
  Stack,
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Governo() {
  const navigate = useNavigate();
  const theme = useTheme();

  const products = [
    {
      id: 'citydatahub',
      title: 'CityDataHub',
      description: 'Plataforma centralizada para análise e visualização de dados municipais em tempo real.',
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      image: '/images/citydatahub.jpg',
      features: ['Dashboards Personalizados', 'Análise em Tempo Real', 'Integração de Dados', 'Relatórios Automatizados'],
      benefits: ['Tomada de decisão baseada em dados', 'Maior eficiência operacional', 'Transparência na gestão'],
      version: 'v2.0',
      path: '/produtos/citydatahub'
    },
    {
      id: 'citypredict',
      title: 'CityPredict',
      description: 'Plataforma de analytics preditivo para previsão de demanda e análise de tendências em serviços públicos.',
      icon: <InsightsIcon sx={{ fontSize: 40 }} />,
      image: '/images/citypredict.jpg',
      features: ['Previsão de Demanda', 'Análise de Tendências', 'Simulação de Cenários', 'Alertas Inteligentes'],
      benefits: ['Otimização de recursos', 'Planejamento estratégico', 'Gestão proativa'],
      version: 'v1.0',
      path: '/produtos/citypredict'
    },
    {
      id: 'govinsights',
      title: 'GovInsights',
      description: 'Sistema avançado de análise preditiva e insights estratégicos para gestão pública.',
      icon: <InsightsIcon sx={{ fontSize: 40 }} />,
      image: '/images/govinsights.jpg',
      features: ['Análise Preditiva', 'Machine Learning', 'Insights Estratégicos', 'Monitoramento de KPIs'],
      benefits: ['Previsão de demandas', 'Otimização de recursos', 'Planejamento estratégico'],
      version: 'v1.5',
      path: '/produtos/govinsights'
    },
    {
      id: 'muniprocess',
      title: 'MuniProcess',
      description: 'Solução completa para automação e otimização de processos administrativos municipais.',
      icon: <AutorenewIcon sx={{ fontSize: 40 }} />,
      image: '/images/muniprocess.jpg',
      features: ['Workflow Automation', 'Gestão Documental', 'Assinatura Digital', 'Controle de Processos'],
      benefits: ['Redução de burocracia', 'Aumento de produtividade', 'Controle e rastreabilidade'],
      version: 'v2.1',
      path: '/governo/muniprocess'
    },
    {
      id: 'cityautomation',
      title: 'CityAutomation',
      description: 'Plataforma de automação inteligente para serviços públicos municipais.',
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      image: '/images/cityautomation.jpg',
      features: ['Automação de Serviços', 'Agendamento Online', 'Gestão de Filas', 'Atendimento Digital'],
      benefits: ['Melhoria no atendimento', 'Redução de custos', 'Satisfação do cidadão'],
      version: 'v1.8',
      path: '/governo/cityautomation'
    },
    {
      id: 'servicecapacity',
      title: 'ServiceCapacity',
      description: 'Sistema de gestão e otimização da capacidade de serviços públicos.',
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      image: '/images/servicecapacity.jpg',
      features: ['Gestão de Capacidade', 'Previsão de Demanda', 'Otimização de Recursos', 'Análise de Performance'],
      benefits: ['Melhor alocação de recursos', 'Redução de filas', 'Eficiência operacional'],
      version: 'v1.2',
      path: '/governo/servicecapacity'
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Soluções para Governo"
        subtitle="Transforme a gestão pública com nossas soluções integradas de análise de dados e automação. Maximize a eficiência e transparência da sua administração."
        image="/images/public.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} key={product.id}>
              <Card 
                sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: 300 },
                    height: { xs: 200, md: 'auto' },
                    objectFit: 'cover',
                  }}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {product.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h4" gutterBottom>
                        {product.title}
                      </Typography>
                      <Chip 
                        label={product.version} 
                        size="small" 
                        color="secondary"
                        sx={{ mr: 1 }}
                      />
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Principais Funcionalidades
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                    {product.features.map((feature, index) => (
                      <Chip 
                        key={index}
                        label={feature}
                        sx={{ 
                          m: 0.5,
                          bgcolor: 'primary.main',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography variant="h6" gutterBottom>
                    Benefícios
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {product.benefits.map((benefit, index) => (
                      <Typography 
                        key={index}
                        variant="body2"
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          '&:before': {
                            content: '""',
                            width: 6,
                            height: 6,
                            bgcolor: 'secondary.main',
                            borderRadius: '50%',
                            mr: 1,
                          },
                        }}
                      >
                        {benefit}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(product.path)}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                      }}
                    >
                      Saiba Mais
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate('/demo')}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                      }}
                    >
                      Agendar Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 8,
            p: 4,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Transforme sua Gestão Pública
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Descubra como nossas soluções podem otimizar sua administração
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
            }}
          >
            Fale com um Especialista
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Governo; 