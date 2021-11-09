import React from "react";

const Shop = (props) => {
  // deconstructing props
  const { items, addItem } = props;

  // inits the adding process to cart
  const handleAdd = (e) => {
    addItem(e);
  };

  return (
    <div className="shop">
      <h1 className="shop-title">5 Delicious Whiskies and 1 Terrible One</h1>
      <div className="shop-grids">
        {items.map((item) => (
          <div id={item.id} key={item.id} className="shop-grid">
            <i className="fas fa-wine-bottle"></i>
            <h2>{item.name}</h2>
            <h3>{item.distillery}</h3>
            <div className="abv-region">
              <p>{item.ABV}</p>
              <p>{item.region}</p>
            </div>
            <p>{item.price} USD</p>
            <button onClick={handleAdd} className="add-btn">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
