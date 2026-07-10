import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { MessageCircle } from 'lucide-react';
import './Custom.css';

const Custom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('bouquet');

  // Form states
  const [formData, setFormData] = useState({
    budget: '',
    description: '',
    theme: '',
    snackList: '',
    nominal: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
      setActiveTab(type);
    }
  }, [location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ budget: '', description: '', theme: '', snackList: '', nominal: '', message: '' }); // reset form
    navigate(`/custom?type=${tab}`, { replace: true });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceValue = parseFloat(formData.budget) || parseFloat(formData.nominal) || 0;

    // Create cart item
    const customItem = {
      id: `custom-${Date.now()}`,
      name: `Custom ${activeTab.replace('-', ' ').toUpperCase()}`,
      price: priceValue,
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop', // Placeholder flower image
      quantity: 1,
      isCustom: true,
      details: { ...formData, type: activeTab }
    };

    addToCart(customItem);
    alert('Custom request added to cart successfully!');
    setFormData({ budget: '', description: '', theme: '', snackList: '', nominal: '', message: '' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Flowerin! I want to request a custom ${activeTab.replace('-', ' ')}.\n\nDetails: ${JSON.stringify(formData)}`);
    window.open(`https://wa.me/6283869632986?text=${text}`, '_blank');
  };

  return (
    <div className="custom-page container section-padding">
      <div className="custom-header">
        <h2>Request a Custom Order</h2>
        <p>Make it uniquely yours. Fill out the form below and we will craft it to perfection.</p>
      </div>

      <div className="custom-layout">
        <aside className="custom-sidebar">
          <ul>
            <li className={activeTab === 'bouquet' ? 'active' : ''} onClick={() => handleTabChange('bouquet')}>Custom Bouquet</li>
            <li className={activeTab === 'uang' ? 'active' : ''} onClick={() => handleTabChange('uang')}>Custom Uang</li>
            <li className={activeTab === 'snack' ? 'active' : ''} onClick={() => handleTabChange('snack')}>Custom Snack</li>
            <li className={activeTab === 'message-card' ? 'active' : ''} onClick={() => handleTabChange('message-card')}>Message Card</li>
            <li className={activeTab === 'warna-tema' ? 'active' : ''} onClick={() => handleTabChange('warna-tema')}>Warna / Tema</li>
          </ul>
        </aside>

        <main className="custom-content">
          <form onSubmit={handleSubmit} className="custom-form">

            {activeTab === 'bouquet' && (
              <div className="form-group-animate">
                <h3>Custom Bouquet Request</h3>
                <div className="form-group">
                  <label>Flower Preferences & Details</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="e.g., I want 10 red roses mixed with white lilies..." required></textarea>
                </div>
                <div className="form-group">
                  <label>Estimated Budget (Rp)</label>
                  <input type="number" name="budget" value={formData.budget} onChange={handleInputChange} placeholder="e.g., 350000" required />
                </div>
              </div>
            )}

            {activeTab === 'uang' && (
              <div className="form-group-animate">
                <h3>Custom Buket Uang</h3>
                <div className="form-group">
                  <label>Total Nominal Uang (Rp)</label>
                  <input type="number" name="nominal" value={formData.nominal} onChange={handleInputChange} placeholder="e.g., 1000000" required />
                </div>
                <div className="form-group">
                  <label>Pecahan Uang</label>
                  <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="e.g., Pecahan 50rb" required />
                </div>
              </div>
            )}

            {activeTab === 'snack' && (
              <div className="form-group-animate">
                <h3>Custom Buket Snack</h3>
                <div className="form-group">
                  <label>Daftar Snack</label>
                  <textarea name="snackList" value={formData.snackList} onChange={handleInputChange} placeholder="e.g., 2x Silverqueen, 3x Pocky, 1x Lays" required></textarea>
                </div>
                <div className="form-group">
                  <label>Estimated Budget (Rp)</label>
                  <input type="number" name="budget" value={formData.budget} onChange={handleInputChange} placeholder="e.g., 150000" required />
                </div>
              </div>
            )}

            {activeTab === 'message-card' && (
              <div className="form-group-animate">
                <h3>Custom Message Card</h3>
                <div className="form-group">
                  <label>Pesan Anda</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Write your heartfelt message here..." required></textarea>
                </div>
              </div>
            )}

            {activeTab === 'warna-tema' && (
              <div className="form-group-animate">
                <h3>Request Warna / Tema</h3>
                <div className="form-group">
                  <label>Palet Warna / Tema</label>
                  <input type="text" name="theme" value={formData.theme} onChange={handleInputChange} placeholder="e.g., Pastel Pink and White, or Rustic Autumn" required />
                </div>
                <div className="form-group">
                  <label>Catatan Tambahan</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Any specific wrapping paper or ribbon preferences?"></textarea>
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn-primary">Add to Cart</button>
              <button type="button" className="btn-secondary whatsapp-btn" onClick={handleWhatsApp}>
                <MessageCircle size={18} /> Discuss on WhatsApp
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Custom;
