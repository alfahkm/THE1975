import React, { useState, useRef, useEffect } from 'react';
import '../styles/TourSection.css';

const tourData = [
  { date: '2025-06-21', city: 'TASIKMALAYA', venue: 'MAYASARI PLAZA', tickets: 'https://tickets.example.com/ny', poster: '/assets/TASIKMALAYA Siapa yang sudah merapat kesini.webp', audio: '/assets/Morfem - Binar Wajah Sebaya.mp3' },
  { date: '2024-07-05', city: 'JAKARTA', venue: 'STADION BASEBALL GBK, SENAYAN', tickets: 'https://tickets.example.com/la', poster: '/assets/postertour.jpg', audio: '/assets/Morfem - Rayakan Pemenang.mp3' },
  { date: '2024-07-24', city: 'BALI', venue: 'LAPANGAN NITI MANDALA, DENPASAR', tickets: 'https://tickets.example.com/chicago', poster: '/assets/BINGUNG HIDUP.jpg', audio: '/assets/Morfem - Megah Diterima.mp3' },
  // Tambahkan data tur lainnya sesuai kebutuhan
];

const TourSection = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentAudio && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, [currentAudio]);

  const handlePosterClick = (audioSrc) => {
    if (currentAudio === audioSrc) {
      audioRef.current.pause();
      setCurrentAudio(null);
    } else {
      setCurrentAudio(audioSrc);
    }
  };

  return (
    <section className="tour-section" id="tour">
      <h2>Tour Dates</h2>
      <div className="tour-list">
        {tourData.map(({ date, city, venue, poster, audio }) => (
          <div key={date} className="tour-item">
            <img
              src={poster}
              alt={`Poster for tour in ${city}`}
              className="tour-poster"
              onClick={() => handlePosterClick(audio)}
              style={{ cursor: 'pointer' }}
            />
            <div className="tour-date">{new Date(date).toLocaleDateString()}</div>
            <div className="tour-city">{city}</div>
            <div className="tour-venue">{venue}</div>
          </div>
        ))}
      </div>
      {currentAudio && (
        <audio ref={audioRef} style={{ display: 'none' }} controls>
          <source src={currentAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </section>
  );
};

export default TourSection;
