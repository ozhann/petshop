import React from 'react';

import './shoppingCart.css';

const ShoppingCart = ({ cart, addItem, removeItem }) => {
  const totalPrice = cart.reduce(
    (a, c) => a + c.qty * c.variants[0].priceV2.amount,
    0
  );

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <tr>
          <th></th>
          <th>Name </th>
          <th>Product Id</th>
          <th>Quantity </th>
          <th>Price </th>
          <th>Total </th>
        </tr>
        <tbody>
          {cart.length > 0
            ? cart.map((product, i) => (
                <tr>
                  <td>
                    <img className="image-cart" src={product.image.src} />
                  </td>
                  <td className="cart-title">
                    {product.title}
                    <br />
                  </td>
                  <td>{product.id}</td>
                  <td>
                    <button
                      className="plusminus"
                      onClick={() => removeItem(product)}
                    >
                      -
                    </button>
                    {product.qty}
                    <button
                      className="plusminus"
                      onClick={() => addItem(product)}
                    >
                      +
                    </button>
                  </td>
                  <td>€{product.variants[0].priceV2.amount}</td>
                  <td>
                    €
                    {(product.variants[0].priceV2.amount * product.qty).toFixed(
                      2
                    )}
                  </td>
                </tr>
              ))
            : 'Your cart is empty'}
        </tbody>
      </table>

      <div>
        <h1>Total Price: €{totalPrice.toFixed(2)}</h1>
        <p>Free Delivery</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
