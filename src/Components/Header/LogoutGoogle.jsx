import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { userLogout } from '../../utilities/component-service'; // Adjust the path based on your project structure

const LogoutGoogle = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userLogout();

      navigate('/logout');

      } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Link onClick={handleLogout}>Logout</Link>
  );
};

export default LogoutGoogle;