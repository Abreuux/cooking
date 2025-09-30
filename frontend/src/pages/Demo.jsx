import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Demo() {
  const handleRedirectToTypeform = () => {
    window.open('https://form.typeform.com/to/a0d9de95', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Agende sua Demonstração
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Veja como nossa plataforma pode transformar seus dados em insights valiosos
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <CalendarTodayIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Agendamento Flexível
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Escolha o melhor horário para sua demonstração personalizada
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <VideoCallIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Demonstração Online
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Sessão interativa via videoconferência com nossos especialistas
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Análise Personalizada
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Demonstração focada nas necessidades específicas da sua empresa
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" gutterBottom>
            Pronto para ver nossa plataforma em ação?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Preencha nosso formulário para agendar sua demonstração personalizada
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleRedirectToTypeform}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
            }}
          >
            Agendar Demonstração
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Demo;