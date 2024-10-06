// import React, { createContext, useContext, useState } from 'react';

// // Create a context for the cart
// const CartContext = createContext();

// // Create a custom hook to use the Cart context
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Create a provider component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter(product => product.id !== productId));
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };
