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
        subtitle="Plataforma enterprise de visualização de dados para tomada de decisões estratégicas"
        image="/images/products/visualization-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Visualização de Dados Enterprise
            </Typography>
            <Typography variant="body1" paragraph>
              Nossa plataforma de Data Visualization transforma dados complexos em narrativas 
              visuais poderosas, capacitando executivos e analistas a identificar padrões, 
              tendências e oportunidades de negócio através de dashboards executivos de 
              classe mundial e visualizações interativas de alta fidelidade.
            </Typography>
            <Typography variant="body1" paragraph>
              Desenvolvida para organizações que demandam precisão, escalabilidade e insights 
              acionáveis, nossa solução integra-se perfeitamente aos ecossistemas de dados 
              existentes, oferecendo capacidades de visualização que aceleram a tomada de 
              decisões estratégicas e operacionais.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                icon={<BarChartIcon />} 
                label="Enterprise Grade" 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<ShowChartIcon />} 
                label="Real-time Analytics" 
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
                  <Typography variant="h6">C-Suite Analytics Dashboard</Typography>
                </Box>
                
                {/* Dashboard Content */}
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="primary" fontWeight="bold">
                          $47.2M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Revenue Growth
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="success.main" fontWeight="bold">
                          23.4%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          YoY Growth
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="h5" color="secondary.main" fontWeight="bold">
                          94.7%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Customer NPS
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
                        Advanced Analytics Visualization
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Chart Types */}
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                    <Chip size="small" icon={<BarChartIcon />} label="Bar Charts" />
                    <Chip size="small" icon={<PieChartIcon />} label="Pie Charts" />
                    <Chip size="small" icon={<TimelineIcon />} label="Time Series" />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Capacidades Enterprise
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Dashboards Executivos',
                description: 'Plataforma de criação de dashboards C-level com personalização granular, widgets interativos e métricas de negócio em tempo real.'
              },
              {
                title: 'Visualizações Avançadas',
                description: 'Biblioteca completa com mais de 50 tipos de visualizações profissionais, incluindo heatmaps, treemaps, scatter plots e gráficos de correlação.'
              },
              {
                title: 'Analytics em Tempo Real',
                description: 'Processamento de streaming de dados com atualizações automáticas, alertas inteligentes e monitoramento de KPIs críticos.'
              },
              {
                title: 'Governança e Segurança',
                description: 'Controle de acesso baseado em roles, auditoria completa, conformidade com regulamentações e exportação segura para stakeholders.'
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
            Tipos de Visualizações Profissionais
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Business Intelligence Charts',
                description: 'Gráficos de barras, colunas e histogramas para análise comparativa de métricas de negócio',
                icon: <BarChartIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              },
              {
                title: 'Market Share Analysis',
                description: 'Gráficos de pizza, donut e treemap para análise de participação de mercado e distribuição',
                icon: <PieChartIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              },
              {
                title: 'Financial Trend Analysis',
                description: 'Gráficos de linha, área e candlestick para análise de tendências financeiras e temporais',
                icon: <ShowChartIcon sx={{ fontSize: 40, color: 'success.main' }} />
              },
              {
                title: 'Project Timeline & Milestones',
                description: 'Timelines interativas, Gantt charts e roadmaps para gestão de projetos e marcos',
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

        {/* Enterprise Use Cases */}
        <Box sx={{ mt: 8, bgcolor: 'grey.50', p: 6, borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Casos de Uso Empresariais
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Financial Performance Dashboards',
                description: 'Dashboards executivos para CFOs com métricas financeiras, P&L, cash flow e indicadores de performance em tempo real'
              },
              {
                title: 'Sales & Revenue Analytics',
                description: 'Visualizações de pipeline de vendas, análise de territórios, performance de produtos e previsões de receita'
              },
              {
                title: 'Operational Excellence',
                description: 'Monitoramento de KPIs operacionais, eficiência de processos, qualidade e métricas de produtividade'
              },
              {
                title: 'Customer Intelligence',
                description: 'Análise de comportamento do cliente, segmentação, lifetime value e métricas de satisfação e retenção'
              },
              {
                title: 'Supply Chain Visibility',
                description: 'Visualizações de cadeia de suprimentos, rastreamento de inventário, lead times e otimização de custos'
              },
              {
                title: 'Risk Management',
                description: 'Dashboards de gestão de riscos, compliance, auditoria e monitoramento de indicadores de segurança'
              }
            ].map((useCase, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ 
                  bgcolor: 'white', 
                  p: 3, 
                  borderRadius: 2, 
                  boxShadow: 1,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  }
                }}>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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

export default DataVisualization;
