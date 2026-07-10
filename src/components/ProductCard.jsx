import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product.id, 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Rp {Number(product.price).toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
