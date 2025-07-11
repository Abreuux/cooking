import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InteractiveBanner from '../../components/InteractiveBanner';
import InteractiveCard from '../../components/InteractiveCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AnalyticsSuite = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Análise Preditiva',
      description: 'Previsões avançadas com machine learning para antecipar tendências e comportamentos do mercado',
      icon: <AnalyticsIcon />,
      features: [
        'Modelos de ML personalizados',
        'Previsões em tempo real',
        'Análise de tendências',
        'Detecção de anomalias'
      ],
      tags: ['IA', 'Machine Learning', 'Previsão']
    },
    {
      title: 'Dashboards Interativos',
      description: 'Visualizações dinâmicas e personalizáveis que transformam dados complexos em insights claros',
      icon: <DashboardIcon />,
      features: [
        'Interfaces focadas em UX/UI',
        'Visualizações customizáveis',
        'Filtros dinâmicos',
        'Segurança avançada'
      ],
      tags: ['Visualização', 'Interativo', 'Segurança']
    },
    {
      title: 'Análises Atualizadas',
      description: 'Monitoramento contínuo de métricas críticas com alertas inteligentes e automação',
      icon: <TimelineIcon />,
      features: [
        'Alertas inteligentes',
        'Monitoramento 24/7',
        'Respostas rápidas'
      ],
      tags: ['Atualização', 'Monitoramento', 'Alertas']
    },
    {
      title: 'Relatórios Customizados',
      description: 'Geração flexível de relatórios automatizados com distribuição inteligente',
      icon: <AssessmentIcon />,
      features: [
        'Templates personalizados',
        'Agendamento automático',
        'Múltiplos formatos',
        'Distribuição inteligente'
      ],
      tags: ['Relatórios', 'Automação', 'Personalização']
    }
  ];

  return (
    <Box>
      <InteractiveBanner
        image="/images/datapp.jpg"
        title="Analytics Suite"
        subtitle="Transforme dados em decisões rápidas e estratégicas"
        ctaText="Acelere seus Dados"
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
              Dados e
              <Box component="span" sx={{ color: '#C4D600', display: 'block' }}>
                Mobilidade
              </Box>
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Em um mundo onde cada segundo conta, quanto tempo suas ações podem esperar pelos dados?
              Nossa suite analítica revoluciona a forma como empresas processam, interpretam e agem sobre informações críticas.
              Combinando engenharia com interfaces intuitivas, transformamos complexidade
              em clareza, oferecendo insights acionáveis que aceleram a tomada de decisão estratégica e operacional em todos
              os níveis organizacionais.
            </Typography>

            {/* Dados em Movimento Features */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SpeedIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  Análises Atualizadas
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TrendingUpIcon sx={{ color: '#C4D600', mr: 2, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B3990' }}>
                  Decisões Rápidas e Conscientes
                </Typography>
              </Box>
              <Typography variant="h7" sx={{ color: '#666', fontStyle: 'italic', textAlign: 'left', py: 2 }}>
                "A velocidade dos dados determina a velocidade do negócio"
              </Typography>
            </Box>

            {/* Stats Section */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C4D600', fontWeight: 'bold' }}>
                    95%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Precisão
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C4D600', fontWeight: 'bold' }}>
                    &lt;1s
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Resposta
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C4D600', fontWeight: 'bold' }}>
                    24/7
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Monitoramento
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
              src="/images/blue-chip-stocks-visa-inc-market-data-picjumbo-com.jpg"
              alt="Analytics Dashboard"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: theme.shadows[10],
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: '#2B3990', fontWeight: 'bold', mb: 6 }}>
            Recursos Principais
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
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
        </Box>

        {/* Statistics Section */}
        <Box sx={{ bgcolor: '#2B3990', color: 'white', py: 8, mt: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
              Resultados Comprovados
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: '#C4D600', fontWeight: 'bold', mb: 1 }}>
                    300%
                  </Typography>
                  <Typography variant="h6">
                    Aumento na velocidade de análise
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: '#C4D600', fontWeight: 'bold', mb: 1 }}>
                    85%
                  </Typography>
                  <Typography variant="h6">
                    Redução no tempo de relatórios
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: '#C4D600', fontWeight: 'bold', mb: 1 }}>
                    99.9%
                  </Typography>
                  <Typography variant="h6">
                    Disponibilidade do sistema
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: '#C4D600', fontWeight: 'bold', mb: 1 }}>
                    50+
                  </Typography>
                  <Typography variant="h6">
                    Integrações disponíveis
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Use Cases Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: '#2B3990', fontWeight: 'bold', mb: 6 }}>
            Casos de Uso
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Análise de Vendas',
                description: 'Identifique padrões de vendas, preveja demanda e otimize estratégias comerciais com análises preditivas avançadas.',
                tags: ['Vendas', 'Previsão', 'ROI']
              },
              {
                title: 'Monitoramento Operacional',
                description: 'Acompanhe KPIs em tempo real, detecte anomalias e automatize respostas para manter a eficiência operacional.',
                tags: ['Operações', 'KPIs', 'Automação']
              },
              {
                title: 'Análise de Clientes',
                description: 'Compreenda comportamentos, segmente audiências e personalize experiências baseadas em dados comportamentais.',
                tags: ['CRM', 'Segmentação', 'Personalização']
              },
              {
                title: 'Inteligência Financeira',
                description: 'Analise fluxos de caixa, identifique riscos financeiros e otimize investimentos com dashboards executivos.',
                tags: ['Finanças', 'Risco', 'Investimentos']
              }
            ].map((useCase, index) => (
              <Grid item xs={12} md={6} key={useCase.title}>
                <InteractiveCard
                  title={useCase.title}
                  description={useCase.description}
                  tags={useCase.tags}
                  animationDelay={index * 0.1}
                  variant="benefit"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AnalyticsSuite;