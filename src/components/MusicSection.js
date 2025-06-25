import React from 'react';
import '../styles/MusicSection.css';

const musicData = [
  {
    title: 'The Jansen',
    cover: 'assets/Banal Semakin Binal Album.jpeg',
    description: 'The debut album with hit singles.',
    streamingLink: 'https://open.spotify.com/album/4TVhUSrzqxEiuvR2ZwpQuG?si=xoQjRTvASsKb6U9k1JyIpQ',
    purchaseLink: 'https://store.example.com/album1',
  },
  {
    title: 'Morfem',
    cover: 'assets/Morfem - Binar Wajah Sebaya.jpeg',
    description: 'The sophomore album with new sounds.',
    streamingLink: 'https://open.spotify.com/album/7G4xr0o7RglaKNu7efMhOR?si=O1NdcBTsTtyUx6cYxwTxeA',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Green Day',
    cover: 'assets/download (5).jpeg',
    description: 'The sophomore album with new sounds.',
    streamingLink: 'https://open.spotify.com/album/0i7a8V0P5d8UlVeRtPo8SP?si=zd62jCE3QxWUn2rbiz1Xvw',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'The Panturas',
    cover: 'assets/Minimalist illustration _ The Panturas.jpeg',
    description: 'The sophomore album with new sounds.',
    streamingLink: 'https://open.spotify.com/album/7G4xr0o7RglaKNu7efMhOR?si=O1NdcBTsTtyUx6cYxwTxeA',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'The 1975',
    cover: 'assets/1972-1.png',
    description: 'The sophomore album with new sounds.',
    streamingLink: 'https://open.spotify.com/album/6dVCpQ7oGJD1oYs2fv1t5M?si=fi2hW7afQh-Q7RrL_Lq0Tw',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
