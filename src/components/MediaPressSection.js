import React from 'react';
import '../styles/MediaPressSection.css';

const mediaPressData = [
  {
    title: 'Morfem Bersiap Menggelar Tur Konser Tujuh Titik di Jepang',
    source: 'detikpop',
    date: '2024-10-22',
    link: 'https://voi.id/musik/427185/morfem-bersiap-menggelar-tur-konser-tujuh-titik-di-jepang',
  },
  {
    title: 'Ketika Green Day Siap Konser di Jakarta Lagi Setelah 29 Tahun...',
    source: 'kompas.com',
    date: '2024-08-16',
    link: 'https://www.kompas.com/hype/read/2024/08/16/085440666/ketika-green-day-siap-konser-di-jakarta-lagi-setelah-29-tahun',
  },
  {
    title: 'The Jansen Awali Tour Kalimantan di Pontianak',
    source: 'kumparan.com',
    date: '2024-11-16',
    link: 'https://kumparan.com/hipontianak/the-jansen-awali-tour-kalimantan-di-pontianak-23vN2WRPNLG',
  },
  {
    title: 'Jarang ke Bandung! MORFEM sukses obati kerinduan para penggemar di Friday Night Live Halfway Bar, apa kata mereka?',
    source: 'hops.id',
    date: '2025-06-16',
    link: 'https://www.hops.id/hot/29415359805/jarang-ke-bandung-morfem-sukses-obati-kerinduan-para-penggemar-di-friday-night-live-halfway-bar-apa-kata-mereka',
  },
  // Add more media/press items as needed
];

const MediaPressSection = () => {
  return (
    <section className="media-press-section" id="media-press">
      <h2>Media & Press</h2>
      <ul className="media-press-list">
        {mediaPressData.map(({ title, source, date, link }) => (
          <li key={title} className="media-press-item">
            <a href={link} target="_blank" rel="noopener noreferrer" className="media-press-link">
              <h3>{title}</h3>
              <p>{source} - {new Date(date).toLocaleDateString()}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediaPressSection;
