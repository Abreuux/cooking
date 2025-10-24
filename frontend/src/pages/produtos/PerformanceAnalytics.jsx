import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent, Avatar, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';

const DataIntegration = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="Data Integration"
        subtitle="Integração e engenharia de dados com pipelines automatizados"
        image="/images/products/integration-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Integração e Engenharia de Dados
            </Typography>
            <Typography variant="body1" paragraph>
              O Data Integration oferece uma solução completa para integração de dados,
              engenharia de pipelines e transformação de dados, permitindo que sua 
              organização conecte múltiplas fontes de dados de forma eficiente e automatizada.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                icon={<AccountTreeIcon />} 
                label="Pipelines Automatizados" 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<IntegrationInstructionsIcon />} 
                label="Integração de Dados" 
                color="secondary" 
                variant="outlined" 
              />
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                onClick={() => window.open("https://form.typeform.com/to/a0d9de95", "_blank", "noopener,noreferrer")}
                sx={{ mr: 2 }}
              >
                Fale com um Especialista
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                onClick={() => window.open("https://form.typeform.com/to/a0d9de95", "_blank", "noopener,noreferrer")}
              >
                Solicitar Demo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
              <CardContent sx={{ p: 0 }}>
                {/* Pipeline Header */}
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1 
                }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                    <AccountTreeIcon />
                  </Avatar>
                  <Typography variant="h6">Data Pipeline Monitor</Typography>
                </Box>
                
                {/* Pipeline Flow */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <DataObjectIcon sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Fonte de Dados
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <AccountTreeIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Pipeline ETL
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <StorageIcon sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Data Warehouse
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  {/* Pipeline Status */}
                  <Box sx={{ 
                    height: 120, 
                    bgcolor: 'grey.100', 
                    borderRadius: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '2px dashed',
                    borderColor: 'grey.300'
                  }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <AccountTreeIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Pipeline em Execução
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Status Indicators */}
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                    <Chip size="small" label="Ativo" color="success" />
                    <Chip size="small" label="99.9% Uptime" color="primary" />
                    <Chip size="small" label="Real-time" color="secondary" />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Principais Funcionalidades
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Pipelines ETL Automatizados',
                description: 'Crie e gerencie pipelines de extração, transformação e carregamento de dados automatizados.'
              },
              {
                title: 'Integração de Múltiplas Fontes',
                description: 'Conecte APIs, bancos de dados, arquivos e sistemas legados em uma única plataforma.'
              },
              {
                title: 'Engenharia de Dados',
                description: 'Ferramentas avançadas para limpeza, transformação e modelagem de dados.'
              },
              {
                title: 'Monitoramento em Tempo Real',
                description: 'Acompanhe o status e performance dos pipelines com alertas e métricas em tempo real.'
              }
            ].map((feature, index) => (
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
      </Container>
    </Box>
  );
};

export default DataIntegration; 