import React from 'react';
import {
  Dialog,
<<<<<<< HEAD
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Fade,
  useTheme,
=======
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
>>>>>>> 67bdb0d036734245ba7170169a0011cfbb70c7fe
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

<<<<<<< HEAD
const SuccessMessage = ({ 
  open, 
  onClose, 
  title = "Mensagem enviada com sucesso!", 
  message = "Entraremos em contato em breve.",
  actionText = "Continuar navegando",
  showCloseButton = true 
}) => {
  const theme = useTheme();

=======
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
>>>>>>> 67bdb0d036734245ba7170169a0011cfbb70c7fe
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
<<<<<<< HEAD
      TransitionComponent={Fade}
      TransitionProps={{
        timeout: 500,
      }}
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'visible',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        },
      }}
    >
      {showCloseButton && (
        <IconButton
=======
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
>>>>>>> 67bdb0d036734245ba7170169a0011cfbb70c7fe
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
<<<<<<< HEAD
            color: 'grey.500',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'grey.100',
            },
=======
            color: (theme) => theme.palette.grey[500],
>>>>>>> 67bdb0d036734245ba7170169a0011cfbb70c7fe
          }}
        >
          <CloseIcon />
        </IconButton>
<<<<<<< HEAD
      )}

      <DialogContent sx={{ textAlign: 'center', py: 6, px: 4 }}>
        {/* Success Icon */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: theme.palette.success.light,
            mb: 3,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: theme.palette.success.light,
              opacity: 0.3,
              animation: 'pulse 2s infinite',
            },
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 48,
              color: theme.palette.success.main,
              zIndex: 1,
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Message */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 400,
            mx: 'auto',
          }}
        >
          {message}
        </Typography>

        {/* Action Button */}
        <Button
          variant="contained"
          onClick={onClose}
          size="large"
          sx={{
            borderRadius: 2,
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
            boxShadow: '0 4px 12px rgba(43, 57, 144, 0.3)',
            '&:hover': {
              background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
              boxShadow: '0 6px 16px rgba(43, 57, 144, 0.4)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {actionText}
        </Button>
      </DialogContent>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
=======
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
>>>>>>> 67bdb0d036734245ba7170169a0011cfbb70c7fe
    </Dialog>
  );
};

export default SuccessMessage;
