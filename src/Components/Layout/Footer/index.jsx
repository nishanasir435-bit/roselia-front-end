import React from 'react';
import "./footer.css";
import { InstagramFilled } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';
import { TikTokFilled } from '@ant-design/icons';
const Footer= () =>{
return(
    
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>ROSELIA</h2>
          <p>
            Discover the art of fragrance and find
            a scent that feels uniquely yours.
          </p>
        </div>


        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/collection">Collection</a>
          <a href="/contact">Contact</a>
        </div>


        {/* Customer Care */}
        <div className="footer-section">
          <h3>Customer Care</h3>
          <a href="/">Shipping & Delivery</a>
          <a href="/">Returns</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>


        {/* Contact */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Email: roselia@gmail.com</p>
          <p>Phone: 1234567890</p>
          <p>Lahore, Pakistan</p>
        </div>

      </div>


      {/* Newsletter */}
      <div className="newsletter">
        <h3>Join Our Fragrance Family</h3>
        <p>Subscribe for new collections and special offers.</p>

        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>
        </div>
      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 ROSELIA. All Rights Reserved.</p>

        <div className="social-links">
            <a href="https://www.instagram.com/">Instagram
  <InstagramFilled />
</a>
          <a href="https://www.facebook.com/">Facebook
          <FacebookFilled />
          </a>
          <a href="https://www.facebook.com/">TikTok
          <TikTokFilled />
           </a>
        </div>
      </div>

    </footer>
  );
};




export default Footer;
