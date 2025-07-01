//Sidebar.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
  Box,
  Button,
  Avatar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  OtherHouses as OtherHousesIcon,
  CalendarMonth as CalendarMonthIcon,
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from '@mui/icons-material';
import './styles/Sidebar.css';
import { useAuth } from '../context/AuthContext'; // ✅ Import useAuth

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const { role, logout } = useAuth(); // ✅ Access role

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="layout">
      <List
        className="sidebar-container"
        component="nav"
        subheader={
          <ListSubheader component="div" className="profile">
            <Avatar className="nav-avatar" onClick={() => navigate('/profile')} />
            PROFILE
          </ListSubheader>
        }
      >
        <ListItemButton className="sidebar-list-item" onClick={() => navigate('/dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {role === 'admin' && (
          <ListItemButton className="sidebar-list-item" onClick={() => navigate('/home')}>
            <ListItemIcon><OtherHousesIcon /></ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemButton>
        )}


        <ListItemButton className="sidebar-list-item" onClick={() => navigate('/calender')}>
          <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} className="sidebar-list-item">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="All inboxes" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton className="sidebar-list-item sidebar-nested-item" onClick={() => navigate('/inbox')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton className="sidebar-list-item sidebar-nested-item">
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            <ListItemButton className="sidebar-list-item sidebar-nested-item">
              <ListItemIcon><SendIcon /></ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItemButton>
            <ListItemButton className="sidebar-list-item sidebar-nested-item">
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton className="sidebar-list-item">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton className="sidebar-list-item">
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Help and feedback" />
        </ListItemButton>

        <Box sx={{ mt:'auto', p: 2 }}>
          <Button className="logout-btn" fullWidth onClick={() => navigate('/login')}>
            LOG OUT
          </Button>
        </Box>
      </List>

      {/* ✅ HERE’S WHERE YOUR DASHBOARD WILL RENDER */}
      <div className="content-area">
        {children}
      </div>
    </div>
  );
}