
import React, { useState } from "react";
import "./shop.css";
import perfume from "./new pink.png";
import purples from "./new purple.png";
import  rose from "./new red rose.png";
import styles from "./pink bottle.png"
import olive from "./olive.png"
import skin from "./new skin.png"
import black from "./new black.png"
import golden from "./new golden.png"

function Shop() {
  return (
    <div className="shop-page">

      <h1>Our Perfume Collection</h1>
      <p>Discover your perfect scent with Roselia.</p>

      <div className="product-container">

        <div className="product-card">
          <img src={perfume} alt="perfume" />
          <h2>Roselia Rose</h2>
          <p>Rs. 2500</p>
          
        </div>

        <div className="product-card">
          <img src={purples} alt="Perfume 2" />
          <h2>Roselia Bloom</h2>
          <p>Rs. 3000</p>
          
        </div>

        <div className="product-card">
          <img src={rose} alt="Perfume 3" />
          <h2>Roselia Oud</h2>
          <p>Rs. 3500</p>
          
        </div>

        <div className="product-card">
          <img src={styles} alt="Perfume 4" />
          <h2>Roselia Velvet</h2>
          <p>Rs. 2800</p>
          
        </div>

        <div className="product-card">
          <img src={olive} alt="Perfume 5" />
          <h2>Roselia Dream</h2>
          <p>Rs. 3200</p>
          
        </div>

        
        <div className="product-card">
          <img src={skin} alt="Perfume 5" />
          <h2>Roselia Musk</h2>
          <p>Rs. 3300</p>
          
        </div>

<div className="product-card">
          <img src={black} alt="Perfume 5" />
          <h2>Roselia Night</h2>
          <p>Rs. 3000</p>
          
        </div>

<div className="product-card">
          <img src={golden} alt="Perfume 5" />
          <h2>Roselia Delight</h2>
          <p>Rs. 3600</p>
          
        </div>

      </div>
    </div>
  );
}

export default Shop;