import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'; // Adjust the import path as necessary
import './User.css';

const User = () => {
  const location = useLocation();
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userDataParam = params.get('userData');
  
    if (userDataParam) {
      const parsedUserData = JSON.parse(decodeURIComponent(userDataParam));
      setUserData(parsedUserData);
      localStorage.setItem('userData', JSON.stringify(parsedUserData));
    }
  }, [location, setUserData]); // Add setUserData to the dependency array

  // ... rest of your component

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          <img src={userData.avatar} alt="User Avatar" id="user-avatar" />
          {/* Render other user-related content here */}
        </div>
      )}
    </div>
  );
};

export default User;
