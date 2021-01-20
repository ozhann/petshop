import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <header className="header">
        <Link to="/" className="logo">
          PETSHOP
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">SHOP</Link>
          </li>
          <li>
            <Link to="/shoppingcart">CART {cartCount ? cartCount : ''}</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
