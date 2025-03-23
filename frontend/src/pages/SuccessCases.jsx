import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function SuccessCases() {
  const cases = [
    {
      title: 'Prefeitura de Recife',
      description: 'Implementação de sistema de análise de dados para otimização da gestão pública',
      results: [
        'Redução de 30% nos custos operacionais',
        'Aumento de 45% na eficiência dos processos',
        'Melhoria significativa no atendimento ao cidadão',
      ],
      image: '/images/case1.jpg', // Você precisará adicionar estas imagens
    },
    {
      title: 'Indústria Têxtil PE',
      description: 'Transformação digital completa dos processos produtivos',
      results: [
        'Aumento de 25% na produtividade',
        'Redução de 40% no tempo de setup',
        'Economia de 20% em custos de produção',
      ],
      image: '/images/case2.jpg',
    },
    {
      title: 'Rede de Varejo Regional',
      description: 'Implementação de estratégia data-driven para expansão',
      results: [
        'Crescimento de 50% em 2 anos',
        'Abertura de 15 novas lojas',
        'ROI de 300% no projeto',
      ],
      image: '/images/case3.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'João Silva',
      position: 'Secretário de Administração',
      company: 'Prefeitura de Recife',
      testimonial: 'A Necorium transformou completamente nossa gestão. Os resultados superaram todas as expectativas.',
      avatar: '/images/avatar1.jpg',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      position: 'Diretora de Operações',
      company: 'Indústria Têxtil PE',
      testimonial: 'A implementação do projeto pela Necorium foi um divisor de águas para nossa empresa.',
      avatar: '/images/avatar2.jpg',
      rating: 5,
    },
    {
      name: 'Pedro Costa',
      position: 'CEO',
      company: 'Rede de Varejo Regional',
      testimonial: 'A expertise da Necorium em análise de dados nos permitiu expandir com segurança e precisão.',
      avatar: '/images/avatar3.jpg',
      rating: 5,
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Casos de Sucesso
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Conheça algumas das nossas histórias de transformação
        </Typography>

        {/* Casos de Sucesso */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {cases.map((case_, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      component="div"
                      sx={{
                        height: '100%',
                        minHeight: 300,
                        bgcolor: 'grey.200',
                      }}
                      title={case_.title}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardContent>
                      <Typography variant="h4" gutterBottom>
                        {case_.title}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {case_.description}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Resultados Alcançados:
                      </Typography>
                      <ul>
                        {case_.results.map((result, idx) => (
                          <Typography
                            component="li"
                            key={idx}
                            sx={{ mb: 1 }}
                          >
                            {result}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Depoimentos */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Depoimentos
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Avatar
                        sx={{ width: 64, height: 64, mr: 2 }}
                        alt={testimonial.name}
                        src={testimonial.avatar}
                      />
                      <Box>
                        <Typography variant="h6">
                          {testimonial.name}
                        </Typography>
                        <Typography color="text.secondary">
                          {testimonial.position}
                        </Typography>
                        <Typography color="text.secondary">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex' }}>
                      <FormatQuoteIcon
                        sx={{ fontSize: 40, color: 'primary.main', mr: 1 }}
                      />
                      <Typography variant="body1" paragraph>
                        {testimonial.testimonial}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Métricas de Impacto */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Nosso Impacto
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">
                    +50
                  </Typography>
                  <Typography variant="h6">
                    Clientes Atendidos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">
                    95%
                  </Typography>
                  <Typography variant="h6">
                    Taxa de Satisfação
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">
                    +200%
                  </Typography>
                  <Typography variant="h6">
                    ROI Médio
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" color="primary">
                    +1000
                  </Typography>
                  <Typography variant="h6">
                    Processos Otimizados
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default SuccessCases; 