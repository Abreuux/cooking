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
  MenuItem,
  Fade,
  Grid,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StorageIcon from '@mui/icons-material/Storage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion, AnimatePresence } from 'framer-motion';

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
        title: 'Análise Preditiva',
        description: 'Antecipe tendências e tome decisões baseadas em dados com nossa tecnologia de análise preditiva.',
        items: [
          { title: 'Machine Learning', path: '/empresas/machine-learning' },
          { title: 'Forecasting', path: '/empresas/forecasting' },
          { title: 'Análise de Tendências', path: '/empresas/analise-tendencias' }
        ]
      },
      {
        title: 'Business Intelligence',
        description: 'Transforme dados em insights acionáveis com nossas soluções de BI personalizadas.',
        items: [
          { title: 'Dashboards Interativos', path: '/empresas/dashboards' },
          { title: 'KPIs em Tempo Real', path: '/empresas/kpis' },
          { title: 'Relatórios Automatizados', path: '/empresas/relatorios' }
        ]
      },
      {
        title: 'Automação de Processos',
        description: 'Otimize suas operações com automação inteligente e workflows eficientes.',
        items: [
          { title: 'RPA', path: '/empresas/rpa' },
          { title: 'Workflow Automation', path: '/empresas/workflow' },
          { title: 'Integração de Sistemas', path: '/empresas/integracao' }
        ]
      },
      {
        title: 'Performance Management',
        description: 'Monitore e melhore o desempenho de sua empresa com métricas precisas.',
        items: [
          { title: 'Balanced Scorecard', path: '/empresas/balanced-scorecard' },
          { title: 'OKRs', path: '/empresas/okrs' },
          { title: 'Performance Analytics', path: '/empresas/performance-analytics' }
        ]
      }
    ]
  },
  {
    text: 'Governo',
    path: '/governo',
    icon: <AccountBalanceIcon />,
    submenu: [
      {
        text: 'Soluções Governamentais',
        items: [
          { text: 'Gestão Pública', path: '/governo/gestao', description: 'Soluções para gestão pública' },
          { text: 'Cidades Inteligentes', path: '/governo/smart-city', description: 'Gestão de cidades inteligentes' },
          { text: 'Segurança', path: '/governo/seguranca', description: 'Segurança e conformidade governamental' },
          { text: 'MuniProcess', path: '/governo/muniprocess', description: 'Automação de processos municipais' },
          { text: 'CityAutomation', path: '/governo/cityautomation', description: 'Automação de serviços públicos' },
          { text: 'ServiceCapacity', path: '/governo/servicecapacity', description: 'Gestão de capacidade de serviços' },
        ]
      }
    ]
  },
  {
    text: 'Produtos',
    path: '/produtos',
    icon: <StorageIcon />,
    submenu: [
      {
        text: 'Nossos Produtos',
        items: [
          { text: 'CityDataHub', path: '/produtos/citydatahub', description: 'Plataforma de dados municipais' },
          { text: 'CityPredict', path: '/produtos/citypredict', description: 'Análise preditiva para cidades' },
          { text: 'DataInsights', path: '/produtos/datainsights', description: 'Insights de dados empresariais' },
          { text: 'PerformanceAnalytics', path: '/produtos/performanceanalytics', description: 'Análise de performance' },
          { text: 'ProcessAutomation', path: '/produtos/processautomation', description: 'Automação de processos' },
          { text: 'SmartWorkflow', path: '/produtos/smartworkflow', description: 'Workflow inteligente' },
          { text: 'GovInsights', path: '/produtos/govinsights', description: 'Insights governamentais' },
          { text: 'CityServices', path: '/produtos/cityservices', description: 'Serviços para cidades' },
          { text: 'SecureGov', path: '/produtos/securegov', description: 'Segurança governamental' },
          { text: 'DataProtect', path: '/produtos/dataprotect', description: 'Proteção de dados' },
        ]
      }
    ]
  },
  {
    text: 'Soluções',
    path: '/solucoes',
    icon: <AnalyticsIcon />,
    submenu: [
      {
        text: 'Soluções Empresariais',
        items: [
          { text: 'Analytics Suite', path: '/solucoes/analytics-suite', description: 'Análise avançada de dados empresariais' },
          { text: 'Business Automation', path: '/solucoes/business-automation', description: 'Automação inteligente de processos' },
          { text: 'Data Intelligence', path: '/solucoes/data-intelligence', description: 'Inteligência de dados para decisões estratégicas' },
        ]
      },
      {
        text: 'Soluções Governamentais',
        items: [
          { text: 'Smart City Suite', path: '/solucoes/smart-city', description: 'Gestão integrada de cidades inteligentes' },
          { text: 'Public Intelligence', path: '/solucoes/public-intelligence', description: 'Inteligência para gestão pública' },
          { text: 'Gov Security', path: '/solucoes/gov-security', description: 'Segurança e conformidade governamental' },
        ]
      }
    ]
  }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setAnchorEl(null);
    setSelectedSubmenu(null);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, item) => {
    if (item.submenu) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedSubmenu(null);
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
      <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <ListItem
          button
          onClick={handleToggle}
          sx={{
            py: 2,
            px: 3,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              sx: {
                color: 'white',
                fontWeight: 500,
                fontSize: '1.1rem',
              },
            }}
          />
          <Box
            component="span"
            sx={{
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease',
              color: 'white',
            }}
          >
            ▼
          </Box>
        </ListItem>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 3, pr: 2 }}>
            {item.submenu?.map((submenu) => (
              <Box key={submenu.title}>
                <ListItem
                  button
                  onClick={() => handleSubmenuToggle(submenu.title)}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={submenu.title}
                    secondary={submenu.description}
                    primaryTypographyProps={{
                      sx: {
                        color: 'white',
                        fontWeight: 500,
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.85rem',
                      },
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      transform: activeSubmenu === submenu.title ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'white',
                    }}
                  >
                    ▼
                  </Box>
                </ListItem>

                <Collapse in={activeSubmenu === submenu.title} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 2 }}>
                    {submenu.items?.map((subItem) => (
                      <ListItem
                        key={subItem.path}
                        button
                        component={RouterLink}
                        to={subItem.path}
                        onClick={onClose}
                        sx={{
                          py: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            sx: {
                              color: 'white',
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
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMouseEnter = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
      setAnchorEl(null);
      setActiveSubmenu(null);
    };

    const handleSubmenuEnter = (submenuTitle) => {
      setActiveSubmenu(submenuTitle);
    };

    const handleSubmenuLeave = () => {
      setActiveSubmenu(null);
    };

    const open = Boolean(anchorEl);

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
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          {item.title}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMouseLeave}
          PaperProps={{
            onMouseEnter: () => setAnchorEl(anchorEl),
            onMouseLeave: handleMouseLeave,
            sx: {
              mt: 1.5,
              minWidth: 600,
              maxWidth: 800,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
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
            {item.submenu?.map((submenu) => (
              <Grid item xs={6} key={submenu.title}>
                <Box
                  onMouseEnter={() => handleSubmenuEnter(submenu.title)}
                  onMouseLeave={handleSubmenuLeave}
                  sx={{
                    p: 2,
                    borderRight: '1px solid',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:last-child': {
                      borderRight: 'none',
                      borderBottom: 'none',
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {submenu.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem',
                    }}
                  >
                    {submenu.description}
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {submenu.items?.map((subItem) => (
                      <ListItem
                        key={subItem.path}
                        button
                        component={RouterLink}
                        to={subItem.path}
                        sx={{
                          py: 1,
                          px: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            sx: {
                              color: 'text.primary',
                              '&:hover': {
                                color: 'primary.main',
                              },
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
                <DesktopMenuItem key={item.text} item={item} />
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/contato"
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                Contato
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

      {/* Solutions Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
        MenuListProps={{
          onMouseLeave: handleMenuClose,
        }}
        sx={{
          '& .MuiPaper-root': {
            width: '90%',
            maxWidth: '800px',
            mt: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            transformOrigin: 'top center',
            transition: 'all 0.2s ease-in-out',
          }
        }}
      >
        <Grid container spacing={2} sx={{ p: 2 }}>
          {menuItems.find(item => item.text === selectedSubmenu)?.submenu.map((submenu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 1,
                  pl: 2
                }}
              >
                {submenu.text}
              </Typography>
              {submenu.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMenuClose}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: HOVER_BG,
                    }
                  }}
                >
                  <Box>
                    <Typography variant="body1" fontWeight={500}>
                      {item.text}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Grid>
          ))}
        </Grid>
      </Menu>

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
            <MobileMenuItem key={item.text} item={item} onClose={handleDrawerToggle} />
          ))}
          <ListItem
            button
            component={RouterLink}
            to="/contato"
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
              primary="Contato"
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