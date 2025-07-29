import React from 'react';
import { useAuth } from './AuthProvider';
import Header from './Header';
import LoginForm from './LoginForm';
import CustomerDashboard from './CustomerDashboard';
import AdminDashboard from './AdminDashboard';
import Home from './Home'; // Import the landing page component
import './App.css';

const App = () => {
  const { user } = useAuth();

  // If no user is logged in, show the landing page
  if (!user) {
    return <Home />;
  }

  // For logged-in users, show the dashboard based on role
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {user.role === 'admin' ? <AdminDashboard /> : <CustomerDashboard />}
    </div>
  );
};

export default App;