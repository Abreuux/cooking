const HeroSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const benefits = [
    {
      icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
      title: 'Visão 360° do Negócio',
      description: 'Todos os dados em um lugar',
      color: theme.palette.primary.main,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Previsibilidade Estratégica',
      description: 'Decisões seguras e rápidas',
      color: theme.palette.primary.light,
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Redução de Retrabalho',
      description: 'Otimização de tempo e recursos',
      color: theme.palette.primary.dark,
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Clareza nas Metas',
      description: 'Acompanhamento objetivo dos resultados',
      color: theme.palette.secondary.main,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}08 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}08 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            {/* Content */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 2,
                    color: theme.palette.primary.main,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Tenha os dados certos para decisões certas
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    lineHeight: 1.4,
                    textAlign: { xs: 'center', md: 'left' },
                    maxWidth: '600px',
                  }}
                >
                  Transformamos seus dados em dashboards inteligentes sem precisar de uma equipe interna de TI
                </Typography>
              </motion.div>




              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    mb: 6,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      backgroundColor: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Agendar Diagnóstico Gratuito
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}10`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Falar com Especialista
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* Tech Illustration */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
              >
                <PhoneMockup />
              </motion.div>
            </Grid>
          </Grid>

          {/* Benefits Cards */}
          <Box sx={{ mt: { xs: 4, md: 8 } }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={itemVariants}
                    custom={index}
                  >
                    <Zoom in={inView} timeout={600} style={{ transitionDelay: `${index * 200}ms` }}>
                      <Card
                        sx={{
                          height: '100%',
                          textAlign: 'center',
                          p: 2,
                          background: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: `0 12px 30px ${benefit.color}25`,
                          },
                        }}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              color: benefit.color,
                              mb: 2,
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {benefit.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 1,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {benefit.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              lineHeight: 1.5,
                            }}
                          >
                            {benefit.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Trusted by Companies */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontWeight: 600,
                }}
              >
                Confiado por empresas de todos os portes
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: { xs: 3, md: 6 },
                  opacity: 0.7,
                }}
              >
                {/* Company Placeholders */}
                {[
                  { name: 'TechCorp', color: theme.palette.primary.main },
                  { name: 'DataFlow', color: theme.palette.primary.light },
                  { name: 'InnovateLab', color: theme.palette.primary.dark },
                  { name: 'SmartBiz', color: theme.palette.primary.main },
                  { name: 'FutureData', color: theme.palette.secondary.main },
                ].map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                  >
                    <Box
                      sx={{
                        px: 3,
                        py: 2,
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 2,
                        border: `1px solid ${company.color}20`,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: company.color,
                          fontSize: '1rem',
                        }}
                      >
                        {company.name}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};



export default HeroSection;
