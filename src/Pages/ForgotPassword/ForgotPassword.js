import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography, useTheme, IconButton } from '@mui/material';
import { ColorModeContext } from '../theme';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase'; // Correct import path
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';
import { ArrowBack, Brightness4, Brightness7 } from '@mui/icons-material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const theme = useTheme(); // Use the useTheme hook to access the theme
  const colorMode = useContext(ColorModeContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your inbox.');
    } catch (error) {
      setMessage('Error sending reset email: ' + error.message);
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      bgcolor={theme.palette.background.default}
    >
      <Box 
        position="absolute" 
        top={16} 
        right={16} 
        display="flex" 
        alignItems="center"
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/" 
          sx={{ marginLeft: 2 }}
          startIcon={<ArrowBack />}
        >
          Back to Login
        </Button>
      </Box>

      <Typography variant="h4" color={theme.palette.text.primary} gutterBottom>
        Forgot Password
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<Send />}
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            marginTop: 2,
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          Send Reset Link
        </Button>
      </form>

      {message && <Typography variant="body1" color={theme.palette.text.secondary} style={{ marginTop: 20 }}>{message}</Typography>}
    </Box>
  );
};

export default ForgotPassword;
