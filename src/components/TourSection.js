import React from 'react';
import '../styles/TourSection.css';

const tourData = [
  { date: '2024-07-10', city: 'New York', venue: 'Madison Square Garden', tickets: 'https://tickets.example.com/ny' },
  { date: '2024-07-15', city: 'Los Angeles', venue: 'Hollywood Bowl', tickets: 'https://tickets.example.com/la' },
  { date: '2024-07-20', city: 'Chicago', venue: 'United Center', tickets: 'https://tickets.example.com/chicago' },
  // Tambahkan data tur lainnya sesuai kebutuhan
];

const TourSection = () => {
  return (
    <section className="tour-section" id="tour">
      <h2>Tour Dates</h2>
      <div className="tour-list">
        {tourData.map(({ date, city, venue }) => (
          <div key={date} className="tour-item">
            <div className="tour-date">{new Date(date).toLocaleDateString()}</div>
            <div className="tour-city">{city}</div>
            <div className="tour-venue">{venue}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourSection;
