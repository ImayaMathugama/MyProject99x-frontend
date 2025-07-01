import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import './styles/Profile.css';
import { useAuth } from '../context/AuthContext'; // ✅ useAuth

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ Get user from context

  return (
    <Container className='containppr' sx={{ mt: 10, maxWidth: '100%' }}>
      <Paper elevation={3} className="profile-container">
        <Typography variant="h5" gutterBottom>
          My Profile
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            <strong>Username:</strong> {user?.username}
          </Typography>
          <Typography variant="body1">
            <strong>Role:</strong> {user?.role}
          </Typography>
        </Box>

        {/* ✅ Role-based profile content */}
        {user?.role === 'admin' ? (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Welcome, Admin! You have access to all system controls and user management.
            </Typography>
            {/* You can add more admin-specific fields or actions here */}
          </Box>
        ) : user?.role === 'user' ? (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Welcome back, valued user! You can view your activities and updates here.
            </Typography>
            {/* Add user-specific content if needed */}
          </Box>
        ) : (
          <Typography variant="body2" color="error">
            Unknown role or not logged in.
          </Typography>
        )}

        <Button 
          variant="contained" 
          onClick={() => navigate('/dashboard')}
          sx={{ backgroundColor: "black" }}
        >
          Back to Dashboard
        </Button>
      </Paper>
    </Container>
  );
}