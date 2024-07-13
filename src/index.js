import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './pages/Product';
import CartProdList from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Cart",
    element: <CartProdList />,
  },
  {
    path: "Checkout",
    element: <Checkout />,
  },
  {
    path: "Footer",
    element: <Footer />,
  },
  {
    path: "Product",
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
