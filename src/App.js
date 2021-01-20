import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navbar from './components/Navbar/Navbar';

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem('shoppingCart') || '[]'
);

const App = () => {
  // State for shopping cart to keep them in localStorage
  const [cart, setCart] = useState(cartFromLocalStorage);

  // Add to cart functionality
  const addItem = product => {
    console.log('added to cart', product);
    const exist = cart.find(x => x.id === product.id);
    if (exist) {
      setCart(
        cart.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item functionality
  const removeItem = product => {
    const exist = cart.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter(x => x.id !== product.id));
    } else {
      setCart(
        cart.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // Save shopping cart to localStorage
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <Switch>
          <Route exact path="/" render={() => <Products addItem={addItem} />} />
          <Route
            path="/products/:productId"
            render={props => <ProductDetails {...props} addItem={addItem} />}
          />
          <Route
            path="/shoppingcart"
            render={props => (
              <ShoppingCart
                {...props}
                cart={cart}
                addItem={addItem}
                removeItem={removeItem}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
