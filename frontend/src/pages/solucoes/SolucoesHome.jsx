import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Divider,
  useTheme,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

const SolucoesHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const enterpriseSolutions = [
    {
      name: 'Analytics Suite',
      description: 'Conjunto completo de análise de dados empresariais',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/analytics-suite',
      features: [
        'Análise preditiva avançada',
        'Dashboards interativos',
        'Integração com múltiplas fontes',
        'Relatórios customizados'
      ]
    },
    {
      name: 'Business Automation',
      description: 'Automação inteligente de processos empresariais',
      icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/business-automation',
      features: [
        'Automação de workflows',
        'Integração de sistemas',
        'Otimização de processos',
        'Monitoramento em tempo real'
      ]
    },
    {
      name: 'Data Intelligence',
      description: 'Inteligência de dados para tomada de decisão',
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/data-intelligence',
      features: [
        'Machine Learning',
        'Big Data Analytics',
        'Insights em tempo real',
        'Governança de dados'
      ]
    }
  ];

  const governmentSolutions = [
    {
      name: 'Smart City Suite',
      description: 'Gestão integrada para cidades inteligentes',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/smart-city',
      features: [
        'Monitoramento urbano',
        'Gestão de recursos',
        'Integração de serviços',
        'Análise de indicadores'
      ]
    },
    {
      name: 'Public Intelligence',
      description: 'Inteligência de dados para gestão pública',
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/public-intelligence',
      features: [
        'Análise de políticas públicas',
        'Previsão de demandas',
        'Otimização de recursos',
        'Dashboards governamentais'
      ]
    },
    {
      name: 'Gov Security',
      description: 'Segurança e conformidade governamental',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      path: '/solucoes/gov-security',
      features: [
        'Proteção de dados',
        'Conformidade regulatória',
        'Monitoramento de ameaças',
        'Gestão de identidades'
      ]
    }
  ];

  const SolutionCard = ({ solution }) => (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-8px)',
        }
      }}
    >
      <CardContent>
        <Box sx={{ color: 'primary.main', mb: 2 }}>
          {solution.icon}
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          {solution.name}
        </Typography>
        <Typography color="text.secondary" paragraph>
          {solution.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" gutterBottom>
          Principais recursos:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          {solution.features.map((feature, index) => (
            <Typography component="li" key={index} sx={{ mb: 0.5 }}>
              {feature}
            </Typography>
          ))}
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth
            onClick={() => navigate(solution.path)}
          >
            Saiba mais
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <PageBanner
        title="Nossas Soluções"
        subtitle="Transformação digital para sua organização"
        image="/images/solutions/solutions-banner.jpg"
      />

      {/* Enterprise Solutions */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Soluções Empresariais
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Transforme sua empresa com nossas soluções integradas de análise de dados e automação
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {enterpriseSolutions.map((solution) => (
            <Grid item xs={12} md={4} key={solution.name}>
              <SolutionCard solution={solution} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Government Solutions */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Soluções Governamentais
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Modernize a gestão pública com soluções inteligentes e integradas
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {governmentSolutions.map((solution) => (
              <Grid item xs={12} md={4} key={solution.name}>
                <SolutionCard solution={solution} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Integration Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom color="primary">
              Integração Completa
            </Typography>
            <Typography paragraph>
              Nossas soluções são projetadas para trabalhar em conjunto, 
              proporcionando uma experiência integrada e maximizando os 
              resultados para sua organização.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default', mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Benefícios da Integração
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li">Visão unificada dos dados</Typography>
                  <Typography component="li">Processos otimizados</Typography>
                  <Typography component="li">Maior produtividade</Typography>
                  <Typography component="li">Tomada de decisão mais ágil</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/solutions/integration.jpg"
              alt="Integração de Soluções"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Descubra o poder da transformação digital
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
                Agende uma demonstração e veja nossas soluções em ação
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/demo')}
                sx={{ 
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Agende uma Demo
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SolucoesHome; 