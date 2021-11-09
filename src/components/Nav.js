import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";

const Nav = (props) => {
  // styles for nav links
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  // sets cart bool to false
  const [cartShown, toggleCart] = useState(false);

  // deconstructing props
  const cart = props.cart;
  const clearCart = props.clearCart;
  const handleCheckout = props.handleCheckout;

  // toggles cart
  const handleCart = () => {
    toggleCart(!cartShown);
  };

  // on every update, set the cart length
  useEffect(() => {
    const itemCount = document.querySelector(".cart-number");
    itemCount.innerHTML = `${cart.length}`;
  }, [cart]);

  // what to render if cart is not shown
  if (!cartShown) {
    return (
      <nav>
        <i className="fas fa-glass-whiskey"></i>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
          <button onClick={handleCart} className="cart-btn">
            <i className="fas fa-shopping-cart"></i>
            <div className="cart-number">0</div>
          </button>
        </ul>
      </nav>
    );
  }

  // if cart is shown
  else {
    return (
      <nav>
        <i className="fas fa-glass-whiskey"></i>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
          <button onClick={handleCart} className="cart-btn">
            <i className="fas fa-shopping-cart"></i>
            <div className="cart-number">0</div>
          </button>
          <Cart
            cart={cart}
            clearCart={clearCart}
            handleCheckout={handleCheckout}
          />
        </ul>
      </nav>
    );
  }
};

export default Nav;
