// UserProvider.js
import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const data = localStorage.getItem('userData');
    console.log("data from localstorage", data);
    return data ? JSON.parse(data) : null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const data = localStorage.getItem('userData');
      console.log("data from localstorage", data);
      setUserData(data ? JSON.parse(data) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
