import { useState, useEffect } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {
    const [clicked, setClicked] = useState(() => {
        const storedClicked = localStorage.getItem('cartItems');
        return storedClicked ? JSON.parse(storedClicked) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(clicked));
    }, [clicked])

    function addToCart(item) {
        const inCart = clicked.find(c => c.id === item.id);

        if(inCart) {
            alert('Already in cart')
        } else {
            setClicked([...clicked, {...item, quantity: 1}]);
            alert('Added to cart...❤');
        }
    }

    function removeFromCart(itemId) {
        const updatedCart = clicked.filter(item => item.id !== itemId);
        setClicked(updatedCart);
    }

    function updateQuantity(itemId, update) {
        setClicked(currentItems =>
            currentItems.map(item =>
                item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + update)} : item
            )
        );
    }

    return(
        <CartContext.Provider value={{clicked, setClicked, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}