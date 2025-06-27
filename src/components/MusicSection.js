import React from 'react';
import '../styles/MusicSection.css';

const musicData = [
  {
    title: 'Rayakan Pemenang',
    cover: 'assets/592x592bb (8).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/track/52v1IcYW8l17Q72wWMeklf?si=cc8b698fa73e4abb',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Hey, Makan Tuh Gitar!',
    cover: 'assets/592x592bb (9).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/album/12VSaUx0wY6WPYzjfZ7W7n?si=6Fgg0T7xRsCeUE746caylQ',
    purchaseLink: 'https://store.example.com/album1',
  },
  {
    title: 'Binar Wajah Sebaya ',
    cover: 'assets/592x592bb (3).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/album/7G4xr0o7RglaKNu7efMhOR?si=QSxZVXSXQzOIKWevQHzQjg',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Seketika Sekarang Juga',
    cover: 'assets/592x592bb.webp',
    description: '',
    streamingLink: 'https://open.spotify.com/album/0x3HYGAWj8ekIfdaJnIKUR?si=j1rTFliVRlaczz4sx8013g',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Dramaturgi Underground',
    cover: 'assets/592x592bb (1).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/album/2Cbzom66XvdzCcZgkrDMCm?si=kaNsbkA9RTaDmcJz0DYgvQ',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Megah Diterima',
    cover: 'assets/592x592bb (2).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/track/13HWccwFz8rjJTYtWz5UrY?si=607ac7a71fcd42b6',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Roman Rafah 2024',
    cover: 'assets/592x592bb (4).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/track/7oL2kNGnLUgtRSghUnLyiz?si=1c587661a33e4fcd',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Teleportasi',
    cover: 'assets/592x592bb (5).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/track/2b9dCRQBpQUHb2SxUDFSXL?si=6d6484ccc94945ff',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Seka Ingusmu',
    cover: 'assets/sekaingusmu.jpg',
    description: '',
    streamingLink: 'https://open.spotify.com/track/2736xpp9NVEIuUdafnFCbl?si=d2b0feac08d740a0',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'Apapun Dilibas',
    cover: 'assets/592x592bb (6).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/track/6NaXGMzvNsaKMsHEYQhu32?si=9ffd780719cc499e',
    purchaseLink: 'https://store.example.com/album2',
  },
  {
    title: 'INDONESIA',
    cover: 'assets/592x592bb (7).webp',
    description: '',
    streamingLink: 'https://open.spotify.com/album/2ghJjKYrxvScTls6DgzahG?si=HXcz1n6LRQW1jr6xQEOvPg',
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
