import React, { createContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (productOrId, quantity = 1) => {
        let isCustom = false;
        setCartItems((prevItems) => {
            // Case 1: Custom item object
            if (typeof productOrId === 'object' && productOrId !== null) {
                isCustom = true;
                const item = productOrId;
                const cart_id = item.cart_id || item.id || `custom-${Date.now()}`;
                
                // Check if this custom item is already in cart
                const existingIndex = prevItems.findIndex(i => i.cart_id === cart_id);
                if (existingIndex > -1) {
                    const newItems = [...prevItems];
                    newItems[existingIndex].quantity += quantity;
                    return newItems;
                } else {
                    return [...prevItems, { ...item, cart_id }];
                }
            }
            
            // Case 2: Standard product ID
            const productId = Number(productOrId);
            const product = productsData.find(p => p.id === productId);
            if (!product) {
                console.error(`Product with ID ${productId} not found!`);
                return prevItems;
            }

            const cart_id = `product-${productId}`;
            const existingIndex = prevItems.findIndex(i => i.cart_id === cart_id);
            if (existingIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingIndex].quantity += quantity;
                return newItems;
            } else {
                return [...prevItems, {
                    cart_id,
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                }];
            }
        });

        if (!isCustom) {
            alert('Added to cart successfully!');
        }
    };

    const removeFromCart = (cartId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.cart_id !== cartId));
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
