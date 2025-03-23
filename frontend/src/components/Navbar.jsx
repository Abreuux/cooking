import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Collapse,
  Paper,
  Grid,
  Menu,
  MenuItem,
  useScrollTrigger,
  Fade,
  SwipeableDrawer,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorageIcon from '@mui/icons-material/Storage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import { motion, AnimatePresence } from 'framer-motion';

// Style constants
const HOVER_COLOR = '#C4D600';
const ACTIVE_COLOR = '#C4D600';
const HOVER_BG = 'rgba(196, 214, 0, 0.1)';
const ACTIVE_BG = 'rgba(196, 214, 0, 0.2)';

const menuItems = [
  {
    text: 'Empresas',
    path: '/empresas',
    icon: <BusinessIcon />,
    sections: [
      {
        title: 'Soluções',
        items: [
          {
            name: 'Analytics Suite',
            description: 'Conjunto completo de análise de dados empresariais',
            path: '/solucoes/analytics-suite'
          },
          {
            name: 'Business Automation',
            description: 'Automação inteligente de processos empresariais',
            path: '/solucoes/business-automation'
          },
          {
            name: 'Data Intelligence',
            description: 'Inteligência de dados para tomada de decisão',
            path: '/solucoes/data-intelligence'
          }
        ]
      },
      {
        title: 'Produtos',
        items: [
          {
            name: 'DataInsights',
            description: 'Análise preditiva e insights estratégicos',
            path: '/produtos/datainsights'
          },
          {
            name: 'ProcessAutomation',
            description: 'Automação inteligente de processos',
            path: '/produtos/processautomation'
          },
          {
            name: 'SmartWorkflow',
            description: 'Fluxos de trabalho automatizados',
            path: '/produtos/smartworkflow'
          },
          {
            name: 'DataProtect',
            description: 'Proteção e governança de dados',
            path: '/produtos/dataprotect'
          }
        ]
      }
    ]
  },
  {
    text: 'Governo',
    path: '/governo',
    icon: <AccountBalanceIcon />,
    sections: [
      {
        title: 'Soluções',
        items: [
          {
            name: 'Smart City Suite',
            description: 'Gestão integrada para cidades inteligentes',
            path: '/solucoes/smart-city'
          },
          {
            name: 'Public Intelligence',
            description: 'Inteligência de dados para gestão pública',
            path: '/solucoes/public-intelligence'
          },
          {
            name: 'Gov Security',
            description: 'Segurança e conformidade governamental',
            path: '/solucoes/gov-security'
          }
        ]
      },
      {
        title: 'Produtos',
        items: [
          {
            name: 'CityDataHub',
            description: 'Plataforma centralizada para análise de dados municipais',
            path: '/produtos/citydatahub'
          },
          {
            name: 'GovInsights',
            description: 'Gestão pública baseada em dados',
            path: '/produtos/govinsights'
          },
          {
            name: 'CityServices',
            description: 'Plataforma de serviços municipais',
            path: '/produtos/cityservices'
          },
          {
            name: 'CityPredict',
            description: 'Análise preditiva para serviços públicos',
            path: '/produtos/citypredict'
          },
          {
            name: 'SecureGov',
            description: 'Segurança e conformidade para governo',
            path: '/produtos/securegov'
          }
        ]
      }
    ]
  },
  {
    text: 'Produtos',
    path: '/produtos',
    icon: <StorageIcon />,
    sections: [
      {
        title: 'Análise de Dados',
        items: [
          {
            name: 'DataInsights',
            description: 'Análise avançada de dados empresariais',
            path: '/produtos/datainsights'
          },
          {
            name: 'CityDataHub',
            description: 'Plataforma integrada de dados urbanos',
            path: '/produtos/citydatahub'
          }
        ]
      },
      {
        title: 'Automação',
        items: [
          {
            name: 'ProcessAutomation',
            description: 'Automação de processos empresariais',
            path: '/produtos/processautomation'
          },
          {
            name: 'SmartWorkflow',
            description: 'Gestão inteligente de workflows',
            path: '/produtos/smartworkflow'
          }
        ]
      },
      {
        title: 'Domínio Público',
        items: [
          {
            name: 'GovInsights',
            description: 'Análise de dados governamentais',
            path: '/produtos/govinsights'
          },
          {
            name: 'CityServices',
            description: 'Gestão de serviços municipais',
            path: '/produtos/cityservices'
          },
          {
            name: 'CityPredict',
            description: 'Previsão de demandas urbanas',
            path: '/produtos/citypredict'
          }
        ]
      },
      {
        title: 'Segurança',
        items: [
          {
            name: 'SecureGov',
            description: 'Segurança para instituições governamentais',
            path: '/produtos/securegov'
          },
          {
            name: 'DataProtect',
            description: 'Proteção e governança de dados',
            path: '/produtos/dataprotect'
          }
        ]
      }
    ]
  },
  {
    text: 'Soluções',
    path: '/solucoes',
    icon: <AnalyticsIcon />,
    sections: [
      {
        title: 'Soluções Empresariais',
        items: [
          {
            name: 'Analytics Suite',
            description: 'Análise avançada de dados empresariais',
            path: '/solucoes/analytics-suite'
          },
          {
            name: 'Business Automation',
            description: 'Automação inteligente de processos',
            path: '/solucoes/business-automation'
          },
          {
            name: 'Data Intelligence',
            description: 'Inteligência de dados para decisões estratégicas',
            path: '/solucoes/data-intelligence'
          }
        ]
      },
      {
        title: 'Soluções Governamentais',
        items: [
          {
            name: 'Smart City Suite',
            description: 'Gestão integrada de cidades inteligentes',
            path: '/solucoes/smart-city'
          },
          {
            name: 'Public Intelligence',
            description: 'Inteligência para gestão pública',
            path: '/solucoes/public-intelligence'
          },
          {
            name: 'Gov Security',
            description: 'Segurança e conformidade governamental',
            path: '/solucoes/gov-security'
          }
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
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const location = useLocation();

  // Fechar o menu mobile quando mudar de rota
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const MobileMenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);
    const isActive = location.pathname === item.path;

    const handleClick = () => {
      if (item.sections) {
        setOpen(!open);
      } else {
        handleDrawerToggle();
      }
    };

    return (
      <>
        <ListItem
          button
          onClick={handleClick}
          component={item.sections ? 'div' : RouterLink}
          to={item.sections ? undefined : item.path}
          sx={{
            py: 1.5,
            color: isActive ? ACTIVE_COLOR : 'text.primary',
            '&:hover': {
              backgroundColor: HOVER_BG,
              '& .MuiListItemIcon-root': {
                color: HOVER_COLOR,
              },
              '& .MuiListItemText-primary': {
                color: HOVER_COLOR,
              },
            },
          }}
        >
          <ListItemIcon 
            sx={{ 
              color: isActive ? ACTIVE_COLOR : 'text.primary',
              minWidth: 40,
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              fontWeight: 500,
              fontSize: '1rem',
            }}
          />
          {item.sections && (
            <KeyboardArrowDownIcon
              sx={{
                transform: open ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
                color: open ? ACTIVE_COLOR : 'text.primary',
              }}
            />
          )}
        </ListItem>
        {item.sections && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.sections.map((section, sectionIndex) => (
                <Box key={sectionIndex} sx={{ pl: 2, pr: 2, pb: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.secondary',
                      py: 1,
                      pl: 2,
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.items.map((subItem, subItemIndex) => (
                    <ListItem
                      key={subItemIndex}
                      button
                      component={RouterLink}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        '&:hover': {
                          backgroundColor: HOVER_BG,
                          '& .MuiTypography-root': {
                            color: HOVER_COLOR,
                          },
                        },
                      }}
                    >
                      <ListItemText 
                        primary={subItem.name}
                        secondary={subItem.description}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'text.primary',
                        }}
                        secondaryTypographyProps={{
                          fontSize: '0.75rem',
                          color: 'text.secondary',
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  };

  // Desktop menu item component
  const DesktopMenuItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <Box
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        sx={{ position: 'relative' }}
      >
        <Button
          component={RouterLink}
          to={item.path}
          sx={{
            px: 2,
            py: 3,
            color: isActive ? ACTIVE_COLOR : 'white',
            fontSize: '0.95rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            textTransform: 'none',
            borderRadius: 0,
            height: 72,
            position: 'relative',
            '&:hover': {
              backgroundColor: 'transparent',
              color: HOVER_COLOR,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: isActive || isHovered ? '100%' : '0%',
              height: '3px',
              backgroundColor: ACTIVE_COLOR,
              transition: 'all 0.3s ease',
              transform: 'translateX(-50%)',
            }
          }}
        >
          {item.text}
        </Button>

        <AnimatePresence>
          {item.sections && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: -400,
                  width: '1000px',
                  bgcolor: 'white',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  p: 4,
                  zIndex: 1000,
                  borderRadius: 2,
                }}
              >
                <Grid container spacing={4}>
                  {item.sections.map((section) => (
                    <Grid item xs={item.sections.length > 2 ? 3 : 6} key={section.title}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {section.title}
                      </Typography>
                      {section.items.map((subItem) => (
                        <Box
                          key={subItem.name}
                          component={RouterLink}
                          to={subItem.path}
                          sx={{
                            display: 'block',
                            textDecoration: 'none',
                            mb: 2,
                            '&:hover': {
                              '& .product-name': {
                                color: theme.palette.primary.main,
                              },
                            },
                          }}
                        >
                          <Typography
                            className="product-name"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 500,
                              mb: 0.5,
                            }}
                          >
                            {subItem.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            {subItem.description}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: trigger ? 'background.paper' : 'transparent',
          boxShadow: trigger ? 1 : 'none',
          transition: 'all 0.3s ease',
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

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 'auto',
                  color: trigger ? 'text.primary' : 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {menuItems.map((item, index) => (
                  <DesktopMenuItem key={index} item={item} />
                ))}
                <Button
                  component={RouterLink}
                  to="/contato"
                  variant="contained"
                  sx={{
                    ml: 2,
                    backgroundColor: ACTIVE_COLOR,
                    '&:hover': {
                      backgroundColor: HOVER_COLOR,
                    },
                  }}
                >
                  Contato
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={() => setMobileOpen(true)}
        disableBackdropTransition
        disableDiscovery
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: '85%',
            maxWidth: 360,
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%',
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}>
            <RouterLink to="/" onClick={handleDrawerToggle}>
              <Box
                component="img"
                src="/logo.png"
                alt="Necotium"
                sx={{ height: 40 }}
              />
            </RouterLink>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ flex: 1, overflowY: 'auto', pt: 0 }}>
            {menuItems.map((item, index) => (
              <MobileMenuItem key={index} item={item} />
            ))}
          </List>

          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
            <Button
              fullWidth
              component={RouterLink}
              to="/contato"
              variant="contained"
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: ACTIVE_COLOR,
                color: 'white',
                py: 1.5,
                '&:hover': {
                  backgroundColor: HOVER_COLOR,
                },
              }}
              startIcon={<ContactMailIcon />}
            >
              Contato
            </Button>
          </Box>
        </Box>
      </SwipeableDrawer>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            borderTop: 1,
            borderColor: 'divider',
          }}
          elevation={3}
        >
          <BottomNavigation
            value={bottomNavValue}
            onChange={handleBottomNavChange}
            showLabels
            sx={{
              height: 64,
              '& .MuiBottomNavigationAction-root': {
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: ACTIVE_COLOR,
                },
              },
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              component={RouterLink}
              to="/"
              onClick={() => setBottomNavValue(0)}
            />
            <BottomNavigationAction
              label="Produtos"
              icon={<StorageIcon />}
              component={RouterLink}
              to="/produtos"
              onClick={() => setBottomNavValue(1)}
            />
            <BottomNavigationAction
              label="Soluções"
              icon={<AnalyticsIcon />}
              component={RouterLink}
              to="/solucoes"
              onClick={() => setBottomNavValue(2)}
            />
            <BottomNavigationAction
              label="Contato"
              icon={<ContactMailIcon />}
              component={RouterLink}
              to="/contato"
              onClick={() => setBottomNavValue(3)}
            />
          </BottomNavigation>
        </Paper>
      )}

      {/* Spacer for content */}
      <Toolbar />
      {isMobile && <Box sx={{ height: 64 }} />}
    </Box>
  );
};

export default Navbar; 