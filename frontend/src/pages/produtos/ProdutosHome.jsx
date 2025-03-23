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
  useTheme,
  Paper,
  alpha,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import WorkflowIcon from '@mui/icons-material/AccountTree';
import GovIcon from '@mui/icons-material/AccountBalance';

const ProdutosHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const products = {
    analise: [
      {
        name: 'DataInsights',
        description: 'Análise avançada de dados empresariais',
        path: '/produtos/datainsights',
        icon: <AnalyticsIcon />,
        size: 'half'
      },
      {
        name: 'CityDataHub',
        description: 'Plataforma integrada de dados urbanos',
        path: '/produtos/citydatahub',
        icon: <DataUsageIcon />,
        size: 'half'
      }
    ],
    automacao: [
      {
        name: 'ProcessAutomation',
        description: 'Automação de processos empresariais',
        path: '/produtos/processautomation',
        icon: <AutoFixHighIcon />,
        size: 'full'
      },
      {
        name: 'SmartWorkflow',
        description: 'Gestão inteligente de workflows',
        path: '/produtos/smartworkflow',
        icon: <WorkflowIcon />,
        size: 'full'
      }
    ],
    dominio: [
      {
        name: 'GovInsights',
        description: 'Análise de dados governamentais',
        path: '/produtos/govinsights',
        icon: <GovIcon />,
        size: 'third'
      },
      {
        name: 'CityServices',
        description: 'Gestão de serviços municipais',
        path: '/produtos/cityservices',
        icon: <LocationCityIcon />,
        size: 'third'
      },
      {
        name: 'CityPredict',
        description: 'Previsão de demandas urbanas',
        path: '/produtos/citypredict',
        icon: <DataUsageIcon />,
        size: 'third'
      }
    ],
    seguranca: [
      {
        name: 'SecureGov',
        description: 'Segurança para instituições governamentais',
        path: '/produtos/securegov',
        icon: <SecurityIcon />,
        size: 'half'
      },
      {
        name: 'DataProtect',
        description: 'Proteção e governança de dados',
        path: '/produtos/dataprotect',
        icon: <StorageIcon />,
        size: 'half'
      }
    ]
  };

  const ProductCard = ({ product }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
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
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          className="icon"
          sx={{
            color: theme.palette.primary.main,
            mb: 2,
            transition: 'all 0.3s ease',
            '& svg': {
              fontSize: '2.5rem'
            }
          }}
        >
          {product.icon}
        </Box>
        <Typography variant="h5" component="h3" gutterBottom color="primary">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(product.path)}
          sx={{
            mt: 'auto',
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              backgroundColor: alpha(theme.palette.primary.main, 0.05)
            }
          }}
        >
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          bgcolor: 'background.paper',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.95)} 0%, ${alpha(theme.palette.primary.dark, 0.95)} 100%)`,
            zIndex: 1
          }
        }}
      >
        <Box
          component="img"
          src="/images/products/hero-bg.jpg"
          alt="Products Hero"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Soluções Inovadoras para sua Transformação Digital
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  opacity: 0.9,
                  mb: 4,
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                Descubra nossa linha completa de produtos para empresas e governo
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Análise de Dados */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
            Análise de Dados
          </Typography>
          <Grid container spacing={3}>
            {products.analise.map((product) => (
              <Grid item xs={12} md={6} key={product.name}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Automação */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
            Automação
          </Typography>
          <Grid container spacing={3}>
            {products.automacao.map((product) => (
              <Grid item xs={12} key={product.name}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Domínio Público */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
            Domínio Público
          </Typography>
          <Grid container spacing={3}>
            {products.dominio.map((product) => (
              <Grid item xs={12} md={4} key={product.name}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Segurança */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
            Segurança
          </Typography>
          <Grid container spacing={3}>
            {products.seguranca.map((product) => (
              <Grid item xs={12} md={6} key={product.name}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProdutosHome; 