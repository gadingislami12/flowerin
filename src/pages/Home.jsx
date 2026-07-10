import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Get top 4 products
    setFeaturedProducts(productsData.slice(0, 4));
  }, []);

  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Say It With Flowers</h1>
          <p>Premium floral arrangements delivered fresh to your door. Celebrate every moment with elegance.</p>
          <Link to="/shop" className="btn btn-primary hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {['Birthday', 'Wedding', 'Anniversary', 'Graduation'].map((cat, idx) => (
            <Link to={`/shop?occasion=${cat.toLowerCase()}`} className="category-card" key={idx}>
              <div className="category-overlay">
                <h3>{cat}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section container">
        <h2 className="section-title">Best Sellers</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-40">
          <Link to="/shop" className="btn btn-outline">View All Products</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
