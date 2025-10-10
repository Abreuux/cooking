import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent, Chip, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const DataInsights = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="DataInsights"
        subtitle="Assistente de IA para insights inteligentes e análise preditiva"
        image="/images/products/datainsights-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Assistente de IA para Insights Inteligentes
            </Typography>
            <Typography variant="body1" paragraph>
              O DataInsights revoluciona a análise de dados com um assistente de IA 
              que gera insights automáticos, identifica padrões ocultos e fornece 
              recomendações estratégicas em tempo real para sua organização.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                icon={<SmartToyIcon />} 
                label="IA Generativa" 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<InsightsIcon />} 
                label="Insights Automáticos" 
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
                    <SmartToyIcon />
                  </Avatar>
                  <Typography variant="h6">AI Assistant Dashboard</Typography>
                </Box>
                
                {/* AI Widget */}
                <Box sx={{ p: 3, bgcolor: 'grey.50', borderBottom: '1px solid', borderColor: 'grey.200' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                      <SmartToyIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        AI Insights Generator
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Analisando dados em tempo real...
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    bgcolor: 'white', 
                    p: 2, 
                    borderRadius: 1, 
                    border: '1px solid', 
                    borderColor: 'grey.300',
                    mb: 2
                  }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      💡 Insight Gerado:
                    </Typography>
                    <Typography variant="body2">
                      "Vendas aumentaram 23% no último trimestre. Recomendo focar na região Sul 
                      onde o crescimento foi 40% superior à média."
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip size="small" label="Tendência: ↗️ +23%" color="success" />
                    <Chip size="small" label="Confiança: 94%" color="primary" />
                    <Chip size="small" label="Ação: Recomendada" color="secondary" />
                  </Box>
                </Box>
                
                {/* Dashboard Content */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          23%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Crescimento
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="secondary.main" fontWeight="bold">
                          94%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Precisão IA
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
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
                title: 'Assistente de IA Conversacional',
                description: 'Interaja com seus dados através de conversas naturais com IA generativa.'
              },
              {
                title: 'Insights Automáticos',
                description: 'Geração automática de insights e recomendações baseadas em padrões dos dados.'
              },
              {
                title: 'Análise Preditiva Avançada',
                description: 'Modelos de ML que preveem tendências e comportamentos futuros.'
              },
              {
                title: 'Widget de IA em Tempo Real',
                description: 'Dashboard com widget de IA que gera insights instantâneos sobre seus dados.'
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

export default DataInsights; 