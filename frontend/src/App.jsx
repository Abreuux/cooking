import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, CircularProgress, Fade } from '@mui/material';

// Core components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Eagerly loaded pages
import Home from './pages/Home';

// Prefetching function
const prefetchComponent = (importFn) => {
  importFn();
};

// Lazily loaded pages with better chunking - Main sections
const Empresas = lazy(() => import(/* webpackChunkName: "empresas" */ './pages/Empresas'));
const Governo = lazy(() => import(/* webpackChunkName: "governo" */ './pages/Governo'));
const Solutions = lazy(() => import(/* webpackChunkName: "solutions" */ './pages/Solutions'));
const SuccessCases = lazy(() => import(/* webpackChunkName: "success-cases" */ './pages/SuccessCases'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Demo = lazy(() => import(/* webpackChunkName: "demo" */ './pages/Demo'));

// Product and solution hubs
const ProdutosHome = lazy(() => import(/* webpackChunkName: "produtos-home" */ './pages/produtos/ProdutosHome'));
const SolucoesHome = lazy(() => import(/* webpackChunkName: "solucoes-home" */ './pages/solucoes/SolucoesHome'));

// Solution pages
const AnalyticsSuite = lazy(() => import(/* webpackChunkName: "analytics-suite" */ './pages/solucoes/AnalyticsSuite'));
const BusinessAutomation = lazy(() => import(/* webpackChunkName: "business-automation" */ './pages/solucoes/BusinessAutomation'));
const DataIntelligence = lazy(() => import(/* webpackChunkName: "data-intelligence" */ './pages/solucoes/DataIntelligence'));
const SmartCity = lazy(() => import(/* webpackChunkName: "smart-city" */ './pages/solucoes/SmartCity'));
const PublicIntelligence = lazy(() => import(/* webpackChunkName: "public-intelligence" */ './pages/solucoes/PublicIntelligence'));
const GovSecurity = lazy(() => import(/* webpackChunkName: "gov-security" */ './pages/solucoes/GovSecurity'));

// Product pages
const CityDataHub = lazy(() => import(/* webpackChunkName: "city-data-hub" */ './pages/produtos/CityDataHub'));
const CityPredict = lazy(() => import(/* webpackChunkName: "city-predict" */ './pages/produtos/CityPredict'));
const DataInsights = lazy(() => import(/* webpackChunkName: "data-insights" */ './pages/produtos/DataInsights'));
const PerformanceAnalytics = lazy(() => import(/* webpackChunkName: "performance-analytics" */ './pages/produtos/PerformanceAnalytics'));
const ProcessAutomation = lazy(() => import(/* webpackChunkName: "process-automation" */ './pages/produtos/ProcessAutomation'));
const SmartWorkflow = lazy(() => import(/* webpackChunkName: "smart-workflow" */ './pages/produtos/SmartWorkflow'));
const GovInsights = lazy(() => import(/* webpackChunkName: "gov-insights" */ './pages/produtos/GovInsights'));
const CityServices = lazy(() => import(/* webpackChunkName: "city-services" */ './pages/produtos/CityServices'));
const SecureGov = lazy(() => import(/* webpackChunkName: "secure-gov" */ './pages/produtos/SecureGov'));
const DataProtect = lazy(() => import(/* webpackChunkName: "data-protect" */ './pages/produtos/DataProtect'));

// Utility pages
const Sitemap = lazy(() => import(/* webpackChunkName: "sitemap" */ './pages/Sitemap'));

// Loading component with animation
const LoadingFallback = () => (
  <Fade in={true} style={{ transitionDelay: '300ms' }}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <CircularProgress color="primary" size={60} thickness={4} />
    </Box>
  </Fade>
);

// Prefetch components on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Prefetch related components based on current route
    if (pathname === '/') {
      prefetchComponent(() => import('./pages/Empresas'));
      prefetchComponent(() => import('./pages/Governo'));
      prefetchComponent(() => import('./pages/produtos/ProdutosHome'));
    } else if (pathname.includes('/produtos')) {
      prefetchComponent(() => import('./pages/produtos/ProdutosHome'));
    } else if (pathname.includes('/solucoes')) {
      prefetchComponent(() => import('./pages/solucoes/SolucoesHome'));
    }
  }, [pathname]);

  return null;
};

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#2B3990',
      light: '#5A67B8',
      dark: '#1E2866',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C4D600',
      light: '#D6E333',
      dark: '#9CA800',
      contrastText: '#000000',
    },
    accent: {
      main: '#E6007E',
      light: '#FF4DAE',
      dark: '#B00062',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '0em',
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.0075em',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.57,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          letterSpacing: 0,
          lineHeight: 1.75,
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.05)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0,0,0,0.08)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0,0,0,0.08)',
    '0 4px 12px rgba(0,0,0,0.1)',
    '0 8px 16px rgba(0,0,0,0.12)',
    '0 12px 24px rgba(0,0,0,0.14)',
    ...Array(20).fill('none'),
  ],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/governo" element={<Governo />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/success-cases" element={<SuccessCases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            
            {/* Main Product and Solution Routes */}
            <Route path="/produtos" element={<ProdutosHome />} />
            <Route path="/solucoes" element={<SolucoesHome />} />
            
            {/* Solution Routes */}
            <Route path="/solucoes/analytics-suite" element={<AnalyticsSuite />} />
            <Route path="/solucoes/business-automation" element={<BusinessAutomation />} />
            <Route path="/solucoes/data-intelligence" element={<DataIntelligence />} />
            <Route path="/solucoes/smart-city" element={<SmartCity />} />
            <Route path="/solucoes/public-intelligence" element={<PublicIntelligence />} />
            <Route path="/solucoes/gov-security" element={<GovSecurity />} />
            
            {/* Product Routes */}
            <Route path="/produtos/citydatahub" element={<CityDataHub />} />
            <Route path="/produtos/citypredict" element={<CityPredict />} />
            <Route path="/produtos/datainsights" element={<DataInsights />} />
            <Route path="/produtos/performanceanalytics" element={<PerformanceAnalytics />} />
            <Route path="/produtos/processautomation" element={<ProcessAutomation />} />
            <Route path="/produtos/smartworkflow" element={<SmartWorkflow />} />
            <Route path="/produtos/govinsights" element={<GovInsights />} />
            <Route path="/produtos/cityservices" element={<CityServices />} />
            <Route path="/produtos/securegov" element={<SecureGov />} />
            <Route path="/produtos/dataprotect" element={<DataProtect />} />
            
            {/* Utility Routes */}
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
