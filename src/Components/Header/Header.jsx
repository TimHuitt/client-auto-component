import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

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
          <h1>Auto Component</h1>
        </div>
        <div id="header-right" onClick={toggleMenu}>
          <div id="user-icon"></div>
          {isMenuOpen && (
            <div id="menu-dropdown">
              <a href="/auth/google">Log In - Google</a>
              <a href="#">Open on GitHub</a>
              <a href="#">Open on npm</a>
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

