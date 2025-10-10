import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  IconButton,
  Paper,
  Avatar,
  Divider,
  Stack,
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import '../styles/Banner.css';
import Banner from '../components/Banner';
import Solutions from '../components/Solutions';
import BrandCarousel from '../components/BrandCarousel';

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();

  // Define banner slides with fallback images
  const banners = [
    {
      title: "Transformação Digital",
      subtitle: "Acelere a inovação e modernização do seu negócio com nossas soluções tecnológicas avançadas. Descubra como a transformação digital pode impulsionar seus resultados.",
      image: "/images/tech-person.jpg",
      buttonText: "Conheça nossas soluções",
      buttonLink: "/solucoes"
    },
    {
      title: "Soluções para Governo",
      subtitle: "Otimize a gestão pública com ferramentas inteligentes e análise de dados. Transforme a eficiência administrativa e melhore o atendimento ao cidadão.",
      image: "/images/public.jpg",
      buttonText: "Saiba mais",
      buttonLink: "/governo"
    },
    {
      title: "Soluções Empresariais",
      subtitle: "Potencialize seu negócio com análise avançada de dados e inteligência artificial. Tome decisões estratégicas baseadas em insights precisos e atualizados.",
      image: "/images/hero-vr.jpg",
      buttonText: "Conheça mais",
      buttonLink: "/empresas"
    },
    {
      title: "Data Apps",
      subtitle: "Aplicações inteligentes e customizadas para gestão e análise de dados. Transforme dados complexos em informações acionáveis para seu negócio.",
      image: "/images/datapp.jpg",
      buttonText: "Ver soluções",
      buttonLink: "/solucoes"
    }
  ];

  const features = [
    {
      title: "CityDataHub",
      description: "Plataforma centralizada para análise e visualização de dados municipais em tempo real.",
      icon: "dashboard"
    },
    {
      title: "GovInsights",
      description: "Análise preditiva e insights estratégicos para tomada de decisão na gestão pública.",
      icon: "analytics"
    },
    {
      title: "MuniProcess",
      description: "Automação e otimização de processos administrativos municipais.",
      icon: "autorenew"
    }
  ];


  const technologies = [
    { name: 'Machine Learning', description: 'Algoritmos avançados de aprendizado' },
    { name: 'Big Data', description: 'Processamento de grandes volumes de dados' },
    { name: 'Cloud Computing', description: 'Infraestrutura escalável e segura' },
    { name: 'IoT', description: 'Conectividade e automação inteligente' },
    { name: 'Inteligência Artificial', description: 'IA generativa e modelos preditivos' },
    { name: 'ETL & Data Pipelines', description: 'Integração e transformação de dados' },
    { name: 'Data Streaming', description: 'Processamento de dados em tempo real' },
    { name: 'Data Quality', description: 'Governança e qualidade de dados em larga escala' },
  ];

  const testimonials = [
    {
      name: 'Cândido Roberto',
      role: 'Diretor',
      organization: 'CARROCIM',
      content: 'Os dashboards desenvolvidos pela Necotium nos auxiliam diariamente na tomada de decisão do nosso principal processo, o de compra e venda para nossa empresa.',
      image: '/images/avatar1.jpg',
    },
    {
      name: 'Jessika Heimann',
      role: 'Diretora',
      organization: 'Gateway & Partners',
      content: 'Com a solução da Necotium, conseguimos nos aproximar mais de nossos clientes e pretensos clientes.',
      image: '/images/avatar2.jpg',
    },
    {
      name: 'Barbara',
      role: 'Diretora de Marketing',
      organization: 'Vega Dessanilizadores',
      content: 'A nossa estratégia de Go-To-Marketing teve um êxito de 120% maior com redução de 25% no orçamento em campanhas. Passamos a olhar para nossa base de clientes de outra forma. Valorizar, gerar valor com nossa base de dados não estava no nosso radar e foi uma mudança de cultura acima de tudo olhar sobre o prisma de dados como produtos.',
      image: '/images/avatar3.jpg',
    },
  ];

  return (
    <Box>
      <Banner banners={banners} />
      

      {/* Brand Carousel */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              fontWeight: 500
            }}
          >
            Empresas que confiam em nossas soluções
          </Typography>
        </Container>
        <BrandCarousel />
      </Box>

      {/* Soluções */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                position: 'relative',
                paddingLeft: '1.5rem',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '15%',
                  height: '70%',
                  width: '6px',
                  backgroundColor: '#C4D600',
                  borderRadius: '3px',
                  boxShadow: '0 0 20px rgba(196, 214, 0, 0.5)'
                }
              }}
            >
              Soluções para Transformação Digital Municipal
            </Typography>
            <Typography 
              variant="body1" 
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                maxWidth: '800px',
                marginBottom: 4,
                paddingLeft: '1.5rem',
                lineHeight: 1.5
              }}
            >
              Impulsione a eficiência e modernização da sua cidade com nossas soluções integradas de gestão pública.
            </Typography>
          </Grid>
        </Grid>
        <Solutions features={features} />
      </Container>

      {/* Data-Driven Management Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 2, fontWeight: 700 }}>
            Gestão Empresarial Orientada por Dados
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
            Transformamos organizações através da integração inteligente de todas as nossas soluções: 
            DataInsights, DataProtect, Data Visualization, Data Integration e Data Science
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'secondary.main' }}>
                  Vantagem Competitiva
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.4 }}>
                  Transforme dados em insights estratégicos que impulsionam o crescimento e diferenciam sua empresa no mercado
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'secondary.main' }}>
                  Eficiência Operacional
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.4 }}>
                  Automatize processos e otimize operações com inteligência artificial e análise preditiva em tempo real
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'secondary.main' }}>
                  Tomada de Decisão
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.4 }}>
                  Decisões baseadas em dados concretos com dashboards executivos e relatórios inteligentes automatizados
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'secondary.main' }}>
                  Por Onde Começar
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.4 }}>
                  Diagnóstico gratuito para identificar oportunidades e criar um roadmap personalizado de transformação digital
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Tecnologias */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Tecnologias Inovadoras
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Utilizamos as tecnologias mais avançadas do mercado
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {technologies.map((tech, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Depoimentos */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          O que nossos clientes dizem
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.organization}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Diagnostic Section */}
      <Box 
        sx={{ 
          bgcolor: 'grey.50',
          py: 6,
          borderTop: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
              Diagnóstico Estratégico Gratuito
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary', fontWeight: 400 }}>
              Descubra como seus dados podem impulsionar o crescimento da sua empresa
            </Typography>
            
            <Box sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 3,
              p: 2,
              bgcolor: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
              <Typography variant="h5" sx={{ textDecoration: 'line-through', color: 'grey.500' }}>
                R$ 5.000
              </Typography>
              <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                GRATUITO
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '500px', mx: 'auto' }}>
              Análise completa dos seus dados atuais com insights acionáveis e roadmap personalizado
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => window.open('https://form.typeform.com/to/a0d9de95', '_blank', 'noopener,noreferrer')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(43, 57, 144, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Agendar Diagnóstico
            </Button>
            
            <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
              Vagas limitadas • Resposta em até 24h
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Pronto para transformar sua organização?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Agende uma demonstração e descubra como podemos ajudar.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => window.open('https://form.typeform.com/to/a0d9de95', '_blank', 'noopener,noreferrer')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                  }}
                >
                  Agendar Demo
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.open('https://form.typeform.com/to/a0d9de95', '_blank', 'noopener,noreferrer')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contato
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 