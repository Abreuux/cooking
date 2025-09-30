import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const FAQSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [expanded, setExpanded] = useState('panel0');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const faqs = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Primeiros insights em 15 dias, implementação completa em 60-90 dias. Nossa metodologia ágil permite que você comece a tomar decisões baseadas em dados muito rapidamente, enquanto construímos a solução completa.',
      color: theme.palette.primary.main,
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 24, color: theme.palette.secondary.main }} />,
      question: 'Nossa equipe consegue usar sem treinamento técnico?',
      answer: 'Sim, dashboards intuitivos + treinamento completo da equipe. Desenvolvemos interfaces pensadas para usuários de negócio, não técnicos. Além disso, oferecemos treinamento personalizado para cada perfil de usuário.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 24, color: theme.palette.accent.main }} />,
      question: 'E se nossos sistemas forem muito antigos?',
      answer: 'Integramos qualquer sistema, por mais legado que seja. Nossa equipe tem experiência com sistemas de todas as idades e tecnologias. Criamos conectores personalizados quando necessário.',
      color: theme.palette.accent.main,
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 24, color: '#4CAF50' }} />,
      question: 'Quanto custa manter a solução?',
      answer: 'Menor que o custo de um analista júnior, com resultado de equipe sênior. O investimento mensal é inferior ao salário de um profissional, mas você tem acesso a uma equipe completa de especialistas.',
      color: '#4CAF50',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 24, color: theme.palette.primary.light }} />,
      question: 'E se não funcionar para nosso negócio?',
      answer: 'Diagnóstico gratuito identifica viabilidade antes do investimento. Analisamos seu cenário sem custo e só prosseguimos se tivermos certeza de que podemos gerar valor para sua empresa.',
      color: theme.palette.primary.light,
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, #ffffff 0%, ${theme.palette.grey[50]} 100%)`,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Dúvidas{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mais Frequentes
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* FAQ Accordions */}
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    borderRadius: '12px !important',
                    border: `2px solid ${faq.color}20`,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${faq.color}40`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${faq.color}15`,
                    },
                    '&.Mui-expanded': {
                      borderColor: `${faq.color}60`,
                      boxShadow: `0 8px 25px ${faq.color}20`,
                    },
                    '&::before': {
                      display: 'none',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: faq.color,
                          fontSize: 28,
                        }}
                      />
                    }
                    sx={{
                      py: 2,
                      px: 3,
                      '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                        my: 1,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        {faq.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                      pt: 0,
                    }}
                  >
                    <Box
                      sx={{
                        pl: { xs: 0, md: 5 },
                        borderLeft: { xs: 'none', md: `3px solid ${faq.color}30` },
                        ml: { xs: 0, md: 1 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          pl: { xs: 0, md: 2 },
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>

          {/* Additional Info */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 6,
                p: 4,
                textAlign: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Ainda tem dúvidas?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Nossa equipe de especialistas está pronta para esclarecer qualquer questão específica sobre sua situação.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  📞 Resposta em até 2 horas
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  💬 WhatsApp disponível
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.accent.main,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  📧 E-mail 24/7
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
