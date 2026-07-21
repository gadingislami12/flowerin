import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, MapPin } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setMobileMenuOpen(false);
    }
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <header className="navbar">
      {/* Top Row: Logo & Icons */}
      <div className="navbar-top">
        <div className="container navbar-top-container">
          <div className="nav-top-left">
            <Menu className="icon-menu" size={24} onClick={() => setMobileMenuOpen(true)} />
          </div>

          <div className="nav-logo">
            <Link to="/">
              <h1>Flowerin</h1>
            </Link>
          </div>

          <div className="nav-right">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <Search size={18} />
              </button>
            </form>

            <Link to="/cart" className="cart-icon-wrapper">
              <ShoppingBag size={22} className="icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <div className="navbar-bottom">
        <div className="container">
          <nav className="nav-links">
            <Link to="/new-arrivals" className="nav-single-link">New Arrivals</Link>

            <div className="dropdown">
              <span className="dropdown-title">Flower</span>
              <div className="dropdown-content">
                <Link to="/shop?category=special-edition">Special Edition</Link>
                <Link to="/shop?category=buket-satin">Buket Satin</Link>
                <Link to="/shop?category=buket-snack">Buket Snack</Link>
                <Link to="/shop?category=buket-uang">Buket Uang</Link>
                <Link to="/shop?category=buket-kertas-skripsi">Buket Kertas Skripsi</Link>
                <Link to="/shop?category=fresh-flower">Fresh Flower</Link>
                <Link to="/shop?category=artificial-flower">Artificial Flower</Link>
                <Link to="/shop?category=flower-box">Flower Box</Link>
                <Link to="/shop?category=standing-flower">Standing Flower</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="dropdown-title">Occasions</span>
              <div className="dropdown-content">
                <Link to="/shop?occasion=birthday">Birthday</Link>
                <Link to="/shop?occasion=anniversary">Anniversary</Link>
                <Link to="/shop?occasion=graduation">Graduation</Link>
                <Link to="/shop?occasion=wedding">Wedding</Link>
                <Link to="/shop?occasion=valentine">Valentine</Link>
                <Link to="/shop?occasion=mothers-day">Mother's Day</Link>
                <Link to="/shop?occasion=sympathy">Sympathy</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="dropdown-title">Custom</span>
              <div className="dropdown-content">
                <Link to="/custom?type=bouquet">Custom Bouquet Request</Link>
                <Link to="/custom?type=uang">Custom Uang (nominal sendiri)</Link>
                <Link to="/custom?type=snack">Custom Snack (pilih isi)</Link>
                <Link to="/custom?type=message-card">Custom Message Card</Link>
                <Link to="/custom?type=warna-tema">Request Warna / Tema</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="dropdown-title">Location</span>
              <div className="dropdown-content location-dropdown">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.62641527376!2d106.6908569!3d-6.337192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e573e87de8e1%3A0xd604169527eeb226!2sViktor%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sen!2sid!4v1683838293818!5m2!1sen!2sid"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <p className="location-text"><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />Viktor, Pamulang, Tangerang Selatan</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Menu</h2>
          <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)}>&times;</button>
        </div>
        <div className="drawer-content">
          <form className="drawer-search-form" onSubmit={handleSearch} style={{ padding: '15px 20px', borderBottom: '1px solid var(--border-color)' }}>
            <div className="search-form" style={{ width: '100%' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                style={{ width: '100%', flex: 1, padding: '8px 12px' }}
              />
              <button type="submit" className="search-button">
                <Search size={18} />
              </button>
            </div>
          </form>
          <Link to="/new-arrivals" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
          
          <div className="drawer-accordion">
            <button className="drawer-accordion-btn" onClick={() => toggleAccordion('flower')}>
              Flower {activeAccordion === 'flower' ? '−' : '+'}
            </button>
            <div className={`drawer-accordion-content ${activeAccordion === 'flower' ? 'show' : ''}`}>
              <Link to="/shop?category=special-edition" onClick={() => setMobileMenuOpen(false)}>Special Edition</Link>
              <Link to="/shop?category=buket-satin" onClick={() => setMobileMenuOpen(false)}>Buket Satin</Link>
              <Link to="/shop?category=buket-snack" onClick={() => setMobileMenuOpen(false)}>Buket Snack</Link>
              <Link to="/shop?category=buket-uang" onClick={() => setMobileMenuOpen(false)}>Buket Uang</Link>
              <Link to="/shop?category=buket-kertas-skripsi" onClick={() => setMobileMenuOpen(false)}>Buket Kertas Skripsi</Link>
              <Link to="/shop?category=fresh-flower" onClick={() => setMobileMenuOpen(false)}>Fresh Flower</Link>
              <Link to="/shop?category=artificial-flower" onClick={() => setMobileMenuOpen(false)}>Artificial Flower</Link>
              <Link to="/shop?category=flower-box" onClick={() => setMobileMenuOpen(false)}>Flower Box</Link>
              <Link to="/shop?category=standing-flower" onClick={() => setMobileMenuOpen(false)}>Standing Flower</Link>
            </div>
          </div>

          <div className="drawer-accordion">
            <button className="drawer-accordion-btn" onClick={() => toggleAccordion('occasions')}>
              Occasions {activeAccordion === 'occasions' ? '−' : '+'}
            </button>
            <div className={`drawer-accordion-content ${activeAccordion === 'occasions' ? 'show' : ''}`}>
              <Link to="/shop?occasion=birthday" onClick={() => setMobileMenuOpen(false)}>Birthday</Link>
              <Link to="/shop?occasion=anniversary" onClick={() => setMobileMenuOpen(false)}>Anniversary</Link>
              <Link to="/shop?occasion=graduation" onClick={() => setMobileMenuOpen(false)}>Graduation</Link>
              <Link to="/shop?occasion=wedding" onClick={() => setMobileMenuOpen(false)}>Wedding</Link>
              <Link to="/shop?occasion=valentine" onClick={() => setMobileMenuOpen(false)}>Valentine</Link>
              <Link to="/shop?occasion=mothers-day" onClick={() => setMobileMenuOpen(false)}>Mother's Day</Link>
              <Link to="/shop?occasion=sympathy" onClick={() => setMobileMenuOpen(false)}>Sympathy</Link>
            </div>
          </div>

          <div className="drawer-accordion">
            <button className="drawer-accordion-btn" onClick={() => toggleAccordion('custom')}>
              Custom {activeAccordion === 'custom' ? '−' : '+'}
            </button>
            <div className={`drawer-accordion-content ${activeAccordion === 'custom' ? 'show' : ''}`}>
              <Link to="/custom?type=bouquet" onClick={() => setMobileMenuOpen(false)}>Custom Bouquet Request</Link>
              <Link to="/custom?type=uang" onClick={() => setMobileMenuOpen(false)}>Custom Uang (nominal sendiri)</Link>
              <Link to="/custom?type=snack" onClick={() => setMobileMenuOpen(false)}>Custom Snack (pilih isi)</Link>
              <Link to="/custom?type=message-card" onClick={() => setMobileMenuOpen(false)}>Custom Message Card</Link>
              <Link to="/custom?type=warna-tema" onClick={() => setMobileMenuOpen(false)}>Request Warna / Tema</Link>
            </div>
          </div>

          <div className="drawer-accordion">
            <button className="drawer-accordion-btn" onClick={() => toggleAccordion('location')}>
              Location {activeAccordion === 'location' ? '−' : '+'}
            </button>
            <div className={`drawer-accordion-content ${activeAccordion === 'location' ? 'show' : ''}`} style={{ padding: '10px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.62641527376!2d106.6908569!3d-6.337192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e573e87de8e1%3A0xd604169527eeb226!2sViktor%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sen!2sid!4v1683838293818!5m2!1sen!2sid"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <p className="location-text" style={{ marginTop: '5px', fontSize: '12px' }}>
                <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
                Viktor, Pamulang, Tangerang Selatan
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
