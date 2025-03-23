import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';

function About() {
  const values = [
    {
      title: 'Inovação',
      description: 'Buscamos constantemente novas soluções e tecnologias para melhorar nossos serviços.',
    },
    {
      title: 'Excelência',
      description: 'Comprometimento com a qualidade e resultados excepcionais.',
    },
    {
      title: 'Transparência',
      description: 'Relacionamentos baseados em confiança e comunicação clara.',
    },
    {
      title: 'Impacto Social',
      description: 'Contribuição para o desenvolvimento econômico e social da região.',
    },
  ];

  const differentials = [
    'Expertise em análise de dados e inteligência artificial',
    'Metodologia própria de transformação digital',
    'Equipe altamente qualificada e certificada',
    'Soluções personalizadas para cada cliente',
    'Suporte técnico especializado',
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Sobre a Necotium
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Transformando organizações através da tecnologia e dados
        </Typography>

        {/* História */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Nossa História
          </Typography>
          <Typography paragraph>
            A Necotium nasceu da visão de transformar a gestão pública e empresarial através da 
            inteligência de dados. Fundada por especialistas em tecnologia e gestão, nossa empresa 
            tem se destacado no mercado por oferecer soluções inovadoras que combinam análise 
            avançada de dados com automação de processos.
          </Typography>
          <Typography paragraph>
            Ao longo dos anos, desenvolvemos uma metodologia única que nos permite entregar 
            resultados significativos para nossos clientes, contribuindo para o crescimento 
            e desenvolvimento da região.
          </Typography>
        </Box>

        {/* Missão, Visão e Valores */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h5">Missão</Typography>
                </Box>
                <Typography>
                  Transformar organizações através de soluções tecnológicas inovadoras, 
                  promovendo eficiência e crescimento sustentável.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VisibilityIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h5">Visão</Typography>
                </Box>
                <Typography>
                  Ser referência nacional em transformação digital e gestão baseada em dados, 
                  impactando positivamente o desenvolvimento regional.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FlagIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h5">Valores</Typography>
                </Box>
                <List dense>
                  {values.map((value, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={value.title}
                        secondary={value.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Diferenciais */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Nossos Diferenciais
          </Typography>
          <Grid container spacing={2}>
            {differentials.map((differential, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon color="primary" sx={{ mr: 2 }} />
                      <Typography variant="h6">{differential}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certificações e Parcerias */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Certificações e Parcerias
          </Typography>
          <Typography paragraph>
            Contamos com as principais certificações do mercado e parcerias estratégicas 
            com líderes globais em tecnologia, garantindo a excelência e qualidade de 
            nossas soluções.
          </Typography>
          {/* Aqui você pode adicionar logos de parceiros e certificações */}
        </Box>
      </Container>
    </Box>
  );
}

export default About; 