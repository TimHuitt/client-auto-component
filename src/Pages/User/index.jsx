import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
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
  }, [location, setUserData]);

  const copyToClipboard = () => {
    if (userData && userData.googleId) {
      navigator.clipboard.writeText(userData.googleId)
        // .then(() => alert("Google ID copied to clipboard!"))
        .catch(err => console.error("Failed to copy Google ID: ", err));
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          <img src={userData.avatar} alt="User Avatar" id="user-avatar" />
          {/* Add a button to copy the Google ID */}
          <button onClick={copyToClipboard}>Copy Google ID</button>
          {/* Render other user-related content here */}
        </div>
      )}
    </div>
  );
};

export default User;
