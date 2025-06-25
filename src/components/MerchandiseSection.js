import React from 'react';
import '../styles/MerchandiseSection.css';

const merchandiseData = [
  {
    name: 'The 1975 T-Shirt',
    image: 'assets/146.jpg',
    description: 'BLUR - ALBUM COVER TSHIRT BLACK IMPORT FROM UK OFFICIAL MERCH BRAND NEW SIZE MEDIUM.',
    price: 'IDR: 350.000 ONLYYYY',
    link: 'https://www.instagram.com/p/DLRU83lPpuM/?utm_source=ig_web_copy_link&igsh=dm82Z2Y0aGhjdHF6',
  },
  {
    name: 'The 1975 Hoodie',
    image: 'assets/1678.jpg',
    description: 'BILLIE EILISH - HIT ME HARD AND SOFT TRACKLIST TSHIRT BLACK OFFICIAL MERCH BRAND NEW SIZE MEDIUM.',
    price: 'IDR: 330.000 ONLYYYY',
    link: 'https://www.instagram.com/p/DLRZNXwP0qm/?utm_source=ig_web_copy_link&igsh=MTdwcjYzNHU4eHM2cw==',
  },
  {
    name: 'The 1975 Hoodie',
    image: 'assets/3636.jpg',
    description: 'THE CRANBERRIES FAITHFUL DEPARTED COVER TSHIRT BLAC IMPORT FROM UK OFFICIAL MERCHBRAND NEW SIZE MEDIUM, LARGE.',
    price: 'IDR: 350.000 ONLYYYY',
    link: 'https://www.instagram.com/p/DLSazvkP7gk/?utm_source=ig_web_copy_link&igsh=MTR6bGk5MjQ0d29qbQ==',
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
