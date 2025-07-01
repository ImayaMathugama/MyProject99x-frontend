// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Import ProtectedRoute

// Pages and components
import LoginPage from './pages/LoginPage';
import RegistrationForm from './pages/RegistrationForm';
import Dashboard from './pages/Dashboard';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Overview from './components/Overview';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Sidebar><Dashboard /></Sidebar>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Sidebar><ProfilePage /></Sidebar>
              </ProtectedRoute>
            }
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Sidebar><Home /></Sidebar>
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Sidebar><Contact /></Sidebar>
              </ProtectedRoute>
            }
          />

          <Route
            path="/aboutus"
            element={
              <ProtectedRoute>
                <Sidebar><AboutUs /></Sidebar>
              </ProtectedRoute>
            }
          />

          <Route
            path="/overview"
            element={
              <ProtectedRoute>
                <Sidebar><Overview /></Sidebar>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;