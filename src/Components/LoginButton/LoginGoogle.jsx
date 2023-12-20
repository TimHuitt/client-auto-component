import React from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../../utilities/component-service'; // Adjust the path based on your project structure

const LoginGoogle = () => {
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Trigger the login API call
      const data = await userLogin();

      // Redirect to the '/user' route
      history.push('/user');
      
      // You can store the user data in a state or context for use on the '/user' page
      // For example, you might have a global state management solution like Redux or React Context.
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login - Google</button>
    </div>
  );
};

export default LoginGoogle;