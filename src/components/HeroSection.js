import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src="/assets/nagoya.mp4"
        type="video/mp4"
      />
      <div className="hero-content">
        <h1></h1>
        <p></p>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default HeroSection;
