import React from "react";
import "./favourites.css";

import premium from "./pink bottle.png";
import luxury from "./new skin.png";
import rose from "./pink red.png";
import pink from "./olive.png";

function Favourites() {
  const favouriteProducts = [
    {
      id: 1,
      name: "ROSELIA PREMIUM",
      price: "Rs. 3,500",
      image: premium,
    },
    {
      id: 2,
      name: "ROSELIA LUXURY",
      price: "Rs. 4,000",
      image: luxury,
    },
    {
      id: 3,
      name: "ROSELIA ROSE",
      price: "Rs. 2,500",
      image: rose,
    },
    {
      id: 4,
      name: "ROSELIA OUD",
      price: "Rs. 3,000",
      image: pink,
    },
  ];

  return (
    <div className="roselia-fav-page">
      <section className="roselia-fav-heading">
        <p className="roselia-fav-subtitle">
          YOUR PERSONAL COLLECTION
        </p>

        <h1>My Favourites</h1>

        <p className="roselia-fav-description">
          Keep the fragrances you love close to your heart.
        </p>

        <div className="roselia-fav-divider"></div>
      </section>

      <section className="roselia-fav-grid">
        {favouriteProducts.map((product) => (
          <div
            className="roselia-fav-card"
            key={product.id}
          >
            <div className="roselia-fav-image-box">
              <img
                src={product.image}
                alt={product.name}
                className="roselia-fav-image"
              />

              <span className="roselia-fav-heart">
                ♥
              </span>
            </div>

            <div className="roselia-fav-details">
              <h2>{product.name}</h2>

              <p className="roselia-fav-price">
                {product.price}
              </p>

              <button
                className="roselia-fav-button"
                onClick={() =>
                  alert(product.name + " selected!")
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Favourites;