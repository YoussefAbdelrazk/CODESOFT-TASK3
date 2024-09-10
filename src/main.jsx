import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { WishlistProvider } from "./context/wishListContext.jsx";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AllOrdersProvider } from "./context/AllOrders.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <HelmetProvider>

  
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <AllOrdersProvider>
                <App />
            </AllOrdersProvider>
            
          </WishlistProvider>
        
        </CartProvider>
        <ToastContainer position="top-center" />
      </UserProvider>
      </HelmetProvider>
    
  </>
);
