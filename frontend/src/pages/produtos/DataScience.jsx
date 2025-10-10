import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent, Avatar, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBanner from '../../components/PageBanner';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CloudIcon from '@mui/icons-material/Cloud';

const DataScience = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="Data Science"
        subtitle="Modelos de IA e GenIA em larga escala para transformação digital"
        image="/images/products/datascience-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Modelos e GenIA em Larga Escala
            </Typography>
            <Typography variant="body1" paragraph>
              O Data Science oferece uma plataforma completa para desenvolvimento, 
              treinamento e deploy de modelos de machine learning e IA generativa 
              em larga escala, permitindo que sua organização aproveite o poder 
              da inteligência artificial para transformação digital.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                icon={<PsychologyIcon />} 
                label="Machine Learning" 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<AutoAwesomeIcon />} 
                label="IA Generativa" 
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
                {/* AI Platform Header */}
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1 
                }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                    <PsychologyIcon />
                  </Avatar>
                  <Typography variant="h6">AI Model Platform</Typography>
                </Box>
                
                {/* Model Training Status */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <ModelTrainingIcon sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Modelos Ativos
                        </Typography>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                          24
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <AutoAwesomeIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          GenIA Models
                        </Typography>
                        <Typography variant="h6" color="secondary.main" fontWeight="bold">
                          8
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <CloudIcon sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Uptime
                        </Typography>
                        <Typography variant="h6" color="success.main" fontWeight="bold">
                          99.9%
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  {/* Model Training Visualization */}
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
                      <PsychologyIcon sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Modelo em Treinamento
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Model Types */}
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                    <Chip size="small" label="NLP" color="primary" />
                    <Chip size="small" label="Computer Vision" color="secondary" />
                    <Chip size="small" label="GenAI" color="success" />
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
                title: 'Desenvolvimento de Modelos',
                description: 'Plataforma completa para desenvolvimento, treinamento e validação de modelos de ML.'
              },
              {
                title: 'IA Generativa Avançada',
                description: 'Modelos de linguagem natural e geração de conteúdo com IA de última geração.'
              },
              {
                title: 'Deploy em Larga Escala',
                description: 'Infraestrutura cloud para deploy e escalonamento automático de modelos.'
              },
              {
                title: 'MLOps e Monitoramento',
                description: 'Pipeline completo de MLOps com monitoramento e versionamento de modelos.'
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

        {/* AI Models Showcase */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Tipos de Modelos Disponíveis
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Processamento de Linguagem Natural',
                description: 'Modelos para análise de texto, chatbots e geração de conteúdo',
                icon: <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              },
              {
                title: 'Computer Vision',
                description: 'Reconhecimento de imagens, classificação e análise visual',
                icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              },
              {
                title: 'Modelos Preditivos',
                description: 'Previsão de tendências, classificação e regressão',
                icon: <ModelTrainingIcon sx={{ fontSize: 40, color: 'success.main' }} />
              },
              {
                title: 'IA Generativa',
                description: 'Geração de texto, imagens e conteúdo criativo',
                icon: <CloudIcon sx={{ fontSize: 40, color: 'warning.main' }} />
              }
            ].map((model, index) => (
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
                      {model.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom color="primary">
                      {model.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {model.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Use Cases */}
        <Box sx={{ mt: 8, bgcolor: 'grey.50', p: 6, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Casos de Uso em Larga Escala
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Chatbots Inteligentes',
                description: 'Assistentes virtuais com IA generativa para atendimento ao cliente 24/7'
              },
              {
                title: 'Análise de Sentimentos',
                description: 'Processamento de feedback e análise de sentimentos em tempo real'
              },
              {
                title: 'Recomendações Personalizadas',
                description: 'Sistemas de recomendação baseados em ML para e-commerce e streaming'
              },
              {
                title: 'Automação de Processos',
                description: 'Automação inteligente de processos com IA generativa e RPA'
              }
            ].map((useCase, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  bgcolor: 'white', 
                  p: 3, 
                  borderRadius: 2, 
                  boxShadow: 1,
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {useCase.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DataScience;
