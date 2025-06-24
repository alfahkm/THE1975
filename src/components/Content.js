import React, { useEffect, useRef } from 'react';
import '../styles/Content.css';

const Content = () => {
  const sectionRef = useRef(null);

  const albums = [
    { title: 'Being Funny In A Foreign Language', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
    { title: 'Album Two', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
    { title: 'Album Three', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
    { title: 'Album Four', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
    { title: 'Album Five', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
    { title: 'Album Six', artist: 'The 1975', cover: '/assets/1975.png', link: '#' },
  ];

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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="content" ref={sectionRef}>
      <div className="content-inner">
        <h2>Latest Albums</h2>
        <div className="album-grid">
          {albums.map(({ title, artist, cover, link }) => (
            <div key={title} className="album-item">
              <div className="album-image">
                <img src={cover} alt={`${title} Cover`} />
              </div>
              <div className="album-info">
                <h3>{title}</h3>
                <p>{artist}</p>
                <a href={link} className="listen-btn">Listen Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
