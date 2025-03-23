# Implementação Técnica dos Componentes

Este documento complementa o README.md principal e detalha as implementações específicas dos componentes em cada página do site Necotium.

## Home

### Implementação do Banner Principal
```javascript
// Componente 
const Banner = ({ banners }) => {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);
  const intervalRef = useRef(null);
  const imagesLoaded = useRef({});
  
  // Preload das imagens para melhorar a performance
  useEffect(() => {
    // Função para pré-carregar uma imagem
    const preloadImage = (src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded.current[index] = true;
      };
      return img;
    };
    
    // Pré-carrega todas as imagens com prioridade para a primeira
    const imagePromises = banners.map((banner, index) => {
      return preloadImage(banner.image, index);
    });
    
    // Cleanup
    return () => {
      imagePromises.forEach(img => {
        if (img) {
          img.onload = null;
        }
      });
    };
  }, [banners]);

  // Função para avançar para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  // Configurar o intervalo para mudar os slides automaticamente
  useEffect(() => {
    // Limpar intervalo anterior se existir
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Configurar novo intervalo para mudar slide a cada 8 segundos
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    // Limpar intervalo quando o componente for desmontado
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  // Função para mudar para um slide específico ao clicar no indicador
  const goToSlide = useCallback((index) => {
    // Resetar o intervalo quando o usuário clica em um indicador
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setCurrentBanner(index);
    
    // Reiniciar o intervalo
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
  }, [nextSlide]);
```

### Seções de Destaque
- Layout baseado em Grid com componentes Card personalizados
- Implementação com ícones temáticos para cada seção
- Uso de componentes Typography para manter hierarquia de texto

### Brand Carousel
- Implementação com animação CSS pura para melhor performance
- Detecção de interseção para carregamento condicional:
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  if (carouselRef.current) {
    observer.observe(carouselRef.current);
  }

  return () => {
    if (carouselRef.current) {
      observer.unobserve(carouselRef.current);
    }
  };
}, []);
```

## Páginas de Produtos

### Estrutura de Componentes
- Banner superior implementado com `PageBanner`
- Layout principal implementado com Grid de duas colunas
- Cards de funcionalidades usando componente Paper com elevação sutil

### Exemplo de Implementação (CityDataHub)
```javascript
const CityDataHub = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageBanner
        title="CityDataHub"
        subtitle="Plataforma centralizada para análise de dados municipais"
        image="/images/products/citydatahub-banner.jpg"
        buttonText="Agende uma Demo"
        buttonLink="/demo"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Transforme dados em decisões inteligentes
            </Typography>
            <Typography variant="body1" paragraph>
              O CityDataHub é uma plataforma completa que centraliza, analisa e 
              transforma dados municipais em insights acionáveis para uma gestão 
              pública mais eficiente e baseada em evidências.
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
              src="/images/products/citydatahub-dashboard.jpg"
              alt="CityDataHub Dashboard"
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
            Principais Funcionalidades
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Integração de Dados',
                description: 'Conecte e unifique dados de diferentes fontes e departamentos municipais.'
              },
              {
                title: 'Análise Avançada',
                description: 'Utilize algoritmos de IA para extrair insights valiosos dos dados municipais.'
              },
              {
                title: 'Dashboards Interativos',
                description: 'Visualize dados em tempo real com painéis personalizáveis e intuitivos.'
              },
              {
                title: 'Relatórios Automatizados',
                description: 'Gere relatórios detalhados automaticamente para tomada de decisão.'
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
```

## Páginas de Soluções

### Accordion Personalizado
- Implementação com componentes Material UI expandíveis
- Estilos personalizados para melhor integração visual

### Exemplo de Implementação (Solutions)
```javascript
function Solutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      title: 'Crescimento',
      description: 'Soluções estratégicas para expansão e crescimento do seu negócio',
      features: [
        {
          title: 'Análise de Mercado',
          description: 'Análise detalhada do mercado local e regional para identificação de oportunidades.'
        },
        {
          title: 'Growth Strategy',
          description: 'Planejamento estratégico para expansão em novos mercados e segmentos.'
        },
        {
          title: 'Inteligência Geográfica',
          description: 'Análise demográfica e geográfica para decisões estratégicas de localização.'
        }
      ]
    },
    // Outras soluções...
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
```

## Página de Contato

### Formulário com Validação
- Estado gerenciado com React Hooks
- Validação em tempo real com feedback visual

### Implementação
```javascript
function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validação em tempo real para email
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value) && value !== '') {
        setErrors({
          ...errors,
          email: 'Por favor, digite um email válido',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação dos campos
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.message) newErrors.message = 'Mensagem é obrigatória';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      newErrors.email = 'Por favor, digite um email válido';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Envio do formulário
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setSnackbar({
          open: true,
          message: 'Mensagem enviada com sucesso!',
          severity: 'success',
        });
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSnackbar({
          open: true,
          message: data.message || 'Ocorreu um erro ao enviar a mensagem.',
          severity: 'error',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Erro de conexão. Tente novamente.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  // JSX do componente...
}
```

## Página de Sitemap

### Estrutura do Componente
- Implementação com Grid, Paper e Links organizados por categoria
- Uso de efeitos visuais sutis para melhorar experiência do usuário

### Implementação
```javascript
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
    // Outras categorias...
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
```

## Considerações sobre Manutenção e Desenvolvimento

### Padrões de Implementação
- Manter consistência nos componentes usando padrões estabelecidos
- Reutilizar estilos e lógicas comuns para reduzir duplicação de código

### Otimizações Futuras
- Implementar lazy loading para todas as imagens não críticas
- Considerar virtualização para listas longas (como no Sitemap)
- Melhorar a acessibilidade com ARIA roles e atributos apropriados

### Extensão de Componentes
- Novos componentes devem seguir a mesma estrutura e convenções
- Manter a separação de preocupações (lógica vs. apresentação)
- Documentar props e comportamentos esperados 