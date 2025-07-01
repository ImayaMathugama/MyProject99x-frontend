//Registration Form
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
  Paper
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from 'react-router-dom';
import '../pages/styles/AuthPage.css';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    agreed: false,
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.agreed) {
    alert("You must agree to the terms.");
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/Auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (!res.ok) throw new Error("Registration failed");

      alert("Registered successfully!");
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };


  return (
    <Box className="auth-box">
      <Paper elevation={10} className="auth-paper">
        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold" color="white">
          Sign-Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            className='textfield'
            fullWidth
            name="username"
            label="Username"
            value={form.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "gray" }} />
                </InputAdornment>
              )
            }}
            
          />

          <TextField
            className='textfield'
            label="E-mail"
            fullWidth
            name="email"
            type="email"
            
            value={form.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
              
            
          />

          <TextField
            className='textfield'
            fullWidth
            name="password"
            type="password"
            label="Password"
            
            value={form.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
            
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={form.agreed}
                onChange={handleChange}
                name="agreed"
                sx={{ color: "black" }}
              />
            }
            label={
              <Typography sx={{ fontSize: 14 }}>
                I agree to the terms & conditions
              </Typography>
            }
            sx={{ mt: 1 }}
          />

          <Button
            className="login_register"
            type="submit"
            variant="contained"
            fullWidth
            /*
            sx={{
              mt: 2,
              backgroundColor: "white",
              color: "#014f86",
              fontWeight: "bold",
              borderRadius: 20,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
              */
          >
            Sign up
          </Button>

          <Typography textAlign="center" mt={2} fontSize={14}>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default RegistrationForm;