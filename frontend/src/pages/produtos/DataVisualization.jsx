import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent, Avatar, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TimelineIcon from '@mui/icons-material/Timeline';

const DataVisualization = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="Data Visualization"
        subtitle="Dashboards e visualizações avançadas para análise de dados"
        image="/images/products/visualization-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Dashboards Completos e Interativos
            </Typography>
            <Typography variant="body1" paragraph>
              O Data Visualization oferece uma plataforma completa de criação de dashboards 
              e visualizações avançadas, permitindo transformar dados complexos em insights 
              visuais claros e acionáveis para sua organização.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                icon={<BarChartIcon />} 
                label="Dashboards Interativos" 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<ShowChartIcon />} 
                label="Visualizações Avançadas" 
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
                {/* Dashboard Header */}
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1 
                }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                    <BarChartIcon />
                  </Avatar>
                  <Typography variant="h6">Executive Dashboard</Typography>
                </Box>
                
                {/* Dashboard Content */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="primary" fontWeight="bold">
                          R$ 2.4M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Receita Total
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="success.main" fontWeight="bold">
                          +18%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Crescimento
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="secondary.main" fontWeight="bold">
                          1,247
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Clientes
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  {/* Chart Placeholder */}
                  <Box sx={{ 
                    height: 200, 
                    bgcolor: 'grey.100', 
                    borderRadius: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '2px dashed',
                    borderColor: 'grey.300'
                  }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <ShowChartIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Gráfico Interativo
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Chart Types */}
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                    <Chip size="small" icon={<BarChartIcon />} label="Barras" />
                    <Chip size="small" icon={<PieChartIcon />} label="Pizza" />
                    <Chip size="small" icon={<TimelineIcon />} label="Linha" />
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
                title: 'Dashboards Personalizáveis',
                description: 'Crie dashboards totalmente customizáveis com drag-and-drop e widgets interativos.'
              },
              {
                title: 'Visualizações Avançadas',
                description: 'Mais de 50 tipos de gráficos e visualizações para diferentes tipos de dados.'
              },
              {
                title: 'Tempo Real',
                description: 'Atualizações automáticas em tempo real com dados sempre atualizados.'
              },
              {
                title: 'Exportação e Compartilhamento',
                description: 'Exporte dashboards em múltiplos formatos e compartilhe com stakeholders.'
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

        {/* Dashboard Showcase */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Tipos de Visualizações Disponíveis
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Gráficos de Barras',
                description: 'Comparação de valores categóricos',
                icon: <BarChartIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              },
              {
                title: 'Gráficos de Pizza',
                description: 'Distribuição percentual de dados',
                icon: <PieChartIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              },
              {
                title: 'Gráficos de Linha',
                description: 'Tendências temporais e evolução',
                icon: <ShowChartIcon sx={{ fontSize: 40, color: 'success.main' }} />
              },
              {
                title: 'Timeline',
                description: 'Eventos e marcos temporais',
                icon: <TimelineIcon sx={{ fontSize: 40, color: 'warning.main' }} />
              }
            ].map((chart, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      {chart.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom color="primary">
                      {chart.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {chart.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DataVisualization;
