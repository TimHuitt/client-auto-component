import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { userLogin } from '../../utilities/component-service'; // Adjust the path based on your project structure

const LoginGoogle = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await userLogin();

      navigate('/user');
      console.log(data)

      } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Link onClick={handleLogin}>Login</Link>
  );
};

export default LoginGoogle;