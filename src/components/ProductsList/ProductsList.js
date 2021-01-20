import React from 'react';
import { Link } from 'react-router-dom';

import './productList.css';

const ProductsList = ({ products, addItem, searchText }) => {
  console.log('product', products);
  return products
    .filter(product => {
      return product.title.toLowerCase().includes(searchText);
    })
    .map(product => (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <img src={product.image.src} alt="product.title" />
        </div>
        <div className="product-info">
          <Link
            to={{
              pathname: `/products/${product.id}`,
              state: {
                product,
              },
            }}
          >
            {product.title}
          </Link>
          <div className="price">
            <p>{product.variants[0].priceV2.amount}€ </p>
            <span className="ribbonText">
              {product.metadata.accentuate.ribbonText1}
            </span>
          </div>

          <div className="card-links">
            <button
              className="add-to-cart-btn"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
            <Link
              to={{
                pathname: `/products/${product.id}`,
                state: {
                  product,
                },
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    ));
};

export default ProductsList;
