import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A1A2E',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src="/images/logo-white.png"
              alt="Necotium Logo"
              sx={{ height: 40, mb: 2 }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              Soluções de inteligência de dados para gestão pública e empresarial.
              Transformando dados em decisões inteligentes.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links Rápidos
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/solucoes"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Soluções
            </Link>
            <Link
              component={RouterLink}
              to="/produtos"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Produtos
            </Link>
            <Link
              component={RouterLink}
              to="/contato"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Contato
            </Link>
            <Link
              component={RouterLink}
              to="/sitemap"
              color="inherit"
              sx={{ display: 'block', mb: 1 }}
            >
              Mapa do Site
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Conecte-se Conosco
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/necotium"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/necotium"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/necotium"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {currentYear} Necotium. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 