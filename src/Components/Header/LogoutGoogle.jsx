import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { userLogout } from '../../utilities/component-service'; 
import axios from 'axios';

const LogoutGoogle = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get('http://localhost:4000/logout');
    window.location.href = '/';
  };

  return (
    <Link onClick={handleLogout}>Logout</Link>
  );
};

export default LogoutGoogle;