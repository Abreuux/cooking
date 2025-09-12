import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import AccessAnywhereSection from './components/AccessAnywhereSection';
import AIInsightsSection from './components/AIInsightsSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import CasesSection from './components/CasesSection';
import RiskReducersSection from './components/RiskReducersSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';

const LandingDashboard = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <HeroSection />
      <CasesSection />
      <AccessAnywhereSection />
      <AIInsightsSection />
      <ProblemsSection />
      <SolutionSection />
      <RiskReducersSection />
      <FAQSection />
      <FinalCTASection />
    </Box>
  );
};

export default LandingDashboard;
