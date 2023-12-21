import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'
import LoginGoogle from './LoginGoogle'
import LogoutGoogle from './LogoutGoogle'

export default function Header(){
  const [isMenuOpen, setMenuOpen] = useState(false);

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

          <Link to="https://github.com/TimHuitt" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link to="https://github.com/TimHuitt" target="_blank" rel="noopener noreferrer">
            npm
          </Link>
          <div id="user-icon"></div>
          {isMenuOpen && (
            <div id="menu-dropdown">
              <Link to="/user">
                My Components
              </Link>
              <LoginGoogle />
              <LogoutGoogle />
            </div>
          )}
          {isMenuOpen && (
            <div className="overlay" onClick={closeMenu}></div>
          )}
        </div>
      </header>
    </div>
  );
}

