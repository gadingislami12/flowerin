import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloating.css';

const WhatsAppFloating = () => {
  const handleClick = () => {
    window.open('https://wa.me/6283869632986?text=Hi%20Flowerin,%20I%20need%20some%20help!', '_blank');
  };

  return (
    <button className="whatsapp-floating" onClick={handleClick} aria-label="Chat with us on WhatsApp" title="Chat with us">
      <MessageCircle size={28} color="#fff" />
    </button>
  );
};

export default WhatsAppFloating;
