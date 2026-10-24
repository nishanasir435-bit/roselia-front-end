
import React from "react";
import "./about.css";
import golden from "./new golden.png"

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About Roselia</h1>
        <p>
          Discover the art of fragrance
          and express your unique personality.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            At Roselia, we believe that every
            fragrance tells a story. Our collection
            is designed to bring elegance,
            confidence, and beauty to every moment.
          </p>

          <p>
            From soft floral notes to rich,
            luxurious scents, find a fragrance
            that feels uniquely yours.
          </p>

          <button className="about-button">
            Explore Our Collection
          </button>
        </div>

        <div className="about-image">
          <img
            src={golden}
            alt="Roselia luxury perfume"
          />
        </div>
      </section>

      <section className="about-values">
        <div>
          <h3>Our Mission</h3>
          <p>To make every moment more memorable
          through beautiful fragrances.</p>
        </div>

        <div>
          <h3>Our Vision</h3>
          <p>To bring elegance and individuality
          to every fragrance lover.</p>
        </div>

        <div>
          <h3>Our Promise</h3>
          <p>A luxurious fragrance experience
          with every Roselia scent.</p>
        </div>
      </section>

    </div>
  );
}

export default About;
