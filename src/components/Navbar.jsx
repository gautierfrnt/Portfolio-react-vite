import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import logonoir from '../assets/logo-noir.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon-black.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleDayNightMode = () => {
    setIsDayMode(!isDayMode);
    toggleTheme();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`navbar ${isDayMode ? 'night' : 'day'}`} data-theme={isDayMode ? 'light' : 'dark'}>
      <div>
        <a href="/">
          {isDayMode ? <img src={logo} alt="Light" /> : <img src={logonoir} alt="Dark" />}
        </a>
      </div>
      <div className='link'>
        <a href="./">Home</a>
        <a href="./MesProjets">Projets</a>
        <a href="./Contact">Contact</a>
        <button onClick={toggleDayNightMode}>
          {isDayMode ? <img src={sun} alt="Light" /> : <img src={moon} alt="Dark" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
