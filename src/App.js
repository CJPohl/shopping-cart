import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import "./app.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  // current 'inventory' of the Bootlegger website
  // holds array objects including item information and id
  const [stock] = useState([
    {
      name: "Jim Beam White Label",
      distillery: "Beam Suntory",
      ABV: "80 Proof",
      region: "Kentucky",
      price: 21,
      cartQuant: 0,
      id: "key-0",
    },
    {
      name: "Buffalo Trace",
      distillery: "Buffalo Trace",
      ABV: "90 Proof",
      region: "Kentucky",
      price: 26,
      cartQuant: 0,
      id: "key-1",
    },
    {
      name: "Blantons",
      distillery: "Buffalo Trace",
      ABV: "~93 Proof",
      region: "Kentucky",
      price: 68,
      cartQuant: 0,
      id: "key-2",
    },
    {
      name: "Glenlivet 12 Year",
      distillery: "Glenlivet",
      ABV: "80 Proof",
      region: "Speyside, Scotland",
      price: 39,
      cartQuant: 0,
      id: "key-3",
    },
    {
      name: "Ardbeg 10 Year",
      distillery: "Ardbeg",
      ABV: "92 Proof",
      region: "Islay, Scotland",
      price: 55,
      cartQuant: 0,
      id: "key-4",
    },
    {
      name: "Redbreast 12 Year",
      distillery: "Redbreast",
      ABV: "92 Proof",
      region: "Ireland",
      price: 68,
      cartQuant: 0,
      id: "key-5",
    },
  ]);

  // cart for the client user, set to empty
  const [cart, updateCart] = useState([]);

  // sets cart status to false
  const [cartSubmit, updateSubmit] = useState(false);

  // adds item to cart from stock
  const handleItemAdd = (e) => {
    const target = e.target.parentNode.id.substring(4);
    updateCart([...cart].concat(stock[target]));
  };

  // clears the current cart
  const clearCart = () => {
    updateCart([]);
  };

  // if continue to check out is clicked, change state
  const handleCheckout = () => {
    updateSubmit(!cartSubmit);
  };

  // page to render if cart is not submitted
  if (!cartSubmit) {
    return (
      <Router>
        <div className="app">
          <Nav
            items={stock}
            cart={cart}
            clearCart={clearCart}
            handleCheckout={handleCheckout}
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/shop"
              element={<Shop items={stock} addItem={handleItemAdd} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }

  // if cart is submitted
  else {
    return (
      <div className="app">
        <div className="submitted">
          <h1>Thank you. We will now continue with your purchase.</h1>
        </div>
      </div>
    );
  }
}

export default App;
