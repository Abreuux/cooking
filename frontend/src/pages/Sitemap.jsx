import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link, Divider, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Sitemap = () => {
  const theme = useTheme();

  // Define the site structure
  const siteStructure = [
    {
      title: 'Páginas Principais',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Sobre Nós', path: '/about' },
        { name: 'Casos de Sucesso', path: '/success-cases' },
        { name: 'Contato', path: '/contact' },
        { name: 'Agendar Demo', path: '/demo' },
      ]
    },
    {
      title: 'Soluções',
      links: [
        { name: 'Todas as Soluções', path: '/solucoes' },
        { name: 'Analytics Suite', path: '/solucoes/analytics-suite' },
        { name: 'Business Automation', path: '/solucoes/business-automation' },
        { name: 'Data Intelligence', path: '/solucoes/data-intelligence' },
        { name: 'Smart City', path: '/solucoes/smart-city' },
        { name: 'Public Intelligence', path: '/solucoes/public-intelligence' },
        { name: 'Gov Security', path: '/solucoes/gov-security' },
      ]
    },
    {
      title: 'Segmentos',
      links: [
        { name: 'Empresas', path: '/empresas' },
        { name: 'Governo', path: '/governo' },
        { name: 'Soluções', path: '/solutions' },
      ]
    },
    {
      title: 'Produtos',
      links: [
        { name: 'Todos os Produtos', path: '/produtos' },
        { name: 'CityDataHub', path: '/produtos/citydatahub' },
        { name: 'CityPredict', path: '/produtos/citypredict' },
        { name: 'DataInsights', path: '/produtos/datainsights' },
        { name: 'PerformanceAnalytics', path: '/produtos/performanceanalytics' },
        { name: 'ProcessAutomation', path: '/produtos/processautomation' },
        { name: 'SmartWorkflow', path: '/produtos/smartworkflow' },
        { name: 'GovInsights', path: '/produtos/govinsights' },
        { name: 'CityServices', path: '/produtos/cityservices' },
        { name: 'SecureGov', path: '/produtos/securegov' },
        { name: 'DataProtect', path: '/produtos/dataprotect' },
      ]
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Mapa do Site"
        subtitle="Navegue facilmente por todas as páginas do nosso site"
        image="/images/sitemap-banner.jpg"
        buttonText=""
        buttonLink=""
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom color="primary" align="center" sx={{ mb: 6 }}>
          Estrutura Completa do Site
        </Typography>

        <Grid container spacing={4}>
          {siteStructure.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  color="primary"
                  sx={{
                    position: 'relative',
                    pb: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 60,
                      height: 3,
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: 1
                    }
                  }}
                >
                  {section.title}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      component={RouterLink}
                      to={link.path}
                      key={linkIndex}
                      sx={{
                        color: 'text.primary',
                        textDecoration: 'none',
                        py: 0.5,
                        transition: 'all 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                          pl: 1
                        },
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '""',
                          display: 'inline-block',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: 'secondary.main',
                          mr: 1.5
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Sitemap; 