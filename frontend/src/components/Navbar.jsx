import React, { useState } from 'react';
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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Mobile menu item component
  const MobileMenuItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    
    return (
      <ListItem
        button
        component={RouterLink}
        to={item.path}
        onClick={handleDrawerToggle}
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
      </ListItem>
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
            '&:hover': {
              backgroundColor: 'transparent',
              color: HOVER_COLOR,
            },
          }}
        >
          {item.text}
        </Button>

        {item.sections && hoveredItem === item.text && (
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
        )}
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(43, 57, 144, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: trigger ? 4 : 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 2,
                ml: '-132px',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Necotium"
                style={{
                  height: '60px',
                  width: 'auto'
                }}
              />
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            >
              <img
                src="/images/logo.png"
                alt="Necotium"
                style={{
                  height: '32px',
                  width: 'auto'
                }}
              />
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((item) => (
                <DesktopMenuItem key={item.text} item={item} />
              ))}
            </Box>

            {/* Action Buttons */}
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
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        PaperProps={{
          sx: {
            background: 'rgba(43, 57, 144, 0.98)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(196, 214, 0, 0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            mt: 1,
            '& .MuiMenuItem-root': {
              padding: '12px 24px',
            },
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem 
            key={item.path}
            onClick={handleCloseNavMenu}
            component={RouterLink}
            to={item.path}
            sx={{
              color: 'white',
              borderRadius: '8px',
              mx: 1,
              '&:hover': {
                background: HOVER_BG,
              },
              ...(location.pathname === item.path && {
                background: ACTIVE_BG,
                color: ACTIVE_COLOR,
              }),
            }}
          >
            <Typography 
              textAlign="center" 
              sx={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
              }}
            >
              {item.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      <Toolbar sx={{ minHeight: { xs: 56, md: 72 } }} />
    </>
  );
};

export default Navbar; 