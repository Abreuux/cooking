import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function Solutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      title: 'Crescimento',
      description: 'Soluções estratégicas para expansão e crescimento do seu negócio',
      features: [
        {
          title: 'Análise de Mercado',
          description: 'Análise detalhada do mercado local e regional para identificação de oportunidades.',
        },
        {
          title: 'Growth Strategy',
          description: 'Planejamento estratégico para expansão em novos mercados e segmentos.',
        },
        {
          title: 'Inteligência Geográfica',
          description: 'Análise demográfica e geográfica para decisões estratégicas de localização.',
        },
      ],
    },
    {
      title: 'Posicionamento Data-Driven',
      description: 'Transforme dados em insights acionáveis para seu negócio',
      features: [
        {
          title: 'BlaaS (Business Layer as a Service)',
          description: 'Camada de negócios como serviço para otimização de processos.',
        },
        {
          title: 'Arquitetura de Dados',
          description: 'Implementação de Data Warehousing, Datalake e Datalakehouse.',
        },
        {
          title: 'Machine Learning',
          description: 'Soluções de MLOps para predição e otimização de processos.',
        },
      ],
    },
    {
      title: 'Processos e Qualidade',
      description: 'Otimize suas operações com automação inteligente',
      features: [
        {
          title: 'Mapeamento de Processos',
          description: 'Identificação e documentação de processos para maior eficiência.',
        },
        {
          title: 'BPMS',
          description: 'Automação de processos de negócio para maior produtividade.',
        },
        {
          title: 'Análise de Capacidade',
          description: 'Avaliação e otimização da capacidade produtiva.',
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Nossas Soluções
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Transforme sua organização com nossas soluções integradas
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {solution.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" paragraph>
                    {solution.description}
                  </Typography>

                  {solution.features.map((feature, featureIndex) => (
                    <Accordion key={featureIndex}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{feature.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{feature.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Pronto para começar?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/demo')}
            sx={{ mr: 2 }}
          >
            Agendar Demo
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Fale Conosco
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Solutions; 