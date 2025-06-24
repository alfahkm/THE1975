import React from 'react';
import '../styles/MerchandiseSection.css';

const merchandiseData = [
  {
    name: 'The 1975 T-Shirt',
    image: 'assets/merch-tshirt.jpg',
    description: 'High quality cotton t-shirt with band logo.',
    price: '$25',
    link: 'https://store.example.com/tshirt',
  },
  {
    name: 'The 1975 Hoodie',
    image: 'assets/merch-hoodie.jpg',
    description: 'Comfortable hoodie with embroidered logo.',
    price: '$50',
    link: 'https://store.example.com/hoodie',
  },
  // Add more merchandise items as needed
];

const MerchandiseSection = () => {
  return (
    <section className="merchandise-section" id="merchandise">
      <h2>Merchandise</h2>
      <div className="merch-list">
        {merchandiseData.map(({ name, image, description, price, link }) => (
          <div key={name} className="merch-item">
            <img src={image} alt={name} className="merch-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="merch-price">{price}</div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="merch-link">Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchandiseSection;
