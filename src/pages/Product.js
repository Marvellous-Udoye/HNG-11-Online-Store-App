import React from 'react';
// import Layout from '@theme/Layout';
import Navbar from "../Navbar";
import DisplayProducts from '../Timbuproduct';
import Footer from "../Footer";

export default function Product() {
  return (
    <div>
      <Navbar />
      <DisplayProducts />
      <Footer />
    </div>
  );
}