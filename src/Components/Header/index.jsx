import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './Header.css';
import LoginGoogle from './LoginGoogle';
import LogoutGoogle from './LogoutGoogle';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { userData } = useContext(UserContext);
  console.log(userData); 
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='Header'>
      <header>
        <div id="header-left">
          <Link to="/">
            <h1>Auto Component</h1>
          </Link>
        </div>
        <div id="header-right" onClick={toggleMenu}>
          <Link to="https://github.com/TimHuitt/client-auto-component" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link to="https://www.npmjs.com/package/auto-component" target="_blank" rel="noopener noreferrer">
            npm
          </Link>
          {userData && (
            <img src={userData.avatar} alt="User Avatar" id="user-avatar" />
          )}
          {isMenuOpen && (
            <div className="overlay" onClick={closeMenu}></div>
          )}
        </div>
      </header>
    </div>
  );
}
