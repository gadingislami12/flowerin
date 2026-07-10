import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Custom from './pages/Custom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/new-arrivals" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/custom" element={<Custom />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloating />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
