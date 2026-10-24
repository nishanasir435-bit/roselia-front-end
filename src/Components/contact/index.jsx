import React from "react";
import "./contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Roselia!");
  };

  return (
    <div className="roselia-contact-page">
      <div className="roselia-contact-container">

        {/* Left Side */}
        <div className="roselia-contact-info">
          <p className="roselia-contact-tag">WE'D LOVE TO HEAR FROM YOU</p>

          <h1>
            Let's Talk
            <br />
            <span>Fragrance.</span>
          </h1>

          <p className="roselia-contact-description">
            Have a question about our perfumes or need help with your order?
            We're here to help you find your perfect scent.
          </p>

          <div className="roselia-contact-detail">
            <div className="roselia-contact-icon">✉</div>
            <div>
              <h3>Email Us</h3>
              <p>hello@roselia.com</p>
            </div>
          </div>

          <div className="roselia-contact-detail">
            <div className="roselia-contact-icon">♡</div>
            <div>
              <h3>Customer Care</h3>
              <p>We're happy to assist you with your orders.</p>
            </div>
          </div>

          <div className="roselia-contact-detail">
            <div className="roselia-contact-icon">✧</div>
            <div>
              <h3>Our Promise</h3>
              <p>Every message matters to us.</p>
            </div>
          </div>

          <p className="roselia-contact-note">
            ROSELIA — A SCENT THAT STAYS WITH YOU
          </p>
        </div>

        {/* Right Side Contact Form */}
        <div className="roselia-contact-form-box">
          <p className="roselia-contact-small-title">GET IN TOUCH</p>
          <h2>Send Us a Message</h2>
          <p className="roselia-contact-form-text">
            Fill in the details below and let us know how we can help.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="roselia-contact-input-row">
              <div className="roselia-contact-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="roselia-contact-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="roselia-contact-field">
              <label>Subject</label>
              <select required defaultValue="">
                <option value="" disabled>Select a subject</option>
                <option>Product Inquiry</option>
                <option>Order Support</option>
                <option>Returns and Exchanges</option>
                <option>Other</option>
              </select>
            </div>

            <div className="roselia-contact-field">
              <label>Your Message</label>
              <textarea
                placeholder="Tell us how we can help..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="roselia-contact-submit">
              Send Message <span>↗</span>
            </button>
          </form>

          <p className="roselia-contact-privacy">
            Thank you for choosing Roselia. Your experience matters to us.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;