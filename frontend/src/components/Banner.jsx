import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Banner.css';

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

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${currentBanner === index ? 'active' : ''}`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="banner-image"
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "auto"}
            decoding="async"
            style={{ willChange: 'transform, opacity' }}
          />
          <Container maxWidth="xl" className="banner-content">
            <div className="banner-content-inner">
              <Typography
                variant="h1"
                className="banner-title"
              >
                {banner.title}
              </Typography>
              <Typography
                variant="h4"
                className="banner-subtitle"
              >
                {banner.subtitle}
              </Typography>
              <div className="banner-button-wrapper">
                <Button
                  className="banner-button"
                  onClick={() => navigate(banner.buttonLink)}
                >
                  {banner.buttonText}
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ))}
      <div className="banner-indicators">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`banner-indicator ${currentBanner === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </Box>
  );
};

export default React.memo(Banner); 