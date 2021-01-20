import React from 'react';

import './productDetails.css';

const ProductDetails = ({ location, addItem }) => {
  const { product } = location.state;

  console.log('subtitle', product);

  return (
    <div>
      <div className="product-details-page">
        <div className="product-gallery">
          <img src={product.image.src} alt="product" />
        </div>
        <div className="product-description">
          <h2>{product.title}</h2>
          <h4>Subtitle: {product.metadata.accentuate.subTitle}</h4>
          <h2>{product.variants[0].priceV2.amount} Euro</h2>

          <button className="add-to-cart-btn" onClick={() => addItem(product)}>
            Add to Cart
          </button>

          <p className="tags">
            Tags:{' '}
            {product.tags.map(tag => (
              <span>'{tag}', </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
