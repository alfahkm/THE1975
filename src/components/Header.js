import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>The 1975</h1>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#music">Music</a>
          <a href="#tour">Tour</a>
          <a href="#about">About</a>
          <a href="#shop">Shop</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
