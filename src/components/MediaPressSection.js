import React from 'react';
import '../styles/MediaPressSection.css';

const mediaPressData = [
  {
    title: 'Interview with The 1975',
    source: 'Music Magazine',
    date: '2024-05-01',
    link: 'https://musicmagazine.example.com/interview-the1975',
  },
  {
    title: 'The 1975 New Album Review',
    source: 'Rock News',
    date: '2024-04-15',
    link: 'https://rocknews.example.com/review-the1975-album',
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
