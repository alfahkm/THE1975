import React, { useEffect, useRef } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const footer = footerRef.current;
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <p>© 2025 MORFEM</p>
      <div className="social-icons">
        
        <a href="https://www.instagram.com/morfem_band/">Instagram</a>
        
      </div>
    </footer>
  );
};

export default Footer;
