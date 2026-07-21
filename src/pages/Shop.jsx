import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const unavailableCategories = [
  'fresh-flower',
  'artificial-flower',
  'flower-box',
  'standing-flower',
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const occasion = params.get('occasion');
    const search = params.get('search');

    let filtered = [...productsData];

    if (location.pathname === '/new-arrivals') {
      filtered = filtered
        .filter(p => p.is_new_arrival)
        .sort((firstProduct, secondProduct) => {
          const firstIsSpecialEdition = firstProduct.category === 'special-edition';
          const secondIsSpecialEdition = secondProduct.category === 'special-edition';

          return Number(secondIsSpecialEdition) - Number(firstIsSpecialEdition);
        });
    }
    if (category && unavailableCategories.includes(category)) {
      filtered = [];
    } else if (category) {
      filtered = filtered.filter(p => p.category === category);
    }
    if (occasion) {
      filtered = filtered.filter(p => p.occasion === occasion);
    }
    if (search) {
      const query = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        (p.description && p.description.toLowerCase().includes(query))
      );
    }

    setProducts(filtered);
    setLoading(false);
  }, [location.search, location.pathname]);

  const getPageTitle = () => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const occasion = params.get('occasion');
    const search = params.get('search');
    
    if (location.pathname === '/new-arrivals') {
      return 'New Arrivals';
    }
    if (category) {
      return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    if (occasion) {
      const formattedOccasion = occasion.charAt(0).toUpperCase() + occasion.slice(1);
      return `${formattedOccasion} Flowers`;
    }
    if (search) {
      return `Search Results for "${search}"`;
    }
    return 'All Products';
  };

  const selectedCategory = new URLSearchParams(location.search).get('category');
  const isUnavailableCategory = unavailableCategories.includes(selectedCategory);

  return (
    <div className="shop-page container animate-fade-in">
      <div className="shop-header">
        <h1 className="section-title">{getPageTitle()}</h1>
      </div>
      
      {loading ? (
        <div className="loading">Loading beautiful flowers...</div>
      ) : (
        <div className="products-grid">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products text-center">
              {isUnavailableCategory
                ? 'Produk belum tersedia saat ini.'
                : 'No products found matching your filter.'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;
