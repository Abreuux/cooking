import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { submitToHubSpotAPI, initializeHubSpot } from '../utils/hubspot';
import SuccessMessage from '../components/SuccessMessage';

function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    sector: '',
    interest: '',
    preferredDate: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [successDialog, setSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize HubSpot when component mounts
  useEffect(() => {
    initializeHubSpot();
  }, []);

  const sectors = [
    'Indústria',
    'Comércio',
    'Serviços',
    'Governo',
    'Educação',
    'Saúde',
    'Outro',
  ];

  const interests = [
    'Growth Strategy',
    'Data-Driven',
    'Automação de Processos',
    'Todos os Serviços',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to HubSpot first
      await submitToHubSpotAPI('demo', formData);

      // Also submit to our existing API endpoint (optional - remove if not needed)
      try {
        const response = await fetch('/api/demo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          console.warn('Internal API submission failed, but HubSpot submission succeeded');
        }
      } catch (apiError) {
        console.warn('Internal API submission failed:', apiError);
        // Don't throw here since HubSpot submission succeeded
      }

      // Show success dialog
      setSuccessDialog(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        sector: '',
        interest: '',
        preferredDate: '',
        message: '',
      });

    } catch (error) {
      console.error('Demo form submission error:', error);
      setSnackbar({
        open: true,
        message: 'Erro ao enviar solicitação. Por favor, tente novamente.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Agende uma Demonstração
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Descubra como podemos transformar sua organização
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Telefone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Cargo"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Setor</InputLabel>
                    <Select
                      name="sector"
                      value={formData.sector}
                      label="Setor"
                      onChange={handleChange}
                    >
                      {sectors.map((sector) => (
                        <MenuItem key={sector} value={sector}>
                          {sector}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Área de Interesse</InputLabel>
                    <Select
                      name="interest"
                      value={formData.interest}
                      label="Área de Interesse"
                      onChange={handleChange}
                    >
                      {interests.map((interest) => (
                        <MenuItem key={interest} value={interest}>
                          {interest}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data Preferencial"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Mensagem (opcional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre suas necessidades específicas"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Demonstração'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        <Snackbar
          open={snackbar.open && snackbar.severity === 'error'}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

        <SuccessMessage
          open={successDialog}
          onClose={() => setSuccessDialog(false)}
          title="Demonstração agendada com sucesso!"
          message="Recebemos sua solicitação de demonstração e entraremos em contato em breve para agendar o melhor horário. Obrigado pelo interesse!"
        />
      </Container>
    </Box>
  );
}

export default Demo; 