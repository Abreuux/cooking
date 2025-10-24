import React from 'react';
import { Box } from '@mui/material';
import DiagnosticBanner from '../../components/DiagnosticBanner';
import HeroSection from './components/HeroSection';
import AccessAnywhereSection from './components/AccessAnywhereSection';
import AIInsightsSection from './components/AIInsightsSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import RiskReducersSection from './components/RiskReducersSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';

const LandingDashboard = () => {
  return (
    <Box sx={{ overflow: 'hidden', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <DiagnosticBanner />
      <Box sx={{ mt: '124px' }}>
        <HeroSection />
      </Box>
    </Box>
  );
};

export default LandingDashboard;
