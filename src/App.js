import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TourSection from './components/TourSection';
import MusicSection from './components/MusicSection';
import AboutSection from './components/AboutSection';
import MerchandiseSection from './components/MerchandiseSection';
import MediaPressSection from './components/MediaPressSection';
import NewsletterSignup from './components/NewsletterSignup';
import SocialMediaFeeds from './components/SocialMediaFeeds';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TourSection />
      <MusicSection />
      <Content />
      <MerchandiseSection />
      <MediaPressSection />
      <NewsletterSignup />
      <SocialMediaFeeds />
      <Footer />
    </div>
  );
};

export default App;
