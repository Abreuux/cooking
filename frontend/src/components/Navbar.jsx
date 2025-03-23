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
          }}
        >
          <ListItemIcon sx={{ color: isActive ? ACTIVE_COLOR : 'inherit' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                color: isActive ? ACTIVE_COLOR : 'inherit',
                fontWeight: isActive ? 600 : 400,
              },
            }}
          />
        </ListItem>
        {item.submenu && isSubmenuOpen && (
          <List sx={{ pl: 4, bgcolor: 'background.paper' }}>
            {item.submenu.map((submenu, subIndex) => (
              <Box key={subIndex}>
                <Typography
                  variant="subtitle2"
                  sx={{ 
                    px: 2,
                    py: 1,
                    color: 'text.secondary',
                    fontWeight: 600
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
                      py: 1,
                      pl: 2,
                      '&:hover': {
                        backgroundColor: HOVER_BG,
                      },
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
                        sx: { color: 'text.secondary' }
                      }}
                    />
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
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
          borderBottom: '1px solid rgba(255,255,255,0.1)'
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
                sx={{ ml: 'auto' }}
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

      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={() => setMobileOpen(true)}
        PaperProps={{
          sx: {
            width: '85%',
            maxWidth: 360,
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

      {/* Spacer for content */}
      <Toolbar />
    </Box>
  );
};

export default Navbar; 