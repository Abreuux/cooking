import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  Menu,
  Grid,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// Style constants
const HOVER_COLOR = '#C4D600';
const ACTIVE_COLOR = '#C4D600';
const HOVER_BG = 'rgba(196, 214, 0, 0.1)';
const ACTIVE_BG = 'rgba(196, 214, 0, 0.2)';

const menuItems = [
  {
    title: 'Empresas',
    path: '/empresas',
    submenu: [
      {
        title: 'Soluções',
        description: 'Soluções empresariais integradas para sua empresa',
        items: [
          { title: 'Analytics Suite', path: '/solucoes/analytics-suite', description: 'Análise avançada de dados empresariais' },
          { title: 'Business Automation', path: '/solucoes/business-automation', description: 'Automação de processos de negócio' },
          { title: 'Data Intelligence', path: '/solucoes/data-intelligence', description: 'Inteligência de dados corporativos' }
        ]
      },
      {
        title: 'Produtos',
        description: 'Produtos especializados para o setor empresarial',
        items: [
          { title: 'DataInsights', path: '/produtos/datainsights', description: 'Análise preditiva e insights de negócio' },
          { title: 'PerformanceAnalytics', path: '/produtos/performanceanalytics', description: 'Métricas e análise de desempenho' },
          { title: 'ProcessAutomation', path: '/produtos/processautomation', description: 'Automação de processos empresariais' }
        ]
      }
    ]
  },
  {
    title: 'Governo',
    path: '/governo',
    submenu: [
      {
        title: 'Soluções',
        description: 'Soluções especializadas para gestão pública',
        items: [
          { title: 'Smart City Suite', path: '/solucoes/smart-city', description: 'Soluções para cidades inteligentes' },
          { title: 'Public Intelligence', path: '/solucoes/public-intelligence', description: 'Inteligência para gestão pública' },
          { title: 'Gov Security', path: '/solucoes/gov-security', description: 'Segurança para órgãos públicos' }
        ]
      },
      {
        title: 'Produtos',
        description: 'Produtos especializados para o setor público',
        items: [
          { title: 'CityDataHub', path: '/produtos/citydatahub', description: 'Central de dados municipais' },
          { title: 'CityPredict', path: '/produtos/citypredict', description: 'Previsão e análise urbana' },
          { title: 'GovInsights', path: '/produtos/govinsights', description: 'Insights para gestão pública' }
        ]
      }
    ]
  },
  {
    title: 'Produtos',
    path: '/produtos',
    submenu: [
      {
        title: 'Empresas',
        description: 'Produtos para o setor empresarial',
        items: [
          { title: 'SmartWorkflow', path: '/produtos/smartworkflow', description: 'Gestão de fluxos de trabalho' },
          { title: 'DataProtect', path: '/produtos/dataprotect', description: 'Proteção de dados corporativos' },
          { title: 'DataInsights', path: '/produtos/datainsights', description: 'Análise preditiva e insights de negócio' },
          { title: 'PerformanceAnalytics', path: '/produtos/performanceanalytics', description: 'Métricas e análise de desempenho' },
          { title: 'ProcessAutomation', path: '/produtos/processautomation', description: 'Automação de processos empresariais' }
        ]
      },
      {
        title: 'Governo',
        description: 'Produtos para o setor público',
        items: [
          { title: 'CityServices', path: '/produtos/cityservices', description: 'Serviços municipais integrados' },
          { title: 'SecureGov', path: '/produtos/securegov', description: 'Segurança governamental' },
          { title: 'CityDataHub', path: '/produtos/citydatahub', description: 'Central de dados municipais' },
          { title: 'CityPredict', path: '/produtos/citypredict', description: 'Previsão e análise urbana' },
          { title: 'GovInsights', path: '/produtos/govinsights', description: 'Insights para gestão pública' }
        ]
      }
    ]
  },
  {
    title: 'Soluções',
    path: '/solucoes',
    submenu: [
      {
        title: 'Empresas',
        description: 'Soluções corporativas integradas',
        items: [
          { title: 'Analytics Suite', path: '/solucoes/analytics-suite', description: 'Análise avançada de dados empresariais' },
          { title: 'Business Automation', path: '/solucoes/business-automation', description: 'Automação de processos de negócio' },
          { title: 'Data Intelligence', path: '/solucoes/data-intelligence', description: 'Inteligência de dados corporativos' }
        ]
      },
      {
        title: 'Governo',
        description: 'Soluções governamentais integradas',
        items: [
          { title: 'Smart City Suite', path: '/solucoes/smart-city', description: 'Soluções para cidades inteligentes' },
          { title: 'Public Intelligence', path: '/solucoes/public-intelligence', description: 'Inteligência para gestão pública' },
          { title: 'Gov Security', path: '/solucoes/gov-security', description: 'Segurança para órgãos públicos' }
        ]
      }
    ]
  }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile menu item component
  const MobileMenuItem = ({ item, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setActiveSubmenu(null);
      }
    };

    const handleSubmenuToggle = (submenuTitle) => {
      setActiveSubmenu(activeSubmenu === submenuTitle ? null : submenuTitle);
    };

    return (
      <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <ListItem
          button
          onClick={handleToggle}
          sx={{
            py: 2,
            px: 3,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              sx: {
                color: '#2B3990',
                fontWeight: 600,
                fontSize: '1.1rem',
              },
            }}
          />
          <Box
            component="span"
            sx={{
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease',
              color: '#2B3990',
            }}
          >
            ▼
          </Box>
        </ListItem>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 3, pr: 2 }}>
            {(item.submenu || []).map((submenu) => (
              <Box key={submenu.title}>
                <ListItem
                  onClick={() => handleSubmenuToggle(submenu.title)}
                  sx={{
                    py: 1.5,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemText
                    primary={submenu.title}
                    secondary={submenu.description}
                    primaryTypographyProps={{
                      sx: {
                        color: '#2B3990',
                        fontWeight: 500,
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        color: 'rgba(43, 57, 144, 0.7)',
                        fontSize: '0.85rem',
                      },
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      transform: activeSubmenu === submenu.title ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: '#2B3990',
                    }}
                  >
                    ▼
                  </Box>
                </ListItem>

                <Collapse in={activeSubmenu === submenu.title} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 2 }}>
                    {(submenu.items || []).map((subItem) => (
                      <ListItem
                        key={subItem.path}
                        component={RouterLink}
                        to={subItem.path}
                        onClick={onClose}
                        sx={{
                          py: 1,
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            sx: {
                              color: '#2B3990',
                              fontSize: '0.95rem',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    );
  };

  // Desktop menu item component
  const DesktopMenuItem = ({ item }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = location.pathname.startsWith(item.path);
    const timeoutRef = React.useRef(null);

    const handleMouseEnter = (event) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setAnchorEl(event.currentTarget);
      setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsMenuOpen(false);
        setAnchorEl(null);
      }, 150); // Small delay to allow moving to submenu
    };

    const handleMenuMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleMenuMouseLeave = () => {
      setIsMenuOpen(false);
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl) && isMenuOpen;

    return (
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative' }}
      >
        <Button
          color="inherit"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            px: 2,
            color: isActive ? ACTIVE_COLOR : 'white',
            position: 'relative',
            '&:hover': {
              color: HOVER_COLOR,
              '&::after': {
                width: '100%',
              },
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: isActive ? '100%' : '0%',
              height: '3px',
              backgroundColor: HOVER_COLOR,
              transition: 'all 0.3s ease',
              transform: 'translateX(-50%)',
            },
          }}
        >
          {item.title}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setIsMenuOpen(false);
            setAnchorEl(null);
          }}
          PaperProps={{
            onMouseEnter: () => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            },
            onMouseLeave: () => {
              setIsMenuOpen(false);
              setAnchorEl(null);
            },
            sx: {
              mt: 1.5,
              minWidth: 800,
              maxWidth: 1000,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            },
          }}
          MenuListProps={{
            sx: {
              p: 0,
              bgcolor: 'background.paper',
            },
          }}
        >
          <Grid container>
            {(item.submenu || []).map((submenu) => (
              <Grid item xs={6} key={submenu.title}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRight: '1px solid',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.02)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'primary.main',
                      fontSize: '1.1rem',
                    }}
                  >
                    {submenu.title}
                  </Typography>
                  {submenu.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {submenu.description}
                    </Typography>
                  )}
                  <List sx={{ p: 0 }}>
                    {(submenu.items || []).map((subItem) => (
                      <ListItem
                        key={subItem.path}
                        component={RouterLink}
                        to={subItem.path}
                        sx={{
                          py: 1,
                          px: 0,
                          borderRadius: 1,
                          cursor: 'pointer',
                          '&:hover': {
                            bgcolor: 'transparent',
                            '& .MuiTypography-root': {
                              color: 'primary.main',
                            },
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          secondary={subItem.description}
                          primaryTypographyProps={{
                            sx: {
                              fontWeight: 500,
                              color: 'text.primary',
                              transition: 'color 0.2s ease',
                            },
                          }}
                          secondaryTypographyProps={{
                            sx: {
                              color: 'text.secondary',
                              fontSize: '0.75rem',
                              mt: 0.5,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Menu>
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{ 
          bgcolor: '#2B3990',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Necotium"
                sx={{ 
                  height: { xs: 40, md: 50 },
                  mr: 2,
                }}
              />
            </RouterLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((item) => (
                <DesktopMenuItem key={item.title} item={item} />
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  px: 3,
                  py: 1,
                  color: 'white',
                  borderColor: 'white',
                  borderWidth: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    color: HOVER_COLOR,
                    borderColor: HOVER_COLOR,
                    backgroundColor: 'rgba(196, 214, 0, 0.1)',
                  },
                }}
              >
                Comece um projeto
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>



      <SwipeableDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        <Box 
          sx={{ 
            p: 2, 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: '#2B3990',
            color: 'white'
          }}
        >
          <RouterLink to="/" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src="/logo.png"
              alt="Necotium"
              sx={{ height: 50 }}
            />
          </RouterLink>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              '&:hover': {
                color: HOVER_COLOR,
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ p: 0 }}>
          {menuItems.map((item) => (
            <MobileMenuItem key={item.title} item={item} onClose={handleDrawerToggle} />
          ))}
          <ListItem
            component={RouterLink}
            to="/contact"
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:hover': {
                backgroundColor: HOVER_BG,
              },
            }}
          >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText
              primary="Comece um projeto"
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        </List>
      </SwipeableDrawer>

      {/* Spacer for content */}
      <Toolbar />
    </Box>
  );
};

export default Navbar; 