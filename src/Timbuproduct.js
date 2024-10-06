import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import like from './images/Vector.svg';
import cart from './images/shopping-basket-01.svg';

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: {
            organization_id: '2f92313e75c14aa8be16aa9ee8870ef1',
            reverse_sort: 'false',
            page: 1,
            size: 10,
            Appid: 'R20DNO8UMZ1DNI3',
            Apikey: '75034892a33d4a9dbe62a8540f766cf220240712191924040081'
          },
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });

        if (response.data && response.data.items) {
          setProducts(response.data.items);
        } else {
          throw new Error('No items found in the response');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedCartState = savedCart.reduce((acc, productId) => {
      acc[productId] = true;
      return acc;
    }, {});
    setAddedToCart(savedCartState);

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading Products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (productId) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!savedCart.includes(productId)) {
      savedCart.push(productId);
      localStorage.setItem('cart', JSON.stringify(savedCart));
    }
    setAddedToCart((prev) => ({ ...prev, [productId]: true }));
  };

  return (
    <div className='product-container set-product'>
      <p className='stage-cart stage-cart-cart'>
        <span className='go-to-home' onClick={() => navigate('/')}>Home</span> <span>/</span> Cart
      </p>
      <h1>Timbu Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id}>
            <div className='product-card'>
              <div className='product-image-card'>
                <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} className='product-image' alt={item.name} />
                <Link to={`/Viewproduct/${item.id}`} className='view-product-button'>View Product</Link>
              </div>
              <div className='product-details'>
                <p className='product-name'>{item.name}</p>
                <div className='price'>
                  <h3 className='product-price'>{item.current_price[0]["NGN"][0]}</h3>
                  <img src={like} className='like' alt='Like Product' />
                </div>
                <button
                  className={`active-button ${addedToCart[item.id] ? 'added-to-cart' : 'add-to-cart'}`}
                  onClick={() => handleAddToCart(item.id)}
                >
                  <img src={cart} className="cart-logo" alt="cart" />
                  {addedToCart[item.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
