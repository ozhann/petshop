import React, { useState, useEffect } from 'react';

import ProductsList from '../ProductsList/ProductsList';
import SearchBar from '../SearchBar/SearchBar';

import './products.css';

const Products = ({ addItem }) => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  // get product info
  const fetchProducts = async () => {
    const res = await fetch(
      'https://pt-productfeed.s3.eu-central-1.amazonaws.com/products.json'
    );
    const data = await res.json();

    const removeDuplicates = data.products.filter(
      (product, idx, self) => self.findIndex(p => p.id === product.id) === idx
    );

    setProducts(removeDuplicates);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // sort products ascending
  const sortByExpensive = () => {
    const sorted = [...products].sort((a, b) => {
      return b.variants[0].priceV2.amount - a.variants[0].priceV2.amount;
    });

    setProducts(sorted);
  };

  // sort products descending
  const sortByCheaper = () => {
    const sorted = [...products].sort((a, b) => {
      return a.variants[0].priceV2.amount - b.variants[0].priceV2.amount;
    });
    setProducts(sorted);
  };

  const updateSearchText = text => {
    setSearchText(text);
  };

  return (
    <>
      <div className="search-bar-container">
        <SearchBar
          updateSearchText={updateSearchText}
          searchText={searchText}
        />

        <button onClick={sortByExpensive}>Higher priced items ↑</button>
        <button onClick={sortByCheaper}>Lower priced items ↓</button>
      </div>
      <div className="products">
        <ProductsList
          products={products}
          addItem={addItem}
          searchText={searchText}
        />
      </div>
    </>
  );
};

export default Products;
