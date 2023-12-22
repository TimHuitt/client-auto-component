import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
          <Link to="https://github.com/TimHuitt/auto-component" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link to="https://www.npmjs.com/package/auto-component" target="_blank" rel="noopener noreferrer">
            npm
          </Link>
        </div>
      </header>
    </div>
  );
}
