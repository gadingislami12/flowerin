import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, cartTotal } = useContext(CartContext);

    const handleCheckout = () => {
        let message = `Halo Flowerin! Saya ingin memesan:\n\n`;
        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
            if (item.isCustom && item.details) {
                if (item.details.description) message += `   - Detail: ${item.details.description}\n`;
                if (item.details.snackList) message += `   - Snack: ${item.details.snackList}\n`;
                if (item.details.theme) message += `   - Tema/Warna: ${item.details.theme}\n`;
                if (item.details.nominal) message += `   - Nominal Uang: Rp ${Number(item.details.nominal).toLocaleString('id-ID')}\n`;
                if (item.details.message) message += `   - Pesan Kartu: ${item.details.message}\n`;
            }
        });
        message += `\nTotal Pembayaran: Rp ${cartTotal.toLocaleString('id-ID')}\n\nMohon informasi selanjutnya. Terima kasih!`;
        
        const text = encodeURIComponent(message);
        window.open(`https://wa.me/6283869632986?text=${text}`, '_blank');
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page container empty-cart animate-fade-in">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any beautiful flowers yet.</p>
                <Link to="/shop" className="btn btn-primary mt-20">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container animate-fade-in">
            <h1 className="section-title">Your Cart</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.cart_id} className="cart-item">
                            <img src={item.isCustom ? item.image : `/images/${item.image}`} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">Rp {Number(item.price).toLocaleString('id-ID')}</p>
                                <p className="item-qty">Qty: {item.quantity}</p>
                            </div>
                            <div className="cart-item-actions">
                                <p className="item-subtotal">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                <button className="remove-btn" onClick={() => removeFromCart(item.cart_id)}>
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
