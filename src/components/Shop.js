import React from 'react';

const Shop = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Shop Merchandise</h2>
      <img
        src={process.env.PUBLIC_URL + '/assets/shop-image.jpg'}
        alt="THE1975 Merchandise"
        style={{ maxWidth: '300px', width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Shop;
