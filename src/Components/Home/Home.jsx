
import React from "react";
import "./Home.css";
import rose from "./reddy pink.png";
import red from "./reddy.png";
import skin from "./skinny pink.png";
import pink from "./dark pink.png";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import gold from "./goldy.png"

const categories = [
  {
    name: "Floral Notes",
    image:
      rose,
  },
  {
    name: "Warm & Woody",
    image:
      red,
  },
  {
    name: "Fresh & Citrus",
    image:
      skin,
      },
];

const perfumes = [
  {
    name: "Rose Élixir",
    price: "Rs. 2,499",
    image:
      rose,
  },
  {
    name: "Velvet Oud",
    price: "Rs. 2,999",
    image:
      red,
  },
  {
    name: "Blush Bloom",
    price: "Rs. 2,199",
    image:
      skin,
  },
  {
    name: "Pure Aura",
    price: "Rs. 2,699",
    image:
     pink ,
  },

];

function Home() {
  return (
    <main className="roselia-home">
      {/* Fragrance Categories */}
      <section className="fragrance-section">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR FRAGRANCE</p>
          <h1>Explore the World of Fragrance</h1>
          <p>
            Discover beautiful scents that express your personality.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Discover Collection ↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Perfumes */}
      <section className="products-section">
        <div className="section-heading">
          <p className="eyebrow">THE ROS ELIA EDIT</p>
          <h2>Our Signature Collection</h2>
          <p>Find the fragrance that feels uniquely yours.</p>
        </div>

        <div className="product-grid">
          {perfumes.map((perfume) => (
            <div className="product-card" key={perfume.name}>
              <div className="product-image">
                <img src={perfume.image} alt={perfume.name} />
                <span className="product-label">ROSELIA</span>
              </div>

              <div className="product-info">
                <h3>{perfume.name}</h3>
                <p>{perfume.price}</p>
                <button
                  className="add-cart"
                  onClick={() =>
                    alert(`${perfume.name} added to cart!`)
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="roselia-promo">
        <div className="promo-text">
          <p className="eyebrow">THE ART OF PERFUMERY</p>
          <h2>A Scent Worth Remembering</h2>
          <p>
         Every fragrance tells a story.Find yours with elegance of Roselia.
          </p>
          <PrimaryBtn name={"Explore Collection"}/>
         {/*  <button
            className="promo-button"
            onClick={() =>
              document
                .getElementById("roselia-products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Collection
          </button> */}
        </div>

        <div className="promo-image">
          <img
            src={gold}
            alt="Roselia luxury fragrance inspiration"
          />
        </div>
      </section>

      {/* Store Benefits */}
      <section className="benefits-section">
        <div className="benefit">
          <span>✧</span>
          <h3>Beautiful Fragrances</h3>
          <p>Explore scents for every mood.</p>
        </div>

        <div className="benefit">
          <span>♡</span>
          <h3>Shopping Made Simple</h3>
          <p>Enjoy a smooth shopping experience.</p>
        </div>

        <div className="benefit">
          <span>❀</span>
          <h3>Here to Help</h3>
          <p>We're here to help with your orders.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
