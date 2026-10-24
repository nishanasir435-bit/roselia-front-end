import React from "react";
import "./errorpage.css";

function Error({ setPage }) {
  return (
    <div className="roselia-error-page">
      <div className="roselia-error-card">

        <div className="roselia-error-decoration">✧</div>

        <p className="roselia-error-brand">ROSELIA</p>
        <p className="roselia-error-subtitle">LUXURY PERFUMES</p>

        <div className="roselia-error-number">404</div>

        <h1>Page Not Found</h1>

        <div className="roselia-error-divider">
          <span>✦</span>
        </div>

        <p className="roselia-error-message">
          Oops! It seems this page has lost its fragrance.
          The page you are looking for doesn't exist or may
          have been moved.
        </p>

        <div className="roselia-error-buttons">
          <button
            className="roselia-error-home"
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>

          <button
            className="roselia-error-collection"
            onClick={() => setPage("products")}
          >
            Explore Collection
          </button>
        </div>

        <p className="roselia-error-footer">
          BEAUTY IS ALWAYS A GOOD IDEA
        </p>

      </div>
    </div>
  );
}

export default Error;