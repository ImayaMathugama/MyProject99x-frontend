//Dashboard.jsx
import React from 'react';
import { Navigate } from 'react-router-dom'; // ✅ Redirect
import { useAuth } from '../context/AuthContext'; // ✅ Import context
import '../components/styles/Sidebar.css';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
  { name: 'Jan', orders: 4000 },
  { name: 'Feb', orders: 3000 },
  { name: 'Mar', orders: 5000 },
  { name: 'Apr', orders: 4780 },
  { name: 'May', orders: 5890 },
  { name: 'Jun', orders: 4390 },
  { name: 'Jul', orders: 5490 },
  { name: 'Aug', orders: 6000 },
  { name: 'Sep', orders: 6300 },
  { name: 'Oct', orders: 7000 },
  { name: 'Nov', orders: 6200 },
  { name: 'Dec', orders: 7200 },
];

const deliveryData = [
  { name: 'Delivered', value: 65 },
  { name: 'In Transit', value: 25 },
  { name: 'Cancelled', value: 10 },
];

const COLORS = ['#FFD700', '#87CEFA', '#FFB6C1'];

const StatCard = ({ title, value, change }) => (
  <Card sx={{ minWidth: 400 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="caption" color="text.secondary">
        {change}
      </Typography>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  const { isAuthenticated } = useAuth(); // ✅ Use context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // ✅ Protect
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Dashboard</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Revenue" value="$587,684.81" change="+10.5% today" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Customers" value="164,540" change="-0.5% today" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Transactions" value="256,560" change="+5.5% today" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Visitors" value="97,560" change="+15.5% today" />
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ minWidth: 400 }}>
              <Typography variant="h6">Statistics of Orders</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ minWidth: 400 }}>
              <Typography variant="h6">Deliveries</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deliveryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {deliveryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}