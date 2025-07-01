//Loginpage.jsx
import React, { useState } from 'react';
import '../pages/styles/AuthPage.css';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Link
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

// ✅ Updated: Import AuthContext
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Updated: Use login from AuthContext
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password); // ✅ Updated
  };

  const handleFacebookLogin = () => {
    alert('Logging in with Facebook');
  };

  const handleGoogleLogin = () => {
    alert('Logging in with Google...');
  };

  return (
    <Box className="auth-box">
      <Paper elevation={3} className="auth-paper">
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 'bold', marginBottom: 2, color: 'white' }}
        >
          Login
        </Typography>

        <TextField
          className="textfield"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          className="textfield"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="login_register"
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          LOGIN
        </Button>

        <Typography align="center" sx={{ marginTop: 2, fontSize: 14, color: 'white' }}>
          OR
        </Typography>

        <Button
          variant="contained"
          fullWidth
          startIcon={<FacebookIcon />}
          onClick={handleFacebookLogin}
          sx={{
            marginTop: 2,
            backgroundColor: 'white',
            color: '#3b5998',
            border: '3px solid rgb(62, 4, 199)',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
              border: '3px solid dark',
            },
          }}
        >
          Login with Facebook
        </Button>

        <Button
          variant="contained"
          className="googleicon"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          sx={{
            marginTop: 2,
            backgroundColor: 'white',
            color: 'crimson',
            border: '3px solid crimson',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
              border: '3px solid darkred',
            },
          }}
        >
          Login with Google
        </Button>

        <Typography align="center" sx={{ marginTop: 2 }}>
          Don’t have an account?{' '}
          <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => navigate('/register')}
            className="auth-link"
            color="darkblue"
          >
            Sign-Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;