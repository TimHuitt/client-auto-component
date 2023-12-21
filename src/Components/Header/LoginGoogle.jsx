import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const LoginGoogle = () => {

  const handleLogin = () => {
    // Redirect to the backend route that initiates the Google OAuth flow
    window.location.href = 'http://localhost:4000/auth/google';
  };

  return (
    <Link onClick={handleLogin}>Login</Link>
  );
};

export default LoginGoogle;