import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      const templateParams = {
        from_email: email,
        to_email: 'alfapunya36@gmail.com',
        message: message,
      };

      emailjs.send(
        'YOUR_SERVICE_ID',       // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',      // replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID'           // replace with your EmailJS user ID (public key)
      )
      .then((response) => {
        setSubmitted(true);
        setEmail('');
        setMessage('');
        setError('');
      }, (err) => {
        setError('Gagal mengirim pesan. Silakan coba lagi.');
      });
    } else {
      setError('Mohon isi email dan pesan.');
    }
  };

  return (
    <section className="newsletter-signup" id="newsletter">
      <h2>Berikan Saran</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Tulis pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Kirim</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <p className="thank-you-message">Terima kasih, masukan Anda telah kami terima!</p>
      )}
    </section>
  );
};

export default NewsletterSignup;
