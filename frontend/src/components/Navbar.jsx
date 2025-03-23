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
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [bottomValue, setBottomValue] = useState(0);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Mobile menu item component
  const MobileMenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);
    const isActive = location.pathname === item.path;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <ListItem
          button
          onClick={() => item.sections ? setOpen(!open) : null}
          component={item.sections ? 'div' : RouterLink}
          to={item.sections ? null : item.path}
          sx={{
            py: 2,
            borderRadius: 1,
            mb: 1,
            '&:hover': {
              bgcolor: HOVER_BG,
            },
            ...(isActive && {
              bgcolor: ACTIVE_BG,
            }),
          }}
        >
          <ListItemIcon sx={{ color: isActive ? ACTIVE_COLOR : 'primary.main' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              fontWeight: 600,
              color: isActive ? ACTIVE_COLOR : 'text.primary'
            }}
          />
          {item.sections && (
            <KeyboardArrowDownIcon 
              sx={{ 
                transform: open ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s'
              }}
            />
          )}
        </ListItem>

        {item.sections && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.sections.map((section) => (
                <Box key={section.title} sx={{ pl: 4, mb: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.items.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      button
                      component={RouterLink}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        py: 1,
                        borderRadius: 1,
                        '&:hover': {
                          bgcolor: HOVER_BG,
                        },
                      }}
                    >
                      <ListItemText
                        primary={subItem.name}
                        secondary={subItem.description}
                        primaryTypographyProps={{
                          variant: 'body2',
                          fontWeight: 500,
                        }}
                        secondaryTypographyProps={{
                          variant: 'caption',
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Collapse>
        )}
      </motion.div>
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
          setHoveredItem(item.text);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredItem(null);
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
          {item.sections && hoveredItem === item.text && (
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
    <>
      <AppBar
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        position="fixed"
        sx={{
          background: trigger ? 'rgba(43, 57, 144, 0.98)' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          boxShadow: trigger ? 4 : 'none',
          borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            >
              <img
                src="/images/logo.png"
                alt="Necotium"
                style={{
                  height: isMobile ? '40px' : '60px',
                  width: 'auto',
                  transition: 'height 0.3s ease'
                }}
              />
            </Box>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {menuItems.map((item) => (
                  <DesktopMenuItem key={item.text} item={item} />
                ))}
              </Box>
            )}

            {/* Action Buttons */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(196, 214, 0, 0.5)',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: HOVER_COLOR,
                      color: HOVER_COLOR,
                      background: HOVER_BG,
                    },
                  }}
                >
                  Contato
                </Button>
                <Button
                  component={RouterLink}
                  to="/demo"
                  variant="contained"
                  sx={{
                    bgcolor: '#C4D600',
                    color: '#313992',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(196, 214, 0, 0.9)',
                    },
                  }}
                >
                  Demo
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
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 360,
            background: 'rgba(43, 57, 144, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <img
              src="/images/logo.png"
              alt="Necotium"
              style={{ height: '40px', width: 'auto' }}
            />
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <MobileMenuItem key={item.text} item={item} />
            ))}
          </List>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              fullWidth
              sx={{
                color: 'white',
                borderColor: 'rgba(196, 214, 0, 0.5)',
                fontWeight: 600,
                '&:hover': {
                  borderColor: HOVER_COLOR,
                  color: HOVER_COLOR,
                  background: HOVER_BG,
                },
              }}
            >
              Contato
            </Button>
            <Button
              component={RouterLink}
              to="/demo"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#C4D600',
                color: '#313992',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(196, 214, 0, 0.9)',
                },
              }}
            >
              Demo
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
            zIndex: 1000,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          elevation={3}
        >
          <BottomNavigation
            value={bottomValue}
            onChange={handleBottomNavChange}
            sx={{
              bgcolor: 'rgba(43, 57, 144, 0.98)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <BottomNavigationAction
              component={RouterLink}
              to="/"
              label="Home"
              icon={<HomeIcon />}
              sx={{ color: 'white' }}
            />
            <BottomNavigationAction
              component={RouterLink}
              to="/produtos"
              label="Produtos"
              icon={<StorageIcon />}
              sx={{ color: 'white' }}
            />
            <BottomNavigationAction
              component={RouterLink}
              to="/solucoes"
              label="Soluções"
              icon={<AnalyticsIcon />}
              sx={{ color: 'white' }}
            />
            <BottomNavigationAction
              component={RouterLink}
              to="/contact"
              label="Contato"
              icon={<ContactMailIcon />}
              sx={{ color: 'white' }}
            />
          </BottomNavigation>
        </Paper>
      )}

      <Toolbar sx={{ minHeight: { xs: 56, md: 72 } }} />
      {isMobile && <Box sx={{ height: 56 }} />} {/* Espaço para bottom navigation */}
    </>
  );
};

export default Navbar; 