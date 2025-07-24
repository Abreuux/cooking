import React from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Fade,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const SuccessMessage = ({ 
  open, 
  onClose, 
  title = "Mensagem enviada com sucesso!", 
  message = "Entraremos em contato em breve.",
  actionText = "Continuar navegando",
  showCloseButton = true 
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
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
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'grey.100',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
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
    </Dialog>
  );
};

export default SuccessMessage;
