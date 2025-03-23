import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import MonitoringIcon from '@mui/icons-material/MonitorHeart';
import ComplianceIcon from '@mui/icons-material/Gavel';

const GovSecurity = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Proteção Avançada',
      description: 'Segurança multicamada para dados governamentais',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Defesa Cibernética',
      description: 'Proteção contra ameaças digitais',
      icon: <ShieldIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Monitoramento 24/7',
      description: 'Vigilância contínua de sistemas',
      icon: <MonitoringIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Conformidade Legal',
      description: 'Atendimento a normas e regulamentos',
      icon: <ComplianceIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box>
      <PageBanner
        title="Gov Security"
        subtitle="Segurança digital para o setor público"
        image="/images/solutions/gov-security-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Proteção robusta para dados governamentais
            </Typography>
            <Typography variant="body1" paragraph>
              Nossa solução Gov Security oferece proteção abrangente para
              infraestruturas governamentais críticas. Com tecnologias
              avançadas de segurança cibernética e conformidade regulatória,
              garantimos a integridade e confidencialidade dos dados públicos.
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
              src="/images/solutions/gov-security-dashboard.jpg"
              alt="Gov Security Dashboard"
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
            Recursos Principais
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
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
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
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

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Benefícios
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Proteção Total',
                description: 'Segurança completa para dados e sistemas.'
              },
              {
                title: 'Conformidade',
                description: 'Atendimento a normas e regulamentações.'
              },
              {
                title: 'Prevenção',
                description: 'Antecipação e bloqueio de ameaças.'
              },
              {
                title: 'Confiabilidade',
                description: 'Garantia de disponibilidade dos serviços.'
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

export default GovSecurity; 