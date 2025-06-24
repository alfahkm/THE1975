import React from 'react';
import '../styles/MusicSection.css';

const musicData = [
  {
    title: 'Album One',
    cover: 'assets/1972-1.png',
    description: 'The debut album with hit singles.',
    streamingLink: 'https://open.spotify.com/album/1',
    purchaseLink: 'https://store.example.com/album1',
  },
  {
    title: 'Album Two',
    cover: 'assets/1972-1.png',
    description: 'The sophomore album with new sounds.',
    streamingLink: 'https://open.spotify.com/album/2',
    purchaseLink: 'https://store.example.com/album2',
  },
  // Add more albums as needed
];

const MusicSection = () => {
  return (
    <section className="music-section" id="music">
      <h2>Music</h2>
      <div className="music-list">
        {musicData.map(({ title, cover, description, streamingLink, purchaseLink }) => (
          <div key={title} className="music-item">
            <img src={cover} alt={title} className="music-cover" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="music-links">
              <a href={streamingLink} target="_blank" rel="noopener noreferrer" className="streaming-link">Listen</a>
              <a href={purchaseLink} target="_blank" rel="noopener noreferrer" className="purchase-link">Buy</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
