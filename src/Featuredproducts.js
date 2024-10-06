import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from './images/image 6.svg';
import product2 from './images/image 4.svg';
import product3 from './images/image 3.svg';
import product4 from './images/image 5.svg';
import product5 from './images/image 2.svg';
import product6 from './images/image 7.svg';
import product7 from './images/image 8.svg';
import product8 from './images/image 9.svg';
import product9 from './images/image 13.svg';
import product10 from './images/image 10.svg';
import product11 from './images/image 11.svg';
import product12 from './images/image 12.svg';
import like from './images/Vector.svg';
import cart from './images/shopping-basket-01.svg';

const products = [
  { img: product1, name: 'BRUHM BLACK AC BAS-09ICQB', price: '₦298,490', id: 1 },
  { img: product2, name: 'BRUHM LED BTF43SV FHD , SMART OS TV', price: '₦150,000', id: 2 },
  { img: product3, name: 'BINATONE BLENDER', price: '₦120,000', id: 3 },
  { img: product4, name: 'BRUHM BLACK REF BFQ-592EN ', price: '₦200,000', id: 4 },
  { img: product5, name: 'HISENSE 20KG ICE MAKER ICM2011', price: '₦298,490', id: 5 },
  { img: product6, name: 'HISENSE H04AfBK1S1 4.5L AIR FRYER', price: '₦150,000', id: 6 },
  { img: product7, name: 'LG F2V5FGPYJE 9/5KG FRONT LOAD', price: '₦120,000', id: 7 },
  { img: product8, name: 'HISENSE 100 INCH U7K SERIES ULED 4K', price: '₦200,000', id: 8 },
  { img: product9, name: 'HUAWEI -M 2.5kW POWER  INVERTER', price: '₦298,490', id: 9 },
  { img: product10, name: 'MAXI E17000KWH GENERATOR 21.25 KVA', price: '₦150,000', id: 10 },
  { img: product11, name: 'LMAXI TOASTER 2 SLICES', price: '₦120,000', id: 11 },
  { img: product12, name: 'Jinko 625W Monofacial Solar Panel', price: '₦200,000', id: 12 },
];

const FeaturedProducts = () => {
  return (
    <div className='product-container set-product'>
      <h1>Featured Products</h1>
      <div className='product-grid'>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

const Product = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (savedCart.includes(product.id)) {
      setAddedToCart(true);
    }
  }, [product.id]);

  const handleViewProduct = () => {
    navigate(`/viewproduct/${product.id}`); // Navigate to viewproduct with product id
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!savedCart.includes(product.id)) {
      savedCart.push(product.id);
    }
    localStorage.setItem('cart', JSON.stringify(savedCart));
  };

  return (
    <div className='product-card'>
      <div className='product-image-card'>
        <img src={product.img} className='product-image' alt='Product' />
        <button className='view-product-button' onClick={handleViewProduct}>
          View Product
        </button>
      </div>
      <div className='product-details'>
        <p className='product-name'>{product.name}</p>
        <div className='price'>
          <h3 className='product-price'>{product.price}</h3>
          <img src={like} className='like' alt='Like Product' />
        </div>
        <button className='active-button add-to-cart' onClick={handleAddToCart} disabled={addedToCart}>
          <img src={cart} className="cart-logo" alt="cart" /> {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default FeaturedProducts;
