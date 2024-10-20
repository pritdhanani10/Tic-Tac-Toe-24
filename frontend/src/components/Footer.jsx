import React from "react";
import "./Footer.css"; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* E-Library Name and Tagline */}
        <div className="footer-logo">
          <h2>Hackathon</h2>
          <p>Connecting you to the world of knowledge.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/categories">Browse Categories</a>
            </li>
            <li>
              <a href="/new-arrivals">New Arrivals</a>
            </li>
            <li>
              <a href="/popular">Popular Books</a>
            </li>
            <li>
              <a href="/recommendations">Recommended for You</a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/support">Help & Support</a>
            </li>
          </ul>
        </div>

        {/* User Features */}
        <div className="footer-section">
          <h4>User Features</h4>
          <ul>
            <li>Personalized Recommendations</li>
            <li>Curated Reading Lists</li>
            <li>Top Picks from the Community</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@elibrary.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Library Avenue, Booktown, BT 45678</p>
        </div>

       
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/cookies">Cookies Policy</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; 2024 E-Library Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
