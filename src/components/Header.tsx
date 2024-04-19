// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/2_logo_2_right.svg';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className='header'>
          <div className='header-logo'><img src={Logo} alt="CapyTasks" /></div>
          <div className='header-links-block'>
            <div><Link to="/" className='header-links'>Home</Link></div>
            <div><Link to="/login" className='header-links'>Login</Link></div>
            <div><Link to="/register" className='header-links'>Register</Link></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
