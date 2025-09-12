import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Success Message Dialog Component
 * Displays a success message in a modal dialog
 */
const SuccessMessage = ({ 
  open, 
  onClose, 
  title = "Sucesso!", 
  message = "Operação realizada com sucesso!",
  buttonText = "Fechar"
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          textAlign: 'center',
          p: 2,
        }
      }}
    >
      <DialogTitle sx={{ position: 'relative', pb: 1 }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 0 }}>
        <Box sx={{ mb: 2 }}>
          <CheckCircleIcon 
            sx={{ 
              fontSize: 64, 
              color: 'success.main',
              mb: 2 
            }} 
          />
        </Box>
        
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'text.primary' }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {message}
        </Typography>
      </DialogContent>
      
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          size="large"
          sx={{ 
            minWidth: 120,
            borderRadius: 2,
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessMessage;
