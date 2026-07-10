import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Flowerin</h3>
          <p>Elegance in every petal. We deliver the freshest premium flowers for your special moments.</p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop">Best Sellers</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About & Support</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Flowerin. All rights reserved.</p>
        <p className="footer-author">
          Created by{' '}
          <a href="https://www.instagram.com/ulfau_/" target="_blank" rel="noopener noreferrer">
            Ulfa
          </a>{' '}
          &amp; Collab with{' '}
          <a href="https://www.instagram.com/gading19_/" target="_blank" rel="noopener noreferrer">
            Gading Islami
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
