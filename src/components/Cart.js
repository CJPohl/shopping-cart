import { useEffect, useState } from "react";

const Cart = (props) => {
  // deconstructing props
  const cart = props.cart;
  const clearCart = props.clearCart;
  const handleCheckout = props.handleCheckout;

  // inits cart price total
  const [total, updateTotal] = useState(0);

  // with every update, sum up the price of all the items in the cart
  useEffect(() => {
    if (cart.length !== 0) {
      const cartTotal = cart.reduce((a, b) => ({ price: a.price + b.price }));
      updateTotal(cartTotal.price);
    } else {
      updateTotal(0);
    }
  }, [cart]);

  // when the cart length is not 0
  if (cart.length !== 0) {
    return (
      <div className="cart-dropdown">
        <h3 className="cart-title">Cart</h3>
        <div className="cart-item-list">
          {cart.map((item) => (
            <ul className="cart-item">
              <li>{item.name}</li>
              <li>&nbsp;-&nbsp;</li>
              <li>{item.distillery}</li>
              <li>&nbsp;-&nbsp;</li>
              <li>{item.price}</li>
            </ul>
          ))}
        </div>
        <h4 className="cart-total">Total:</h4>
        <h4 className="cart-total">{total} USD</h4>
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    );
  }

  // if the cart length is 0
  else {
    return (
      <div className="cart-dropdown">
        <h3 className="cart-title">Cart</h3>
        <div className="cart-item-list">
          <p className="cart-title">No Items in Cart</p>
        </div>
        <h4 className="cart-total">Total:</h4>
        <h4 className="cart-total">{total} USD</h4>
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    );
  }
};

export default Cart;
