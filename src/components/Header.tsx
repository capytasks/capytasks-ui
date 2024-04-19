// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className='header'>
          <div><Link to="/" className='header-links'>Home</Link></div>
          <div><Link to="/login" className='header-links'>Login</Link></div>
          <div><Link to="/register" className='header-links'>Register</Link></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
