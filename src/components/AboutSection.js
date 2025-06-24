import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>About The1975</h2>
      <div className="about-content">
        <p>
          The 1975 adalah band asal Inggris yang dikenal dengan gaya musik indie rock dan pop alternatif. Band ini dibentuk pada tahun 2002 dan telah merilis beberapa album yang sukses secara komersial dan kritis.
        </p>
        <p>
          Anggota band terdiri dari Matthew Healy (vokal, gitar), Adam Hann (gitar), Ross MacDonald (bass), dan George Daniel (drum). Mereka dikenal dengan penampilan panggung yang energik dan lirik yang mendalam.
        </p>
        <img src="assets/1972-1.png" alt="The 1975 Band" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
