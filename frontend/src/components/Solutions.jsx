import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const iconMap = {
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  autorenew: AutorenewIcon,
};

const Solutions = ({ features }) => {
  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon];
        return (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}25`,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  <Icon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Solutions; 