import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
const heroStyle = {
    backgroundImage: `url('/assets/neck deep poster print.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <section className="hero" style={heroStyle}>
      <h1>Welcome to The1975</h1>
      <p>Official Website</p>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default HeroSection;
