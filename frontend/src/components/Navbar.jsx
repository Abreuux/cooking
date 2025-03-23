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
    text: 'Empresas',
    path: '/empresas',
    icon: <BusinessIcon />,
  },
  {
    text: 'Governo',
    path: '/governo',
    icon: <AccountBalanceIcon />,
  },
  {
    text: 'Produtos',
    path: '/produtos',
    icon: <StorageIcon />,
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
  const MobileMenuItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const handleClick = () => {
      if (item.submenu) {
        setIsSubmenuOpen(!isSubmenuOpen);
      } else {
        handleDrawerToggle();
      }
    };

    return (
      <>
        <ListItem
          button
          onClick={handleClick}
          sx={{
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundColor: isActive ? ACTIVE_BG : 'transparent',
            '&:hover': {
              backgroundColor: HOVER_BG,
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ 
            color: isActive ? ACTIVE_COLOR : 'inherit',
            minWidth: 40,
            transition: 'color 0.2s ease-in-out',
          }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                color: isActive ? ACTIVE_COLOR : 'inherit',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s ease-in-out',
              },
            }}
          />
          {item.submenu && (
            <Box
              component="span"
              sx={{
                transform: isSubmenuOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              ▼
            </Box>
          )}
        </ListItem>
        {item.submenu && (
          <Box
            sx={{
              maxHeight: isSubmenuOpen ? '1000px' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out',
            }}
          >
            <List sx={{ pl: 4, bgcolor: 'background.paper' }}>
              {item.submenu.map((submenu, subIndex) => (
                <Box key={subIndex}>
                  <Typography
                    variant="subtitle2"
                    sx={{ 
                      px: 2,
                      py: 1,
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    {submenu.text}
                  </Typography>
                  {submenu.items.map((subItem, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      button
                      component={RouterLink}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        py: 1.5,
                        pl: 2,
                        '&:hover': {
                          backgroundColor: HOVER_BG,
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <ListItemText 
                        primary={subItem.text}
                        secondary={subItem.description}
                        primaryTypographyProps={{
                          variant: 'body2',
                          fontWeight: 500,
                        }}
                        secondaryTypographyProps={{
                          variant: 'caption',
                          sx: { 
                            color: 'text.secondary',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Box>
        )}
      </>
    );
  };

  // Desktop menu item component
  const DesktopMenuItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    
    return (
      <Button
        component={RouterLink}
        to={item.path}
        onClick={(e) => handleMenuOpen(e, item)}
        sx={{
          px: 2,
          py: 3,
          color: isActive ? ACTIVE_COLOR : 'white',
          fontSize: '0.95rem',
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
            width: isActive ? '100%' : '0%',
            height: '3px',
            backgroundColor: ACTIVE_COLOR,
            transition: 'all 0.3s ease',
            transform: 'translateX(-50%)',
          },
          '&:hover::after': {
            width: '100%'
          }
        }}
      >
        {item.text}
      </Button>
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

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
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
        sx={{
          '& .MuiPaper-root': {
            width: '90%',
            maxWidth: '800px',
            mt: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
          }
        }}
      >
        <Grid container spacing={2} sx={{ p: 2 }}>
          {menuItems.find(item => item.text === 'Soluções')?.submenu.map((submenu, index) => (
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
              sx={{ height: 40 }}
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
            <MobileMenuItem key={item.text} item={item} />
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