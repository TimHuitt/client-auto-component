
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to get user data from localStorage
    const getUserDataFromStorage = () => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    };

    // Extract user data from the URL
    const params = new URLSearchParams(location.search);
    const userDataParam = params.get('userData');

    if (userDataParam) {
      // Parse the JSON string and set user data
      const parsedUserData = JSON.parse(decodeURIComponent(userDataParam));
      setUserData(parsedUserData);

      // Store user data in localStorage for persistence
      localStorage.setItem('userData', JSON.stringify(parsedUserData));
    } else {
      // If user data is not present in the URL, try to get it from localStorage
      getUserDataFromStorage();
    }

    // Clean up localStorage on component unmount
    return () => {
      localStorage.removeItem('userData');
    };
  }, [location.search]);
  console.log(userData)
  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          <img src={userData.avatar} />
          {/* Render other user-related content here */}
        </div>
      )}
    </div>
  );
};

export default User