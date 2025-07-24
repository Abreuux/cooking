import React, { useEffect, useRef, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import '../styles/BrandCarousel.css';

const BrandCarousel = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  const brands = [
    { name: 'Agio', logo: '/images/clients/logo-agio.png' },
    { name: 'Bella Pia', logo: '/images/clients/logo-bella-pia.png' },
    { name: 'Capricom', logo: '/images/clients/logo-capricom.png' },
    { name: 'Comeia', logo: '/images/clients/logo-comeia.png' },
    { name: 'Gateway Partners', logo: '/images/clients/logo-gateway-partners.png' },
    { name: 'ProSolution', logo: '/images/clients/logo-prosolution.png' },
    { name: 'Vega', logo: '/images/clients/logo-vega.jpeg' },
  ];

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

  const renderBrandItem = (brand, index) => (
    <div 
      key={`${brand.name}-${index}`} 
      className="brand-item"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 0.1}s`,
      }}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        loading="lazy"
        width="120"
        height="60"
      />
    </div>
  );

  return (
    <Box
      ref={carouselRef}
      className="brand-carousel-container"
      sx={{
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        py: 6,
      }}
    >
      <div className="brand-carousel">
        <div className="brand-slide">
          {brands.map((brand, index) => renderBrandItem(brand, index))}
        </div>
        <div className="brand-slide" aria-hidden="true">
          {brands.map((brand, index) => renderBrandItem(brand, index))}
        </div>
      </div>
    </Box>
  );
};

export default BrandCarousel; 