import React, { useState } from 'react';
import '../styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the subscription logic
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-signup" id="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <p className="thank-you-message">Thank you for subscribing!</p>
      )}
    </section>
  );
};

export default NewsletterSignup;
